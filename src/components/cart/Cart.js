import classes from './Cart.module.css'
import Modal from '../common/modal/Modal'
import { closeCartModal } from '../../store/actionCreators'
import { connect } from 'react-redux'

const Cart = ({ closeCartModal, totalPrice }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Plate', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={closeCartModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCartModal}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
  }
}

const mapDispatchToProps = {
  closeCartModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
