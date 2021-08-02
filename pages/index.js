import Head from "next/head";
import Image from "next/image";
import { createContext } from "react";
import Orders from "../components/Orders";
import { server } from '../config'


/**
 * Used Context API for products and orders data so that it makes it easy to pass data throughout the app
 * without manually passing props down the tree
 * Created Context by name Data and provided accordingly
 */

export const Data = createContext();

export default function Home({ orders, products }) {
  return (
    <div>
      <Head>
        <title>Walmart Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          display: "flex",
          width: "100%",
          height: "75px",
          background: "#0071DC",
          position: "fixed",
          top: 0,
        }}
      >
        <div
          style={{
            position: "relative",
            paddingTop: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Image src="/sparkle.svg" alt="walmart logo" width={30} height={30} />
        </div>
      </nav>

      <Data.Provider value={{ orders, products }}>
        <Orders />
      </Data.Provider>



    </div>
  );
}

/**
 * Used getStaticProps to pre-render the result of orders and products data which happens during the build time
 * Used interms of performance point of view (fast loading)
 */

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/orders`)
  const res1 = await fetch(`${server}/api/products`)
  const orders = await res.json()

  const products = await res1.json()

  return {
    props: {
      orders,
      products
    }
  }
}
