// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { getProducts } from "../services/productService"
// import { Link } from "react-router-dom"

// function Category() {
//   const { name } = useParams()
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     getProducts().then((data) => {
//       const filtered = data.filter(
//   (p) =>
//     p.category &&
//     p.category.toLowerCase() === name.toLowerCase()
// )
//       setProducts(filtered)
//     })
//   }, [name])

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-10">
//         <h1 className="text-4xl font-extrabold text-center capitalize bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           {name}
//         </h1>

//         <p className="text-center text-gray-600 mt-2">
//           Explore our {name} collection ✨
//         </p>

//         <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="p-6">

//         {products.length === 0 ? (
//           <h2 className="text-center text-gray-500">
//             No products found
//           </h2>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//             {products.map((product) => (
//               <Link to={`/product/${product.id}`} key={product.id}>
                
//                 <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 h-full flex flex-col">

//                   <div className="h-48 flex items-center justify-center bg-gray-100 rounded">
//                     <img
//                       src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//                       alt={product.name}
//                       className="h-full object-contain"
//                     />
//                   </div>

//                   <div className="mt-3 flex flex-col flex-grow">
//                     <h2 className="font-semibold text-gray-800">
//                       {product.name}
//                     </h2>

//                     <p className="text-gray-500 text-sm">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto flex justify-between items-center pt-3">
//                       <span className="text-pink-500 font-bold">
//                         ₹{product.price}
//                       </span>
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
// import { useParams, Link } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { getProducts } from "../services/productService"

// function Category() {
//   const { name } = useParams()
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     getProducts().then((data) => {
//       const filtered = data.filter((p) => {
//         return (
//           p.category &&
//           p.category.toLowerCase().trim() === name.toLowerCase().trim()
//         )
//       })

//       setProducts(filtered)
//       setLoading(false)
//     })
//   }, [name])

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-10">
//         <h1 className="text-4xl font-extrabold text-center capitalize bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           {name.replace("-", " ")}
//         </h1>

//         <p className="text-center text-gray-600 mt-2">
//           Explore our {name.replace("-", " ")} collection ✨
//         </p>

//         <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="p-6">

//         {loading ? (
//           <h2 className="text-center text-gray-500">Loading...</h2>
//         ) : products.length === 0 ? (
//           <h2 className="text-center text-gray-500">
//             No products found in this category
//           </h2>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//             {products.map((product) => (
//               <Link to={`/product/${product.id}`} key={product.id}>
                
//                 <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 h-full flex flex-col">

//                   {/* IMAGE */}
//                   <div className="h-48 flex items-center justify-center bg-gray-100 rounded">
//                     <img
//                       src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//                       alt={product.name}
//                       className="h-full object-contain"
//                     />
//                   </div>

//                   {/* DETAILS */}
//                   <div className="mt-3 flex flex-col flex-grow">

//                     <h2 className="font-semibold text-gray-800 line-clamp-1">
//                       {product.name}
//                     </h2>

//                     <p className="text-gray-500 text-sm line-clamp-2">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto flex justify-between items-center pt-3">
//                       <span className="text-pink-500 font-bold">
//                         ₹{product.price}
//                       </span>

//                       <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
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
// import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
// import dressImg from "../images/dress.jpg"
// import topImg from "../images/top.jpg"
// import accessoriesImg from "../images/accessories.jpg"

// function Categories() {
//   const categories = [
//     { name: "Dresses", image: dressImg },
//     { name: "Tops", image: topImg },
//     { name: "Accessories", image: accessoriesImg },
//   ]

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-10">
//         <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           Shop by Category
//         </h1>

//         <p className="text-center text-gray-600 mt-2">
//           Choose your style ✨
//         </p>

//         <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* CATEGORY CARDS */}
//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//         {categories.map((cat, index) => (
//           <Link
//             to={`/category/${cat.name.toLowerCase()}`}
//             key={index}
//           >
//             <div className="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition group">

//               {/* IMAGE */}
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <h2 className="text-white text-2xl font-bold">
//                   {cat.name}
//                 </h2>
//               </div>

//             </div>
//           </Link>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default Categories
// import { Link } from "react-router-dom"
// import dressImg from "../images/dress.jpg"
// import topImg from "../images/top.jpg"
// import accessoriesImg from "../images/accessories.jpg"

// function Categories() {
//   const categories = [
//     { name: "Dresses", image: dressImg },
//     { name: "Tops", image: topImg },
//     { name: "Accessories", image: accessoriesImg },
//   ]

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-10">
//         <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//           Shop by Category
//         </h1>

//         <p className="text-center text-gray-600 mt-2">
//           Choose your style ✨
//         </p>

//         <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* CATEGORY CARDS */}
//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//         {categories.map((cat, index) => (
//           <Link
//             to={`/${cat.name.toLowerCase()}`}   // ✅ UPDATED
//             key={index}
//           >
//             <div className="relative rounded-xl overflow-hidden shadow hover:shadow-xl transition group">

//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
//               />

//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <h2 className="text-white text-2xl font-bold">
//                   {cat.name}
//                 </h2>
//               </div>

//             </div>
//           </Link>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default Categories
import { Link } from "react-router-dom"
import dressImg from "../images/dress.jpg"
import topImg from "../images/top.jpg"
import accessoriesImg from "../images/accessories.jpg"

function Categories() {
  const categories = [
    { name: "Dresses", image: dressImg },
    { name: "Tops", image: topImg },
    { name: "Accessories", image: accessoriesImg },
  ]

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-purple-50 min-h-screen">

      {/* HEADER */}
      <div className="py-14 text-center">
        <h1 className="text-5xl font-serif font-bold text-gray-900 tracking-wide">
          Shop by Category
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Discover your signature style ✨
        </p>

        <div className="w-20 h-1 bg-pink-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="px-6 md:px-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {categories.map((cat, index) => (
          <Link
            to={`/category/${cat.name.toLowerCase()}`}   // ✅ proper routing
            key={index}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.name}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>

              {/* TEXT + BUTTON */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <h2 className="text-3xl font-serif font-bold tracking-wide mb-3">
                  {cat.name}
                </h2>

                <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Explore
                </button>

              </div>

            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Categories
