import { useState } from 'react'
import logo from '../images/Logo.png'
import '../styles/NavBar.css'
import '../styles/Search.scss'
import data from '../data/accounts'
import avatar from '../images/avatar.png'

const NavBar = () => {
    const background = { background: "#5DE2E8" }
    const [query, setQuery] = useState()
    const [search, setSearch] = useState("")
    const [isHover, setHover] = useState(false)
    const [isLoading, setLoading] = useState(false)

    return (
        <nav id = 'navbar' style = {{position: "sticky"}} className='navbar'>
            <div className='navbar-container'>
                <a href='/' className='navbar-logo'>
                    <img src={logo} className='logo' alt='Logo' />
                    FinnTA
                </a>
            </div>
            <div className='dash-search'>
                <div class='search-bar'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        size="20px"
                        placeholder="Search for Shop/Items..."
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }} required />

                    <div className='search-button' onClick={() => {
                        if (!isLoading)
                            setSearch(query)
                    }}>
                        <i class="fas fa-search"></i>
                    </div>
                </div>

            </div>
            <ul className='nav-menu dash'>
                <li className='nav-items'>
                    <a href = "#footer-container" className='nav-links'>
                        About
                    </a>
                </li>
                <li className='nav-items'>
                    <a href= "#hero-container" className='nav-links'>
                        Home
                    </a>
                </li>
                <li className='nav-items'>
                    <a href='#news' className='nav-links'>
                        Virtual Look
                    </a>
                </li>
            </ul>
            {
                data.accounts.map(accounts => (
                    (accounts.username !== "") ? <> 
                    <div>
                        <div className='noti-container'>
                        <a href="/upload">
                            <div className='avatar-nav' style={{ cursor: 'pointer' }}
                                //  onClick={() => handleClick('profile')}
                                >
                                <div className='name'>
                                    <img src= {avatar} alt='Avatar' />
                                    {/* <img src={accounts.avatar} alt='Avatar' /> */}
                                    <span>{accounts.username}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                    </> : <> 
                    <button className='btn' 
                    // onClick={() => handleClick('login')}
                    >Sign In</button>
                    <button className='btn signup' 
                    // onClick={() => handleClick('signup')}
                    >Sign Up</button></>
                ))
            }

           
        </nav>
    )
}
export default NavBar