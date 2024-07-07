import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"


const Cart = () => {

    const [confirm, setConfirm] = useState<boolean>(false)
    const {dispatch, REDUCER_ACTIONS, totalItems, TotalPrice, cart} = useCart()
    const onSumbitOrder = () => {
        dispatch({type: REDUCER_ACTIONS.SUBMIT})
        setConfirm(true)
    }

    const pageContent = confirm

    return pageContent
}

export default Cart