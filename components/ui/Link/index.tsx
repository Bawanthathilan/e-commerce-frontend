import React from 'react'
import Link from 'next/link'

interface Link{
    text:string,
    url:string,
    className?:string,
    onClick?:any
}

const LinkText = ({text , url , className , onClick}:Link) => {
  return (
    <Link onClick={onClick} className={className} href={url}>{text}</Link>
  )
}

export default LinkText