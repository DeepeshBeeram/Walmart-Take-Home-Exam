import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
} from "@chakra-ui/react"

import OrderItem from "./OrderItem"
import modalStyles from "../styles/ModalStyle.module.css"


/**
 * This is the Modal Component created for Modal popup
 * Order Item component is used in this component
 */


export default function ModalComponent({ isOpen, onClose, productsOfOrder }) {

    const size = "3xl"

    return (
        <>
            <Modal size={size} scrollBehavior="inside" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className={modalStyles.content}>
                    <div >
                        <span className={modalStyles.spanClass}>Order # </span>
                        <span >{productsOfOrder.orderId}</span>
                    </div>
                    <ModalCloseButton className={modalStyles.closeClass} />
                    <ModalBody className={modalStyles.modalBodyClass}>
                        <OrderItem productsOfOrder={productsOfOrder} />
                    </ModalBody>
                    <ModalFooter>
                        <Text fontSize="md"><span className={modalStyles.spanClass}>Total:</span> ${productsOfOrder.totalPrice ? (productsOfOrder.totalPrice).toFixed(2) : productsOfOrder.totalPrice}</Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}