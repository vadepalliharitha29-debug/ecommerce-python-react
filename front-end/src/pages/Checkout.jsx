import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { placeOrder as placeOrderAPI } from "../services/orderService"

function Checkout() {
  const navigate = useNavigate()
  const [items, setItems] = useState(() => {
    const buyNowProduct = JSON.parse(localStorage.getItem("buyNow"))
    if (buyNowProduct) return [buyNowProduct]
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    return cart
  })
  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery")
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  useEffect(() => {
    if (items.length === 0) {
      navigate("/") 
    }
  }, [items, navigate])

  const placeOrder = async () => {
    if (!address) {
      alert("Please enter your address")
      return
    }

    const token = localStorage.getItem("accessToken")
    if (!token) {
        alert("Please login before placing an order.")
        navigate("/auth")
        return
    }

    const orderData = {
      address,
      paymentMethod,
      totalPrice,
      items: items.map(i => ({
          product_id: i.id,
          quantity: i.quantity,
          price: i.price,
          selectedSize: i.selectedSize || ''
      }))
    }

    try {
        await placeOrderAPI(orderData)
        localStorage.removeItem("buyNow")
        localStorage.removeItem("cart")
        alert("Your order has been placed!")
        navigate("/orders")
    } catch (error) {
        console.error("Failed to place order", error)
        alert("Failed to place order. Please try again.")
    }
  }

  if (items.length === 0) return <h1 className="p-6">Loading...</h1>

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        {/* Product Summary */}
        <div className="space-y-4">
          {items.map((product, idx) => (
             <div key={idx} className="flex items-center space-x-4 border-b pb-4">
               <img
                 src={product.image.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
                 alt={product.name}
                 className="w-20 h-20 object-contain rounded"
               />
               <div>
                 <h2 className="font-semibold">{product.name}</h2>
                 {product.selectedSize && <p>Size: {product.selectedSize}</p>}
                 <p>Qty: {product.quantity}</p>
                 <p className="font-bold text-green-600">₹{product.price}</p>
               </div>
             </div>
          ))}
          <h2 className="text-right text-xl font-bold">Total: ₹{totalPrice}</h2>
        </div>

        {/* Address */}
        <div>
          <label className="font-semibold">Delivery Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full border rounded p-2 mt-2"
          />
        </div>

        {/* Payment Options */}
        <div>
          <label className="font-semibold">Select Payment Method:</label>
          <div className="flex flex-col mt-2 space-y-2">
            {["Cash on Delivery", "UPI", "Credit/Debit Card"].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Place Order */}
        <button
          onClick={placeOrder}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mt-4"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
