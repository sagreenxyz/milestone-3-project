import Image from "next/image"
import { useSelector, useDispatch } from 'react-redux'
import { incrementQty, decrementQty, removeItem } from '../redux/shop.slice'

const CartPage = () => {
    const shop = useSelector((state => state.shop))
    const dispatch = useDispatch();

    return (
        <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-1">
            {shop.length === 0 ? (
                <div className="cartDiv">Your cart is empty.</div>
            ) : (
                <>
                {shop.map((item) => (
                  <div key={item.id}>
                    <div>
                      <Image src={item.image} height="250" width="250" alt="item"/>
                    </div>
                  </div>
                ))}
              </>
            )}
        </div>
    )
}

export default CartPage

