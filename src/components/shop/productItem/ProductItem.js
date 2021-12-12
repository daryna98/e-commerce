import classes from './ProductItem.module.css'

const ProductItem = ({ title, price, description, image }) => {
  //
  // const addToCartHandler = () => {
  // 	dispatch(
  // 			cartActions.addItemToCart({
  // 				id,
  // 				title,
  // 				price,
  // 			})
  // 	);
  // };

  console.log(image)

  return (
    <div className="col-sm-6 col-md-4 mb-5">
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={classes.image}
      />
      <div className={classes.description}>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <div className={classes.price}>${price.toFixed(2)}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem
