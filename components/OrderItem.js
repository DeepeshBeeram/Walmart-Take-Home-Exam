
import { Badge, Box, Image } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import orderItemStyles from "../styles/OrderItemStyle.module.css"


/**
 * This is OrderItem component that displays the products list
 */


export default function OrderItem({ productsOfOrder }) {


    return (
        <Container className={orderItemStyles.container}>
            {productsOfOrder.items.map((product, index) => (
                <Container key={index} >
                    {product.isRollback ? (
                        <Box borderColor="red.200" className={orderItemStyles.rollback} border="1px" borderRadius="sm" w="70px" mr="2" p={1} color="red">Rollback</Box>
                    ) : <Box visibility={"hidden"}  border="1px" borderRadius="md" w="120px" ml="2" p={1} color="red">Rollback</Box>}
                    <Box className={orderItemStyles.containerChild} padding="4" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image className={orderItemStyles.imageClass} src={product.imageUrl} />

                        <Box mt="2"  p="2">
                            <Box d="flex" alignItems="baseline">
                                <Badge borderRadius="full" px="2" colorScheme="teal">
                                    ${product.linePrice}
                                </Badge>
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    ml="2"
                                >
                                    {product.pricePerUnit}
                                </Box>
                            </Box>

                            <Box
                                mt="1"
                                color="gray.500"
                                fontWeight="normal"
                                letterSpacing="wide"
                                fontSize="sm"
                            >
                                {product.finalCostByWeight ? 'Final cost by weight' : null}
                            </Box>

                            <Box
                                mt="2"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                fontSize="sm"
                            >
                                {product.name}
                            </Box>

                            <Box mt="2" fontSize="sm">
                                Quantity: {product.quantity}
                            </Box>
                        </Box>
                    </Box>

                </Container>

            ))}

        </Container >
    )
}