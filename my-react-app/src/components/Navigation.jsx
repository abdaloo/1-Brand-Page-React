const Navigation =()=>{
    return(
        <nav className="container">
        <div className='logo'>
          <img src="images/brand_logo.png" alt="Logo-image" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='login-btn'>Login</button>
      </nav>
    )
}

export default Navigation;