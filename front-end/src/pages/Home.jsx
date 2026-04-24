

// function Home() {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     getProducts().then(setProducts)
//   }, [])

//   return (
//   <div>
//     <Navbar />

//     <div className="bg-gray-100 min-h-screen p-6">

//       {/* TITLE */}
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Our Products
//       </h1>

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//         {products.map((product) => (
//           <Link to={`/product/${product.id}`} key={product.id}>
            
//             <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 h-full flex flex-col">

//               {/* IMAGE */}
//               <div className="h-48 flex items-center justify-center bg-gray-100 rounded">
//                 <img
//                   src={`${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api/', '') : 'http://127.0.0.1:8000'}${product.image}`}
//                   alt={product.name}
//                   className="h-full object-contain"
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="mt-3 flex flex-col flex-grow">

//                 <h2 className="font-semibold text-gray-800 line-clamp-1">
//                   {product.name}
//                 </h2>

//                 <p className="text-gray-500 text-sm mt-1 line-clamp-2">
//                   {product.description}
//                 </p>

//                 <div className="mt-auto flex justify-between items-center pt-3">
//                   <span className="text-green-600 font-bold">
//                     ₹{product.price}
//                   </span>

//                   <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
//                     View
//                   </button>
//                 </div>

//               </div>

//             </div>

//           </Link>
//         ))}

//       </div>
//     </div>
//     </div>
//     )
//  }
//  export default Home
// import { Link } from "react-router-dom"

// function Home() {
//   return (
//     <div>

//       {/* HERO SECTION */}
//       <div
//         className="relative h-[90vh] flex items-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521334884684-d80222895322')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         {/* CONTENT */}
//         <div className="relative z-10 px-10 md:px-20 text-white max-w-2xl">

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Elegance in <br /> Every Stitch
//           </h1>

//           <p className="mt-4 text-lg text-gray-200">
//             Curated collections for the modern woman. Embrace style
//             that speaks volumes without saying a word.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-6 flex space-x-4">

//             <Link to="/shop">
//               <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
//                 Shop Collection
//               </button>
//             </Link>

//             <Link to="/categories">
//               <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
//                 Explore Categories
//               </button>
//             </Link>

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home
// import { Link } from "react-router-dom"

// function Home() {
//   return (
//     <div>

//       {/* HERO SECTION */}
//       <div
//         className="relative h-[90vh] flex items-center"
//         style={{
//           backgroundImage:
//             "url('https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         {/* CONTENT */}
//         <div className="relative z-10 px-10 md:px-20 text-white max-w-2xl">

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Elegance in <br /> Every Stitch
//           </h1>

//           <p className="mt-4 text-lg text-gray-200">
//             Curated collections for the modern woman. Embrace style
//             that speaks volumes without saying a word.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-6 flex space-x-4">

//             <Link to="/shop">
//               <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
//                 Shop Collection
//               </button>
//             </Link>

//             <Link to="/categories">
//               <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
//                 Explore Categories
//               </button>
//             </Link>

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home
import { Link } from "react-router-dom"

// import category images (offline)
import dressImg from "../images/dress.jpg"
import topImg from "../images/top.jpg"
import accessoriesImg from "../images/accessories.jpg"

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${'https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`, // ✅ offline image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-10 md:px-20 text-white max-w-2xl">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Elegance in <br /> Every Stitch
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Curated collections for the modern woman. Embrace style
            that speaks volumes without saying a word.
          </p>

          <div className="mt-6 flex space-x-4">
            <Link to="/shop">
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
                Shop Collection
              </button>
            </Link>

            <Link to="/categories">
              <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Explore Categories
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* ================= CATEGORY SECTION ================= */}
      <div className="bg-[#f8f6f4] py-16 px-6">

        <h2 className="text-4xl font-serif text-center text-gray-800">
          Shop by Category
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Explore our carefully curated collections designed to elevate your everyday wardrobe.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* DRESSES */}
          <Link to="/category/dresses">
            <div className="relative rounded-xl overflow-hidden group shadow-md">
              <img src={dressImg} className="h-80 w-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Dresses</h3>
                <p className="text-sm mt-1">Shop Now</p>
              </div>
            </div>
          </Link>

          {/* TOPS */}
          <Link to="/category/tops">
            <div className="relative rounded-xl overflow-hidden group shadow-md">
              <img src={topImg} className="h-80 w-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Tops</h3>
                <p className="text-sm mt-1">Shop Now</p>
              </div>
            </div>
          </Link>

          {/* ACCESSORIES */}
          <Link to="/category/accessories">
            <div className="relative rounded-xl overflow-hidden group shadow-md">
              <img src={accessoriesImg} className="h-80 w-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold">Accessories</h3>
                <p className="text-sm mt-1">Shop Now</p>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div className="py-16 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-serif text-gray-800">
            About Miss Elegance
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At Miss Elegance, we believe fashion is more than just clothing —
            it's a reflection of confidence, grace, and individuality.
            Our collections are designed to bring out the elegance in every woman,
            blending timeless style with modern trends.
          </p>

          <Link to="/shop">
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition">
              Explore Collection
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Home
