

// export default function App() {
//   // Define internal style object properly
//   let a = {
//     color: "green",
//     backgroundColor: "red"
//   };

//   return (
//     <div>
//       <h1 style={{ color: "red", backgroundColor: "aqua", width: "100px", height: "100px" }}>
//         inline css
//       </h1>
//       <h2 style={a}>internal css</h2>
//       <h3>external css</h3>
//     </div>
//   );
// }
// function App() {
//   return (
//     <h1 className="text-4xl text-blue-600 font-bold">
//       Tailwind is Working 🚀
//     </h1>
//   )
// }
// export default App


// import { Routes, Route } from "react-router-dom"
// import ProductDetails from "./pages/ProductDetails"
// import Home from "./pages/Home.jsx"
// import Shop from "./pages/Shop"
// import Category from "./pages/Category.jsx"
// import Categories from "./pages/Categories"






// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//        <Route path="/shop" element={<Shop />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//       <Route path="/categories" element={<Categories />} />
//       <Route path="/dresses" element={<Category />} />
//       <Route path="/tops" element={<Category />} />
//       <Route path="/accessories" element={<Category />} />

     



//     </Routes>
//   )
// }

// export default App

// import React from 'react'
// import { Routes, Route } from "react-router-dom"

// import Home from "./pages/Home"
// import Shop from "./pages/Shop"
// import ProductDetails from "./pages/ProductDetails"
// import Categories from "./pages/Categories"
// import Category from "./pages/Category"   // ✅ IMPORT THIS

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/shop" element={<Shop />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//       <Route path="/categories" element={<Categories />} />

//       {/* ✅ IMPORTANT LINE (THIS FIXES YOUR ERROR) */}
//       <Route path="/category/:name" element={<Category />} />

//     </Routes>
//   )
// }

// export default App
import React from 'react'

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"   // ✅ IMPORT FOOTER

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Categories from "./pages/Categories"
import Category from "./pages/Category"
import Auth from "./pages/Auth"
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'


function App() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Wrapper to push footer to bottom */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <Footer /> {/* ✅ ADD FOOTER HERE */}
    </div>
  )
}

export default App
