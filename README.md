## Walmart Frontend Take-Home Challenge

Thanks for your interest in Walmart! As part of our interview process we'd like you to build a simple responsive web application that allows an end user to view order information. All backend APIs are provided in the project. This challenge should take ~3 hours to complete.
​

## Requirements

Orders page:
- A user can view basic order information
- A user can view a count of total orders
- A user can filter orders to view only orders with isDeliveved=true status
- A user can click a single order row on the page to view order details in a modal

Order Details modal:
- A user can view order ID
- A user can view order item details
- A user can view total order $ amount

Design specifications are provided in `frontend-design.pdf`. Please try to match these designs as closely as possible (it doesn't need to be pixel perfect).
  ​
Lastly, please include a write-up with the reasoning behind your development decisions.
  ​

## List of APIs
​
| Endpoint | Description |
| ------------------------------------------------ | -------------------------- |
| http://localhost:3000/api/orders | fetch list of orders |
| http://localhost:3000/api/orders?id={customerId} | fetch order by customer id |
| http://localhost:3000/api/products | fetch list of products |


We recommend using fetch or axios for interacting with APIs.
​

## Design/Styling Resources:

Please refer to `frontend-design.pdf` for design specifications.
​
For UI components, [chakra-ui](https://chakra-ui.com) has been installed. You can use chakra-ui for the modal/toggle button.
​
For styling, `emotion/styled` has been installed but feel free to use css/sass.
​
This project has been set-up using next.js (https://nextjs.org/).
​
Feel free to install and use additional libraries (please include an explanation of your choice in your write-up).
​

## Getting Started

```bash
$ npm install
​
$ npm run dev
```

To view the web app, copy/paste the following url in your browser: [http://localhost:3000](http://localhost:3000).
​
You can start editing the page by modifying `pages/index.js`.
​

## Submitting
​
When you're done with the project please send us a link to a repository or provide a zip file.
​

## Extra Credit​

- Pagination
- Sorting
- Filtering
- If you find yourself with spare time after taking care of the requirements consider spending some extra time on the visual presentation.
- Add some animations, perfect the spacing, go wild!
  ​

## Help

Please reach out to mark.cinali@walmart.com if you have questions or get stuck.
