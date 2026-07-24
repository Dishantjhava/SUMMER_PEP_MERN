function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>Course Dashboard</h1>
      <button className="cart-btn" onClick={props.onCartClick}>
        Cart ({props.cartCount})
      </button>
    </nav>
  )
}

export default Navbar
