// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"



// function ProductDetails() {
//   const navigate = useNavigate()  
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     fetch((import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/'))
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(p => p.id === parseInt(id))
//         setProduct(found)
//       })
//   }, [id])

//   if (!product) return <h1 className="p-6">Loading...</h1>

//   return (
//     <div className="p-6 max-w-6xl mx-auto">

//       <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">

//         {/* IMAGE SECTION */}
//         <div>
//           <img
//             src={product.image?.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//             alt={product.name}
//            className="w-full h-[400px] object-contain rounded-xl bg-gray-100"
//           />
//         </div>

//         {/* DETAILS SECTION */}
//         <div className="flex flex-col justify-between">

//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {product.name}
//             </h1>

//             <p className="text-gray-500 mt-3 leading-relaxed">
//               {product.description}
//             </p>

//             <h2 className="text-3xl text-green-600 font-bold mt-6">
//               ₹{product.price}
//             </h2>
//           </div>

//           {/* BUTTONS */}
//           <div className="mt-6 space-y-3">

//             <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
//               Add to Cart
//             </button>

//             <button className="w-full border border-black py-3 rounded-lg hover:bg-gray-100 transition">
//               Buy Now
//             </button>

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default ProductDetails
// import { useParams, useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"

// function ProductDetails() {
//   const navigate = useNavigate()
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     fetch((import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/'))
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((p) => p.id === parseInt(id))
//         setProduct(found)
//       })
//   }, [id])

//   if (!product) return <h1 className="p-6">Loading...</h1>

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || []
//     cart.push(product)
//     localStorage.setItem("cart", JSON.stringify(cart))
//     navigate("/cart") // Redirect to cart page after adding
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
//         {/* IMAGE SECTION */}
//         <div>
//           <img
//             src={product.image?.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//             alt={product.name}
//             className="w-full h-[400px] object-contain rounded-xl bg-gray-100"
//           />
//         </div>

//         {/* DETAILS SECTION */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">
//               {product.name}
//             </h1>

//             <p className="text-gray-500 mt-3 leading-relaxed">
//               {product.description}
//             </p>

//             <h2 className="text-3xl text-green-600 font-bold mt-6">
//               ₹{product.price}
//             </h2>
//           </div>

//           {/* BUTTONS */}
//           <div className="mt-6 space-y-3">
//             <button
//               onClick={addToCart}
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               Add to Cart
//             </button>

//             <button className="w-full border border-black py-3 rounded-lg hover:bg-gray-100 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails
// import { useParams, useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"

// function ProductDetails() {
//   const navigate = useNavigate()
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     // Fetch all products and find the one with matching id
//     fetch((import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/'))
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((p) => p.id === parseInt(id))
//         setProduct(found)
//       })
//       .catch((err) => console.error(err))
//   }, [id])

//   if (!product) return <h1 className="p-6">Loading...</h1>

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || []

//     // Check if product already exists in cart
//     const existingProductIndex = cart.findIndex((p) => p.id === product.id)

//     if (existingProductIndex !== -1) {
//       // If already in cart, increase quantity
//       cart[existingProductIndex].quantity += 1
//     } else {
//       // Add minimal product info
//       cart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image, // keep relative path
//         quantity: 1
//       })
//     }

//     localStorage.setItem("cart", JSON.stringify(cart))
//     navigate("/cart") // Redirect to cart page
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
//         {/* IMAGE SECTION */}
//         <div>
//           <img
//             src={product.image?.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//             alt={product.name}
//             className="w-full h-[400px] object-contain rounded-xl bg-gray-100"
//           />
//         </div>

//         {/* DETAILS SECTION */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//             <p className="text-gray-500 mt-3 leading-relaxed">{product.description}</p>
//             <h2 className="text-3xl text-green-600 font-bold mt-6">₹{product.price}</h2>
//           </div>

//           {/* BUTTONS */}
//           <div className="mt-6 space-y-3">
//             <button
//               onClick={addToCart}
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               Add to Cart
//             </button>

//             <button className="w-full border border-black py-3 rounded-lg hover:bg-gray-100 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails
// import { useParams, useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"

// function ProductDetails() {
//   const navigate = useNavigate()
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)
//   const [selectedSize, setSelectedSize] = useState("") // Track size selection
//   const [showSizeChart, setShowSizeChart] = useState(false)

//   const sizes = ["XS", "S", "M", "L", "XL", "XXL"] // Available sizes

//   useEffect(() => {
//     fetch((import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/'))
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((p) => p.id === parseInt(id))
//         setProduct(found)
//       })
//       .catch((err) => console.error(err))
//   }, [id])

//   if (!product) return <h1 className="p-6">Loading...</h1>

//   const addToCart = () => {
//     if (!selectedSize) {
//       alert("Please select a size before adding to cart")
//       return
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || []
//     const existingProductIndex = cart.findIndex(
//       (p) => p.id === product.id && p.selectedSize === selectedSize
//     )

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1
//     } else {
//       cart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         quantity: 1,
//         selectedSize, // Store selected size in cart
//       })
//     }

//     localStorage.setItem("cart", JSON.stringify(cart))
//     navigate("/cart")
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
//         {/* IMAGE SECTION */}
//         <div>
//           <img
//             src={product.image?.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//             alt={product.name}
//             className="w-full h-[400px] object-contain rounded-xl bg-gray-100"
//           />
//         </div>

//         {/* DETAILS SECTION */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
//             <p className="text-gray-500 mt-3 leading-relaxed">{product.description}</p>
//             <h2 className="text-3xl text-green-600 font-bold mt-6">₹{product.price}</h2>

//             {/* SIZE SELECTION */}
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">Select Size:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border rounded ${
//                       selectedSize === size
//                         ? "bg-black text-white border-black"
//                         : "bg-white text-gray-800 border-gray-300"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => setShowSizeChart(true)}
//                   className="ml-4 px-3 py-2 border border-gray-400 rounded hover:bg-gray-100"
//                 >
//                   Size Chart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* BUTTONS */}
//           <div className="mt-6 space-y-3">
//             <button
//               onClick={addToCart}
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               Add to Cart
//             </button>

//             <button className="w-full border border-black py-3 rounded-lg hover:bg-gray-100 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* SIZE CHART MODAL */}
//       {showSizeChart && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
//             <button
//               onClick={() => setShowSizeChart(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-bold mb-4">Size Chart</h2>
//             <table className="w-full text-left border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 border">Size</th>
//                   <th className="p-2 border">Chest (inches)</th>
//                   <th className="p-2 border">Waist (inches)</th>
//                   <th className="p-2 border">Hip (inches)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td className="p-2 border">XS</td><td className="p-2 border">32</td><td className="p-2 border">26</td><td className="p-2 border">34</td></tr>
//                 <tr><td className="p-2 border">S</td><td className="p-2 border">34</td><td className="p-2 border">28</td><td className="p-2 border">36</td></tr>
//                 <tr><td className="p-2 border">M</td><td className="p-2 border">36</td><td className="p-2 border">30</td><td className="p-2 border">38</td></tr>
//                 <tr><td className="p-2 border">L</td><td className="p-2 border">38</td><td className="p-2 border">32</td><td className="p-2 border">40</td></tr>
//                 <tr><td className="p-2 border">XL</td><td className="p-2 border">40</td><td className="p-2 border">34</td><td className="p-2 border">42</td></tr>
//                 <tr><td className="p-2 border">XXL</td><td className="p-2 border">42</td><td className="p-2 border">36</td><td className="p-2 border">44</td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProductDetails
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function ProductDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [showSizeChart, setShowSizeChart] = useState(false)

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  useEffect(() => {
    fetch((import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + 'products/' : 'http://127.0.0.1:8000/api/products/'))
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id))
        setProduct(found)
      })
      .catch((err) => console.error(err))
  }, [id])

  if  (!product) return <h1 className="p-6">Loading...</h1>

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart")
      return
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const existingProductIndex = cart.findIndex(
      (p) => p.id === product.id && p.selectedSize === selectedSize
    )

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        selectedSize,
      })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    navigate("/cart")
  }

  const buyNow = () => {
    if (!selectedSize) {
      alert("Please select a size before buying")
      return
    }

    const buyNowProduct = {
      ...product,
      quantity: 1,
      selectedSize,
    }

    localStorage.setItem("buyNow", JSON.stringify(buyNowProduct))
    navigate("/checkout")
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6">
        {/* IMAGE SECTION */}
        <div>
          <img
            src={product.image?.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded-xl bg-gray-100"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 mt-3 leading-relaxed">{product.description}</p>
            <h2 className="text-3xl text-green-600 font-bold mt-6">₹{product.price}</h2>

            {/* SIZE SELECTION */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}

                <button
                  onClick={() => setShowSizeChart(true)}
                  className="ml-4 px-3 py-2 border border-gray-400 rounded hover:bg-gray-100"
                >
                  Size Chart
                </button>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 space-y-3">
            <button
              onClick={addToCart}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="w-full border border-black py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* SIZE CHART MODAL */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Size Chart</h2>
            <table className="w-full text-left border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Size</th>
                  <th className="p-2 border">Chest (inches)</th>
                  <th className="p-2 border">Waist (inches)</th>
                  <th className="p-2 border">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border">XS</td><td className="p-2 border">32</td><td className="p-2 border">26</td><td className="p-2 border">34</td></tr>
                <tr><td className="p-2 border">S</td><td className="p-2 border">34</td><td className="p-2 border">28</td><td className="p-2 border">36</td></tr>
                <tr><td className="p-2 border">M</td><td className="p-2 border">36</td><td className="p-2 border">30</td><td className="p-2 border">38</td></tr>
                <tr><td className="p-2 border">L</td><td className="p-2 border">38</td><td className="p-2 border">32</td><td className="p-2 border">40</td></tr>
                <tr><td className="p-2 border">XL</td><td className="p-2 border">40</td><td className="p-2 border">34</td><td className="p-2 border">42</td></tr>
                <tr><td className="p-2 border">XXL</td><td className="p-2 border">42</td><td className="p-2 border">36</td><td className="p-2 border">44</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
