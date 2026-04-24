
// import { useParams, Link } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { getProducts } from "../services/productService"

// function Category() {
//   const { name } = useParams()

//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     getProducts()
//       .then((data) => {
//         const filtered = data.filter(
//           (p) =>
//             p.category?.name?.toLowerCase() === name.toLowerCase()
//         )
//         setProducts(filtered)
//         setLoading(false)
//       })
//       .catch(() => setLoading(false))
//   }, [name])

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-12 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold capitalize bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           {name}
//         </h1>

//         <p className="text-gray-600 mt-2 text-lg">
//           Discover the latest {name} collection ✨
//         </p>

//         <div className="w-28 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="p-6">

//         {loading ? (
//           <h2 className="text-center text-gray-500 text-lg">
//             Loading products...
//           </h2>
//         ) : products.length === 0 ? (
//           <h2 className="text-center text-gray-500 text-lg">
//             No products found 😔
//           </h2>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//             {products.map((product) => (
//               <Link to={`/product/${product.id}`} key={product.id}>
                
//                 <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

//                   {/* IMAGE */}
//                   <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
//                     <img
//                       src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//                       alt={product.name}
//                       className="h-full object-contain group-hover:scale-105 transition duration-300"
//                     />
//                   </div>

//                   {/* DETAILS */}
//                   <div className="p-4 flex flex-col h-40">

//                     <h2 className="text-gray-800 font-semibold text-sm line-clamp-1">
//                       {product.name}
//                     </h2>

//                     <p className="text-gray-500 text-xs mt-1 line-clamp-2">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto flex justify-between items-center pt-3">

//                       <span className="text-pink-500 font-bold text-lg">
//                         ₹{product.price}
//                       </span>

//                       <button className="bg-black text-white px-3 py-1 rounded text-xs hover:bg-gray-800 transition">
//                         View
//                       </button>

//                     </div>

//                   </div>

//                 </div>

//               </Link>
//             ))}

//           </div>
//         )}

//       </div>
//     </div>
//   )
// }

// export default Category
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"


function Category() {
  const { name } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then((data) => {
        const filtered = data.filter(
          (p) =>
            p.category?.name?.toLowerCase() === name.toLowerCase()
        )
        setProducts(filtered)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [name])

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-purple-50 min-h-screen">

      {/* HEADER */}
      <div className="py-14 text-center">
        <h1 className="text-5xl font-serif font-bold capitalize text-gray-900 tracking-wide">
          {name}
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Discover the latest {name} collection ✨
        </p>

        <div className="w-20 h-1 bg-pink-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 md:px-12 pb-10">

        {loading ? (
          <h2 className="text-center text-gray-400 text-lg">
            Loading products...
          </h2>
        ) : products.length === 0 ? (
          <h2 className="text-center text-gray-400 text-lg">
            No products found 😔
          </h2>
        ) : (
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
                      src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
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
        )}

      </div>
    </div>
  )
}

export default Category
