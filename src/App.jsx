import { Routes, Route, NavLink } from "react-router-dom"
import { LandingPage } from "./components/LandingPage"
import { Dashboard } from "./components/Dashboard"
import { Products } from "./components/Products"
import { Reviews } from './components/Reviews'
const products = [
  {
    id: 1,
    name: 'iPhone 12',
    price: 799,
    description: 'Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)'
  },
  {
    id: 2,
    name: 'iPhone 12 Pro',
    price: 999,
    description: 'Apple iPhone 12 Pro, 128GB, Graphite - Fully Unlocked (Renewed)'
  },
  {
    id: 3,
    name: 'iPhone 12 Pro Max',
    price: 1099,
    description: 'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Fully Unlocked (Renewed)'
  }
]

const reviews = [
  {
    id: 1,
    productId: 1,
    text: 'Best phone ever'
  },
  {
    id: 2,
    productId: 1,
    text: 'I love this phone'
  },
  {
    id: 3,
    productId: 2,
    text: 'Best phone ever'
  },
  {
    id: 4,
    productId: 3,
    text: 'Best phone ever'
  }
]

function App() {
  

  return (
    <>
    <nav className=" flex items-center p-4 bg-zinc-500 min-w-full">
      <ul>
        <li className=" inline-block hover:text-zinc-50"><NavLink to="/">Home</NavLink></li>
        <li className=" inline-block ml-2 hover:text-zinc-50"><NavLink to="/dashboard">Dashboard</NavLink></li>
      </ul>
    </nav>
    <div className="  container py-8">
      <Routes>
        <Route path="/" element={<LandingPage products={products} reviews={reviews} />} />
        <Route path="/dashboard" element={<Dashboard products={products} reviews={reviews} />}>
          <Route index element={<Products products={products} />} />
          <Route path="products" element={<Products products={products} />} />
          <Route path="reviews" element={<Reviews reviews={reviews} />} />
        </Route>
      </Routes>
    </div> 
    </>
  )
}

export default App
