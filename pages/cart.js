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
                  <div>
                    <div>
                      <Image src={item.image} height="250" width="250" alt="item"/>
                    </div>
                    <div className="cartDiv">Name: </div>
                    <p className="cartP">{item.name}</p> <br/>
                    <div className="cartDiv">Price: </div>
                    <p className="cartP">{item.price}</p> <br/>
                    <div className="cartDiv">Model: </div>
                    <p className="cartP">{item.model}</p> <br/>
                    <div className="cartDiv">Manufacturer: </div>
                    <p className="cartP">{item.manufacturer}</p> <br/>
                    <div className="cartDiv">Quantity: </div>
                    <p className="cartP">{item.quantity}</p>
                    <div>
                      <button className='dark:bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-gray-700 rounded' onClick={() => dispatch(incrementQty(item.id))}>
                        +
                      </button>
                      <button className='dark:bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-gray-700 rounded' onClick={() => dispatch(decrementQty(item.id))}>
                        -
                      </button>
                      <button className='bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-orange-700 rounded' onClick={() => dispatch(removeItem(item.id))}>
                        x
                      </button>
                    </div>
                    {/* <p>$ {item.quantity * item.price}</p> */}
                  </div>
                ))}
                {/* <h2>Grand Total: $ {getTotalPrice()}</h2> */}
              </>
            )}
        </div>
    )
}

export default CartPage

