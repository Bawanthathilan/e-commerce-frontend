import React from 'react'
import LinkText from '@/components/Atoms/Link'

const NavBar = () => {
  return (
    <div className='bg-slate-900 py-3 flex items-center justify-end'>
        <div className='max-w-6xl mx-auto flex justify-end w-full gap-5 text-sm'>
            <p className='text-white text-sm'>Welcome to GitHub Shop</p>
            <LinkText className='text-white' url='/' text='Sign In' />
            <LinkText className='text-white' url='/' text='Create an Account' />
        </div>
    </div>
  )
}

export default NavBar