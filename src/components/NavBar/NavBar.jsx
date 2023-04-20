import { Link } from 'react-router-dom'
// import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className='App-header'>
        La Fina Postres
        {user ?
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <Link to="/changePassword">Change Password</Link>
          </nav>
        :
        <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
