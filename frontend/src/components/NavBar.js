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

    const user = data.accounts.find(x => x.account_id === 1)

    return (
        <div className="content-width">
            <nav id='navbar' style={{ position: "sticky" }} className='navbar'>
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
                    {/* <li className='nav-items'>
                        <a href="#footer-container" className='nav-links'>
                            About
                        </a>
                    </li> */}
                    <li className='nav-items'>
                        <a href="/" className='nav-links'>
                            Home
                        </a>
                    </li>
                    <li className='nav-items'>
                        <a href='/look' className='nav-links'>
                            Virtual Look
                        </a>
                    </li>
                    <li className='nav-items'>
                        <a href='/recommend' className='nav-links'>
                            Recommendation
                        </a>
                    </li>
                </ul>
                {
                    (user) ?
                        <>
                            <div>
                                <div className='noti-container'>
                                    <a href={`/profile/${user.account_id}`}>
                                        <div className='avatar-nav' style={{ cursor: 'pointer' }}
                                        //  onClick={() => handleClick('profile')}
                                        >
                                            <div className='name'>
                                                <img src={avatar} alt='Avatar' />
                                                {/* <img src={accounts.avatar} alt='Avatar' /> */}
                                                <span>{user.username}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </>

                        : <>
                        <a href="/login">
                        <button className='btn'
                            // onClick={() => handleClick('login')}
                            >Sign In</button>
                        </a>
                        <a href="/sign-up">   
                            <button className='btn signup'
                            // onClick={() => handleClick('signup')} 
                            >
                            Sign Up</button>
                        </a>    
                        </>
                }
            </nav>
        </div>
    )
}
export default NavBar