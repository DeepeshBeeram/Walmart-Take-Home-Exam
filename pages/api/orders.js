import orders from "../../data/orders.json";

export default function handler(req, res) {
  const { id } = req.query; // customer id
  const results = id
    ? orders.filter((order) => order.customerId === id)
    : orders;
  res.status(200).json(results);
}
