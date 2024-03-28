"use client"
import React from 'react'
import styles from "./navLinks.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLinks = ({item}) => {
    const  pathname = usePathname() 
  return (
    <Link href={item.path} className= {`${styles.container} ${pathname === item.path && styles.active}`}>
                    {item.title}
                </Link>
   
  )
}

export default NavLinks