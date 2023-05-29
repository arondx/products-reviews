import { Product } from "./Product"

export const LandingPage = ({
  products,
  reviews
}) => {
  return (
    <>
      <div>
        <h1>Products</h1>
        {
          products.map(product => (
            <Product key={product.id} product={product} reviews={reviews} />
          ))
        }
      </div>  
    </>
  )
}
