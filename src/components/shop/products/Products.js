import { connect } from 'react-redux'

import ProductItem from '../productItem/ProductItem'
import classes from './Products.module.css'

const Products = ({ products }) => {
  console.log(products)
  return (
    <section className={classes.products}>
      <h2 className={classes.header}>Lorem ipsum title</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps, null)(Products)
