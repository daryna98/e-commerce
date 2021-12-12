import { Link } from 'react-router-dom'
import HeaderCartButton from '../headerCartButton/HeaderCartButton'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src="https://static.tildacdn.com/tild6161-3432-4832-b064-303464616137/unnamed.svg"
          className={classes.logo}
        />
      </Link>
      <HeaderCartButton />
    </header>
  )
}

export default MainNavigation
