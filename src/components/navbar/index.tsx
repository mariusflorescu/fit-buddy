import React from 'react'
import NavItem from './nav-item'
import NAV_ITEMS from './constants'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-center border-t border-gray-200 bg-gray-100 px-6 py-3">
      <ul className="flex items-center space-x-16 px-1">
        {NAV_ITEMS.map(({ name, href, icon }) => (
          <NavItem key={name} name={name} href={href} icon={icon} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
