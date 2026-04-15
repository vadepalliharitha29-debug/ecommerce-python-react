// import React, { useEffect, useState } from "react"
// import { getProducts } from "../services/productService"
// import { Link } from "react-router-dom"

// function Shop() {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     getProducts()
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Failed to fetch products", err))
//   }, [])

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-10">
//         <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           Our Collection
//         </h1>

//         <p className="text-center text-gray-600 mt-2">
//           Discover elegant styles crafted for you ✨
//         </p>

//         <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="p-6">

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <Link
//               to={`/product/${product.id}`}
//               key={product.id}
//             >
//               <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 h-full flex flex-col">

//                 {/* IMAGE */}
//                 <div className="h-48 flex items-center justify-center bg-gray-100 rounded">
//                   <img
//                     src={`http://127.0.0.1:8000${product.image}`}
//                     alt={product.name}
//                     className="h-full object-contain"
//                   />
//                 </div>

//                 {/* DETAILS */}
//                 <div className="mt-3 flex flex-col flex-grow">

//                   <h2 className="font-semibold text-gray-800 line-clamp-1">
//                     {product.name}
//                   </h2>

//                   <p className="text-gray-500 text-sm mt-1 line-clamp-2">
//                     {product.description}
//                   </p>

//                   <div className="mt-auto flex justify-between items-center pt-3">
//                     <span className="text-pink-500 font-bold">
//                       ₹{product.price}
//                     </span>

//                     <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
//                       View
//                     </button>
//                   </div>

//                 </div>

//               </div>
//             </Link>
//           ))}

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Shop
import React, { useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import { Link } from "react-router-dom"


function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err))
  }, [])

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-purple-50 min-h-screen">

      {/* HEADER */}
      <div className="py-14 text-center">
        <h1 className="text-5xl font-serif font-bold text-gray-900 tracking-wide">
          Our Collection
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Timeless elegance, crafted just for you ✨
        </p>

        <div className="w-20 h-1 bg-pink-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 md:px-12 pb-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group">

                {/* IMAGE */}
                <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">

                  {/* NEW BADGE */}
                  <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full z-10">
                    NEW
                  </span>

                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* DETAILS */}
                <div className="p-4 flex flex-col">

                  <h2 className="text-gray-800 font-semibold text-sm truncate">
                    {product.name}
                  </h2>

                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <span className="text-lg font-bold text-pink-500">
                      ₹{product.price}
                    </span>

                    <button className="border border-black px-3 py-1 text-xs rounded-full hover:bg-black hover:text-white transition">
                      View
                    </button>

                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Shop
