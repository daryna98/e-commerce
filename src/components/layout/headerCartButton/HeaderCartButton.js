import { connect } from 'react-redux'

import { openCartModal } from '../../../store/actionCreators'
import CartIcon from '../../cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import Cart from '../../cart/Cart'

const HeaderCartButton = ({ isCartOpen, openCartModal, totalQuantity }) => {
  return (
    <>
      <button className={classes.button} onClick={openCartModal}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
      {isCartOpen && <Cart />}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isCartOpen: state.cart.isCartOpen,
    totalQuantity: state.cart.totalQuantity,
  }
}

const mapDispatchToProps = {
  openCartModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCartButton)
