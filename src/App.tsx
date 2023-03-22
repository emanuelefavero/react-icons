import './App.css'
import { useState } from 'react'
import { BiX, BiMenu } from 'react-icons/bi'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      >
        {isMenuOpen ? (
          <BiX size={100} className='close-icon' />
        ) : (
          <BiMenu size={100} className='menu-icon' />
        )}
      </button>
    </>
  )
}
