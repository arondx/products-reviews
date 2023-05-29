import { Review } from "./Review"
export const Product = ({
    product,
    reviews
}) => {
  return (
    <div className=" bg-zinc-100 p-4 mt-5">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <h3>Reviews: </h3>
        {
            reviews.map(review => (
                review.productId === product.id && <Review key={review.id} review={review} />
            ))
        }
    </div>
  )
}
