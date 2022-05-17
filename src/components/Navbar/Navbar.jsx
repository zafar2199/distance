import React from 'react'
import { SearchIcon } from '../../assets/icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__wrap'>
                    <div className='navbar__left'>
                        <input
                            className='navbar__search'
                            type='text'
                            placeholder='Search'
                        />
                        <button className='navbar__search-btn'>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
