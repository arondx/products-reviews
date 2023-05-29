import { NavLink, Outlet } from 'react-router-dom'

export const Dashboard = ({
    products,
    reviews
}) => {
  return (
    <div className=' border border-zinc-500 p-2'>
      <nav>
        <ul>
          <li className=' inline-block'><NavLink to='/dashboard/products'>Products</NavLink></li>
          <li className=' inline-block ml-2'>|</li>
          <li className=' inline-block ml-2'><NavLink to='/dashboard/reviews'>Reviews</NavLink></li>
        </ul>
      </nav>
      <div className=' py-8 flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
