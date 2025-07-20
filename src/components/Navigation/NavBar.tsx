import { useState } from 'react'
import { NAV_BAR_ITEMS } from '../../data/navbaritems.data'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from './NavComponents/Dropdown.component'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    const location = useLocation().pathname

    const navigate = useNavigate()

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })

    return (
        <nav
            className={`h-20 top-0 ${
                scrolled
                    ? 'bg-[#EDEBEC] shadow-xl shadow-slate-700/10' 
                    : 'bg-transparent'
            } transition-all z-50 fixed w-screen flex gap-3- select-none ease-in-out duration-300 px-10 py-2 items-center justify-between`}
        >
            <div
                id='logo-container'
                className='cursor-pointer flex items-center'
                onClick={() => {
                    navigate('/')
                }}
            >
                <img src="/csa_logo.jpg" className='h-20 w-20 my-6' />

                <h1 className='text-2xl font-bold text-[#A9A9A9] ml-1'>
                    CSA
                </h1>
             
            </div>
            <ul
                id='navbar-items-container'
                className='flex justify-between gap-6 font-medium text-lg'
            >
                {NAV_BAR_ITEMS.map((item) => {
                    const { path, label, subItems} = item
                    const selected = path === location
                    return (
                        <li
                            key={label}
                            onClick={() => {
                                if (!subItems) {
                                    navigate(path)
                                }
                            }}
                            className={`text-dark-red cursor-pointer ${
                                selected
                                    ? 'opacity-100'
                                    : 'opacity-80 hover:opacity-100'
                            } transition-opacity duration-300 ${
                                label === 'API' && 'mb:hidden'
                            }`}
                        >
                            {
                                subItems
                                ? <Dropdown items={subItems}>{label}</Dropdown>
                                : label
                            }
                            {item.new && (
                                <span className='inline-block ml-1 p-1 bg-accent rounded-md text-white uppercase text-base'>
                                    New
                                </span>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar