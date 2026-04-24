// import { useState } from "react"

// function Cart() {
//   // Dummy cart data (later connect backend)
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Elegant Dress",
//       price: 1999,
//       image: "http://127.0.0.1:8000/media/products/sample.jpg",
//       quantity: 1,
//     },
//   ])

//   // Increase quantity
//   const increaseQty = (id) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     ))
//   }

//   // Decrease quantity
//   const decreaseQty = (id) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     ))
//   }

//   // Remove item
//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id))
//   }

//   // Total price
//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   )

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">

//       {/* HEADER */}
//       <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-8">
//         Your Cart 🛍️
//       </h1>

//       {cartItems.length === 0 ? (
//         <h2 className="text-center text-gray-500 text-lg">
//           Your cart is empty 😔
//         </h2>
//       ) : (
//         <div className="max-w-5xl mx-auto space-y-6">

//           {/* CART ITEMS */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center gap-4"
//             >

//               {/* IMAGE */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-28 h-28 object-contain bg-gray-100 rounded"
//               />

//               {/* DETAILS */}
//               <div className="flex-1 text-center md:text-left">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-pink-500 font-bold mt-1">
//                   ₹{item.price}
//                 </p>
//               </div>

//               {/* QUANTITY */}
//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="px-3 py-1 bg-gray-200 rounded"
//                 >
//                   -
//                 </button>

//                 <span>{item.quantity}</span>

//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="px-3 py-1 bg-gray-200 rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* REMOVE */}
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="text-red-500 hover:underline"
//               >
//                 Remove
//               </button>

//             </div>
//           ))}

//           {/* TOTAL SECTION */}
//           <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center">

//             <h2 className="text-xl font-semibold text-gray-800">
//               Total: ₹{total}
//             </h2>

//             <button className="mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
//               Proceed to Checkout
//             </button>

//           </div>

//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart
// import { useEffect, useState } from "react"

// function Cart() {
//   const [cartItems, setCartItems] = useState([])

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || []
//     setCartItems(storedCart)
//   }, [])

//   // Update quantity for a product
//   const updateQuantity = (id, delta) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === id) {
//         const newQuantity = item.quantity + delta
//         return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
//       }
//       return item
//     })
//     setCartItems(updatedCart)
//     localStorage.setItem("cart", JSON.stringify(updatedCart))
//   }

//   // Remove a product from cart
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id)
//     setCartItems(updatedCart)
//     localStorage.setItem("cart", JSON.stringify(updatedCart))
//   }

//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty 😔</p>
//       ) : (
//         <div className="max-w-4xl mx-auto space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex bg-white rounded-xl shadow p-4 items-center space-x-4"
//             >
//               <img
//                 src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${item.image}`}
//                 alt={item.name}
//                 className="w-24 h-24 object-contain rounded"
//               />

//               <div className="flex-1">
//                 <h2 className="font-semibold text-gray-800">{item.name}</h2>
//                 <p className="text-gray-500">₹{item.price}</p>

//                 <div className="flex items-center space-x-2 mt-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, -1)}
//                     className="px-2 bg-gray-200 rounded"
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, 1)}
//                     className="px-2 bg-gray-200 rounded"
//                   >
//                     +
//                   </button>

//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="ml-4 text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="text-right mt-6">
//             <h2 className="text-xl font-bold">Total: ₹{getTotal()}</h2>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })
  const navigate = useNavigate()

  // Update quantity for a product
  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
      }
      return item
    })
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  // Remove a product from cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!")
      return
    }
    navigate("/checkout") // Redirect to order/payment page
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 😔</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id + item.selectedSize}
              className="flex bg-white rounded-xl shadow p-4 items-center space-x-4"
            >
              <img
                src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${item.image}`}
                alt={item.name}
                className="w-24 h-24 object-contain rounded"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500">₹{item.price}</p>
                <p className="text-gray-500">Size: {item.selectedSize}</p>

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ₹{getTotal()}</h2>
          </div>

          {/* Place Order Button */}
          <div className="text-center mt-6">
            <button
              onClick={placeOrder}
              className="w-full max-w-sm bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
