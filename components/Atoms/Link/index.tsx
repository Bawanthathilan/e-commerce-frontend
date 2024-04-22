import React from 'react'
import Link from 'next/link'

interface Link{
    text:string,
    url:string,
    className?:string
}

const LinkText = ({text , url , className}:Link) => {
  return (
    <Link className={className} href={url}>{text}</Link>
  )
}

export default LinkText