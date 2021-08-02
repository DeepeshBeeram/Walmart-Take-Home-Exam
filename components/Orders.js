import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"
import { Switch } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

import { useContext, useState } from "react"
import orderStyles from "../styles/OrderStyle.module.css"
import ModalComponent from "./Modal"
import { useDisclosure } from "@chakra-ui/react"
import Moment from 'moment';
import { Data } from '../pages/index'
import ReactPaginate from "react-paginate"
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'





export default function Orders() {

    
    //useDisclosure is custom hook which is given by the Chakra UI for Modal popup
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { orders, products } = useContext(Data)
    const [sortFlag, setsortFlag] = useState(false);

    

    const [ordersList, setOrdersList] = useState(orders)
    const [orderItem, setorderItem] = useState({})
    const [productList, setProductList] = useState({})

    const [pageNumber, setPageNumber] = useState(0)


    /**
     * Orders per page is set to 10 
     * Based on the page number selected the orders data keeps on changing by slicing the orders array with start and end index
     * start index being so far visited orders list and end index being the next 10 pages in the orders list
     * displayOrders function returns the table body based on the given slice of orders data
     */

    const ordersPerPage = 10

    const listVisited = pageNumber * ordersPerPage
    const displayOrders = ordersList.slice(listVisited, listVisited + ordersPerPage).map((order, index) => {

        return (
            <Tr onClick={() => {
                openModal(order)
            }} key={index} className={orderStyles.tableRow}>
                <Td>{order.orderId}</Td>
                <Td>{order.customerId}</Td>
                <Td>{Moment(order.orderCreatedAt, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('MM/DD/YYYY')}</Td>
                <Td>{order.isDeliveved ? 'Yes' : 'No'} </Td>
            </Tr>
        )


    })

    /**
     * Below code is used to calculate the page count based on the orders data which is necessary to display number of pages for pagination
     * changePage method is invoked when a particular page number is selected and updates the state of page number accordingly
     */

    const pageCount = Math.ceil(ordersList.length / ordersPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    /**
     * Below function is invoked when the switch button of show delivered is clicked 
     * This filters the orders table data with respective to isDeliveved boolean value and sets the ordersList state 
     */

    const filterOrders = (e) => {

        let checked = e.target.checked
        let filteredOrdersList = orders.filter((item) => item.isDeliveved == checked)
        setOrdersList(filteredOrdersList)

    }

    /**
     * Below function is invoked when a row of the Orders table is clicked passing the respective order object.
     * This calculates the respective products of each order has by comparing with offerId present in products data 
     * sets the productList state with an new object having orderId, product items, totalPrice (calculated for all the products for a particular order)
     */

    const openModal = (order) => {
        
        onOpen()
        setorderItem(order)

        let productObj = { orderId: order.orderId, items: [] }
        let totalPrice = 0;

        for (let item of order.items) {
            for (let product of products) {
                if (item.offerId == product.offerId) {

                    totalPrice += product.linePrice

                    product.quantity = item.quantity
                    productObj.items.push(product)
                }
            }
        }

        productObj.totalPrice = totalPrice

        setProductList(productObj)


    }

    /**
     * Below function is invoked if arrow button is clicked on the Order Date column of Orders table
     * sortFlag is the state that toggles with boolean value (true/false) and sort accordingly by order data either ascending or descending
     */

    const sortOrdersByDate = () => {


        if (sortFlag) {
            let sortedOrders = ordersList.slice(0).sort((a, b) => new Date(a.orderCreatedAt) - new Date(b.orderCreatedAt))
            setOrdersList(sortedOrders)
            setsortFlag(false);
        } else {
            let sortedOrders = ordersList.slice(0).sort((a, b) => new Date(b.orderCreatedAt) - new Date(a.orderCreatedAt))
            setOrdersList(sortedOrders)
            setsortFlag(true);
        }

    }


    return (
        <Container className={orderStyles.mainContainer} maxW="container.xl">

            <Container className={orderStyles.orderContainer} maxW="container.xl">
                <Flex className={orderStyles.filterContainer}>
                    <div>
                        <Text fontSize="2xl">Orders ({ordersList.length}) </Text>
                    </div>
                    <Spacer />
                    <div className={orderStyles.deliveredContainter}>
                        <span className={orderStyles.deliveredClass}>Show Delivered</span>
                        <Switch onChange={filterOrders} />
                    </div>
                </Flex>
                <div className={orderStyles.orderTable}>
                    <Table variant="simple">
                        <Thead >
                            <Tr className={orderStyles.tableHeader}>
                                <Th>Order #</Th>
                                <Th>Customer ID</Th>
                                <Th>Order Date {sortFlag ? (<ArrowUpIcon className={orderStyles.sortClass} onClick={sortOrdersByDate} />) : (<ArrowDownIcon className={orderStyles.sortClass} onClick={sortOrdersByDate} />)}</Th>
                                <Th>Delivered</Th>
                            </Tr>
                        </Thead>
                        <Tbody className={orderStyles.tableBody}>
                            {displayOrders}
                        </Tbody>
                    </Table>
                </div>
                <div className={orderStyles.pagination}>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={orderStyles.paginationBtns}
                        previousLinkClassName={"previousBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={orderStyles.paginationDisabled}
                        activeClassName={orderStyles.paginationActive}
                    />
                </div>

                <ModalComponent productsOfOrder={productList} isOpen={isOpen} onClose={onClose} />

            </Container>

        </Container>
    )
}