import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Products from './components/shop/products/Products'
import { fetchProducts } from './store/actionCreators'

function App({ fetchProducts }) {
  useEffect(fetchProducts, [])

  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  )
}

const mapDispatchToProps = {
  fetchProducts,
}

export default connect(null, mapDispatchToProps)(App)
