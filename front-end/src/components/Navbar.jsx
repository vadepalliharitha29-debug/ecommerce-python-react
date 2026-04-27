// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount, setCartCount] = useState(3)
//   const [showCategories, setShowCategories] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
//       <div className="flex justify-between items-center">

//         {/* LOGO + BRAND */}
//         <div className="flex items-center space-x-3">
//           <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 text-white flex items-center justify-center rounded-full text-2xl font-serif font-bold shadow-lg">
//             M
//           </div>
//           <h1 className="text-3xl font-serif italic tracking-wider text-gray-900">
//             Miss <span className="text-pink-500">Elegance</span>
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
//           <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
//           <Link to="/shop" className="hover:text-pink-500 transition-colors">Shop</Link>
//           <Link to="/" className="hover:text-pink-500 transition-colors">New Arrivals</Link>

//           {/* Categories Dropdown */}
//           <div className="relative">
//             <button 
//               onMouseEnter={() => setShowCategories(true)}
//               onMouseLeave={() => setShowCategories(false)}
//               className="hover:text-pink-500 transition-colors"
//             >
//               Categories
//             </button>
//             {showCategories && (
//               <div 
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//                 className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 space-y-2 rounded mt-2 w-40"
//               >
//                 <Link to="/" className="block hover:text-pink-500">Dresses</Link>
//                 <Link to="/" className="block hover:text-pink-500">Tops</Link>
//                 <Link to="/" className="block hover:text-pink-500">Accessories</Link>
//               </div>
//             )}
//           </div>

//           <Link to="/" className="hover:text-pink-500 transition-colors">About</Link>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center space-x-4">
//           <button className="text-gray-700 hover:text-pink-500 transition-colors hidden md:block">
//             Login
//           </button>
//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors hidden md:block">
//             Signup
//           </button>

//           {/* Cart Icon */}
//           <div className="relative">
//             <Link to="/cart" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl">
//               🛒
//             </Link>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
//           <Link to="/" className="block hover:text-pink-500 transition-colors">Home</Link>
//           <Link to="/shop" className="block hover:text-pink-500 transition-colors">Shop</Link>
//           <Link to="/" className="block hover:text-pink-500 transition-colors">New Arrivals</Link>
//           <button 
//             onClick={() => setShowCategories(!showCategories)} 
//             className="block hover:text-pink-500 transition-colors w-full text-left"
//           >
//             Categories
//           </button>
//           {showCategories && (
//             <div className="pl-4 space-y-1">
//               <Link to="/" className="block hover:text-pink-500">Dresses</Link>
//               <Link to="/" className="block hover:text-pink-500">Tops</Link>
//               <Link to="/" className="block hover:text-pink-500">Accessories</Link>
//             </div>
//           )}
//           <Link to="/" className="block hover:text-pink-500 transition-colors">About</Link>
//           <button className="block text-gray-700 hover:text-pink-500 transition-colors w-full text-left">Login</button>
//           <button className="block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full mt-2">Signup</button>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount, setCartCount] = useState(3)
//   const [showCategories, setShowCategories] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      
//       <div className="flex justify-between items-center">

//         {/* LOGO + BRAND */}
//         <div className="flex items-center space-x-3">
//           <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 text-white flex items-center justify-center rounded-full text-2xl font-serif font-bold shadow-lg">
//             M
//           </div>

//           <h1 className="text-3xl font-serif italic tracking-wider text-gray-900">
//             Miss <span className="text-pink-500">Elegance</span>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           {/* CATEGORIES DROPDOWN */}
//           <div className="relative">
//             <button
//               onMouseEnter={() => setShowCategories(true)}
//               onMouseLeave={() => setShowCategories(false)}
//               className="hover:text-pink-500 transition-colors"
//             >
//               Categories
//             </button>

//             {showCategories && (
//               <div
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//                 className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 space-y-2 rounded mt-2 w-40"
//               >
//                 <Link to="/" className="block hover:text-pink-500">
//                   Dresses
//                 </Link>
//                 <Link to="/" className="block hover:text-pink-500">
//                   Tops
//                 </Link>
//                 <Link to="/" className="block hover:text-pink-500">
//                   Accessories
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             About
//           </Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center space-x-4">

//           <button className="text-gray-700 hover:text-pink-500 transition-colors hidden md:block">
//             Login
//           </button>

//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors hidden md:block">
//             Signup
//           </button>

//           {/* CART ICON */}
//           <div className="relative">
//             <Link
//               to="/cart"
//               className="text-gray-700 hover:text-pink-500 transition-colors text-2xl"
//             >
//               🛒
//             </Link>

//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             ☰
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="block hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           <button
//             onClick={() => setShowCategories(!showCategories)}
//             className="block hover:text-pink-500 transition-colors w-full text-left"
//           >
//             Categories
//           </button>

//           {showCategories && (
//             <div className="pl-4 space-y-1">
//               <Link to="/" className="block hover:text-pink-500">
//                 Dresses
//               </Link>
//               <Link to="/" className="block hover:text-pink-500">
//                 Tops
//               </Link>
//               <Link to="/" className="block hover:text-pink-500">
//                 Accessories
//               </Link>
//             </div>
//           )}

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             About
//           </Link>

//           <button className="block text-gray-700 hover:text-pink-500 w-full text-left">
//             Login
//           </button>

//           <button className="block bg-pink-500 text-white px-4 py-2 rounded w-full mt-2">
//             Signup
//           </button>

//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar
// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount, setCartCount] = useState(3)
//   const [showCategories, setShowCategories] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      
//       <div className="flex justify-between items-center">

//         {/* LOGO + BRAND */}
//         <div className="flex items-center space-x-3">
//           <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 text-white flex items-center justify-center rounded-full text-2xl font-serif font-bold shadow-lg">
//             M
//           </div>

//           <h1 className="text-3xl font-serif italic tracking-wider text-gray-900">
//             Miss <span className="text-pink-500">Elegance</span>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          
//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           {/* CATEGORIES DROPDOWN */}
//           <div className="relative">
//   <button>Categories</button>
//   ...
// </div>


//             {showCategories && (
//               <div
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//                 className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 space-y-2 rounded mt-2 w-40"
//               >
//                 <Link to="/category/dresses" className="block hover:text-pink-500">
//                   Dresses
//                 </Link>
//                 <Link to="/category/tops" className="block hover:text-pink-500">
//                   Tops
//                 </Link>
//                 <Link to="/category/accessories" className="block hover:text-pink-500">
//                   Accessories
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             About
//           </Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center space-x-4">

//           <button className="text-gray-700 hover:text-pink-500 transition-colors hidden md:block">
//             Login
//           </button>

//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors hidden md:block">
//             Signup
//           </button>

//           {/* CART ICON */}
//           <div className="relative">
//             <Link
//               to="/cart"
//               className="text-gray-700 hover:text-pink-500 transition-colors text-2xl"
//             >
//               🛒
//             </Link>

//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             ☰
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="block hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           <button
//             onClick={() => setShowCategories(!showCategories)}
//             className="block hover:text-pink-500 transition-colors w-full text-left"
//           >
//             Categories
//           </button>

//           {showCategories && (
//             <div className="pl-4 space-y-1">
//               <Link to="/category/dresses" className="block hover:text-pink-500">
//                 Dresses
//               </Link>
//               <Link to="/category/tops" className="block hover:text-pink-500">
//                 Tops
//               </Link>
//               <Link to="/category/accessories" className="block hover:text-pink-500">
//                 Accessories
//               </Link>
//             </div>
//           )}

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             About
//           </Link>

//           <button className="block text-gray-700 hover:text-pink-500 w-full text-left">
//             Login
//           </button>

//           <button className="block bg-pink-500 text-white px-4 py-2 rounded w-full mt-2">
//             Signup
//           </button>

//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar
// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount] = useState(3)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      
//       <div className="flex justify-between items-center">

//         {/* LOGO + BRAND */}
//         <div className="flex items-center space-x-3">
//           <div className="w-12 h-12 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 text-white flex items-center justify-center rounded-full text-2xl font-serif font-bold shadow-lg">
//             M
//           </div>

//           <h1 className="text-3xl font-serif italic tracking-wider text-gray-900">
//             Miss <span className="text-pink-500">Elegance</span>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          
//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           {/* ✅ SIMPLE CATEGORY LINK */}
//           <Link to="/categories" className="hover:text-pink-500 transition-colors">
//             Categories
//           </Link>

//           <Link to="/" className="hover:text-pink-500 transition-colors">
//             About
//           </Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center space-x-4">

//           <button className="text-gray-700 hover:text-pink-500 transition-colors hidden md:block">
//             Login
//           </button>

//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors hidden md:block">
//             Signup
//           </button>

//           {/* CART ICON */}
//           <div className="relative">
//             <Link
//               to="/cart"
//               className="text-gray-700 hover:text-pink-500 transition-colors text-2xl"
//             >
//               🛒
//             </Link>

//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             ☰
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             Home
//           </Link>

//           <Link to="/shop" className="block hover:text-pink-500 transition-colors">
//             Shop
//           </Link>

//           {/* ✅ SIMPLE CATEGORY LINK */}
//           <Link to="/categories" className="block hover:text-pink-500 transition-colors">
//             Categories
//           </Link>

//           <Link to="/" className="block hover:text-pink-500 transition-colors">
//             About
//           </Link>

//           <button className="block text-gray-700 hover:text-pink-500 w-full text-left">
//             Login
//           </button>

//           <button className="block bg-pink-500 text-white px-4 py-2 rounded w-full mt-2">
//             Signup
//           </button>

//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar
// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount] = useState(3)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-sm px-8 py-4 sticky top-0 z-50">
      
//       <div className="flex justify-between items-center">

//         {/* LOGO + BRAND */}
//         <div>
//           <h1 className="text-2xl font-semibold tracking-wide">
//             <span className="text-pink-600">Miss</span>{" "}
//             <span className="text-gray-900">Elegance</span>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">

//           <Link to="/" className="hover:text-pink-500 transition">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-pink-500 transition">
//             Shop
//           </Link>

//           <Link to="/categories" className="hover:text-pink-500 transition">
//             Categories
//           </Link>

//           <Link to="/" className="hover:text-pink-500 transition">
//             About
//           </Link>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center space-x-4">

//           {/* ✅ SIGN IN LINK */}
//           <Link to="/auth">
//             <button className="text-gray-700 hover:text-pink-500 hidden md:block">
//               Sign In
//             </button>
//           </Link>

//           {/* ✅ SIGN UP LINK */}
//           <Link to="/auth">
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition hidden md:block">
//               Sign Up
//             </button>
//           </Link>

//           {/* CART ICON */}
//           <div className="relative">
//             <Link to="/cart" className="text-xl hover:text-pink-500">
//               🛍️
//             </Link>

//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             ☰
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-3 text-gray-700 font-medium">

//           <Link to="/" className="block hover:text-pink-500">
//             Home
//           </Link>

//           <Link to="/shop" className="block hover:text-pink-500">
//             Shop
//           </Link>

//           <Link to="/categories" className="block hover:text-pink-500">
//             Categories
//           </Link>

//           <Link to="/" className="block hover:text-pink-500">
//             About
//           </Link>

//           {/* ✅ MOBILE SIGN IN */}
//           <Link to="/auth">
//             <button className="block w-full text-left hover:text-pink-500">
//               Sign In
//             </button>
//           </Link>

//           {/* ✅ MOBILE SIGN UP */}
//           <Link to="/auth">
//             <button className="block bg-pink-500 text-white px-4 py-2 rounded w-full">
//               Sign Up
//             </button>
//           </Link>

//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar
// import { Link } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {
//   const [cartCount, setCartCount] = useState(
//     JSON.parse(localStorage.getItem("cart"))?.length || 0
//   )
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [showProfile, setShowProfile] = useState(false)

//   // Demo user info
//   const user = JSON.parse(localStorage.getItem("user")) || {
//     name: "Jane Doe",
//     email: "janedoe@example.com",
//     phone: "+91 9876543210",
//     address: "123, Elegant Street, City, India",
//   }

//   return (
//     <nav className="bg-white shadow-sm px-8 py-4 sticky top-0 z-50">
//       <div className="flex justify-between items-center">
//         {/* LOGO + BRAND LINK */}
//         <div>
//           <Link to="/">
//             <h1 className="text-2xl font-semibold tracking-wide hover:text-pink-500 transition">
//               <span className="text-pink-600">Miss</span>{" "}
//               <span className="text-gray-900">Elegance</span>
//             </h1>
//           </Link>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
//           <Link to="/" className="hover:text-pink-500 transition">Home</Link>
//           <Link to="/shop" className="hover:text-pink-500 transition">Shop</Link>
//           <Link to="/categories" className="hover:text-pink-500 transition">Categories</Link>
//           <Link to="/orders" className="hover:text-pink-500 transition">My Orders</Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center space-x-4">
//           {/* SIGN IN / SIGN UP */}
//           <Link to="/auth">
//             <button className="text-gray-700 hover:text-pink-500 hidden md:block">Sign In</button>
//           </Link>
//           <Link to="/auth">
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition hidden md:block">
//               Sign Up
//             </button>
//           </Link>

//           {/* PROFILE BUTTON */}
//           <div className="relative">
//             <button
//               onClick={() => setShowProfile(!showProfile)}
//               className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
//             >
//               Profile
//             </button>
//             {showProfile && (
//               <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded p-4 z-50 border">
//                 <h3 className="font-semibold text-lg mb-2">User Info</h3>
//                 <p><span className="font-semibold">Name:</span> {user.name}</p>
//                 <p><span className="font-semibold">Email:</span> {user.email}</p>
//                 <p><span className="font-semibold">Phone:</span> {user.phone}</p>
//                 <p><span className="font-semibold">Address:</span> {user.address}</p>
//               </div>
//             )}
//           </div>

//           {/* CART ICON */}
//           <div className="relative">
//             <Link to="/cart" className="text-xl hover:text-pink-500">🛍️</Link>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-3 text-gray-700 font-medium">
//           <Link to="/" className="block hover:text-pink-500">Home</Link>
//           <Link to="/shop" className="block hover:text-pink-500">Shop</Link>
//           <Link to="/categories" className="block hover:text-pink-500">Categories</Link>
//           <Link to="/orders" className="block hover:text-pink-500">My Orders</Link>

//           <Link to="/auth">
//             <button className="block w-full text-left hover:text-pink-500">Sign In</button>
//           </Link>
//           <Link to="/auth">
//             <button className="block bg-pink-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
//           </Link>

//           {/* MOBILE PROFILE */}
//           <div className="border-t pt-2">
//             <button
//               onClick={() => setShowProfile(!showProfile)}
//               className="block w-full text-left hover:text-pink-500"
//             >
//               Profile
//             </button>
//             {showProfile && (
//               <div className="mt-2 bg-white shadow rounded p-3 border space-y-1">
//                 <p><span className="font-semibold">Name:</span> {user.name}</p>
//                 <p><span className="font-semibold">Email:</span> {user.email}</p>
//                 <p><span className="font-semibold">Phone:</span> {user.phone}</p>
//                 <p><span className="font-semibold">Address:</span> {user.address}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [cartCount] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Load user from localStorage and intercept login emails
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || {};
    const loggedInEmail = localStorage.getItem("email") || "";
    
    // Automatically generate a display name if they just logged in
    const autoName = loggedInEmail ? loggedInEmail.split('@')[0] : "";
    
    return {
      name: savedUser.name || autoName,
      email: loggedInEmail || savedUser.email || "",
      phone: savedUser.phone || "",
      address: savedUser.address || "",
    };
  });

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    localStorage.removeItem("cart"); // CLEAR CART ON LOGOUT
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm px-8 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <h1 className="text-2xl font-semibold tracking-wide hover:text-pink-500 transition">
            <span className="text-pink-600">Miss</span>{" "}
            <span className="text-gray-900">Elegance</span>
          </h1>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/orders">My Orders</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">

          {/* SIGN IN / LOGOUT */}
          {localStorage.getItem('accessToken') ? (
            <button onClick={handleLogout} className="text-gray-700 hover:text-pink-500 hidden md:block">
              Logout
            </button>
          ) : (
            <Link to="/auth">
              <button className="text-gray-700 hover:text-pink-500 hidden md:block">
                Sign In
              </button>
            </Link>
          )}

          {/* PROFILE */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
            >
              Profile
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded p-4 border z-50">

                <h3 className="font-semibold text-lg mb-3">
                  {editMode ? "Edit Profile" : "User Info"}
                </h3>

                {/* VIEW MODE */}
                {!editMode ? (
                  <>
                    <p><b>Name:</b> {user.name || "Not set"}</p>
                    <p><b>Email:</b> {user.email || "Not set"}</p>
                    <p><b>Phone:</b> {user.phone || "Not set"}</p>
                    <p><b>Address:</b> {user.address || "Not set"}</p>

                    <button
                      onClick={() => setEditMode(true)}
                      className="mt-3 w-full bg-pink-500 text-white py-1 rounded"
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  /* EDIT MODE */
                  <>
                    <input
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full mb-2 p-2 border rounded"
                    />

                    <input
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full mb-2 p-2 border rounded"
                    />

                    <input
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full mb-2 p-2 border rounded"
                    />

                    <textarea
                      name="address"
                      value={user.address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="w-full mb-2 p-2 border rounded"
                    />

                    <button
                      onClick={saveProfile}
                      className="w-full bg-green-500 text-white py-1 rounded mt-2"
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* CART */}
          <div className="relative">
            <Link to="/cart">🛍️</Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* EXPANDABLE MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-gray-700 font-medium border-t pt-4">

          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500">
            Home
          </Link>

          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500">
            Shop
          </Link>

          <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500">
            Categories
          </Link>
          
          <Link to="/orders" onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-500">
            My Orders
          </Link>

          {/* SIGN IN / LOGOUT */}
          {localStorage.getItem('accessToken') ? (
            <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-pink-500">
              Logout
            </button>
          ) : (
            <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
              <button className="block w-full text-left hover:text-pink-500">
                Sign In
              </button>
            </Link>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;
