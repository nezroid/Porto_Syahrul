"use client"
import React, { useState } from 'react'
import NavLinks from './navLinks/NavLinks';
import styles from "./links.module.css"
import Image from 'next/image';
const Links = () => {
    const [open,setOpen] = useState(false)
    const links = [ 
        {
            title: "HomePage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contack",
        },
        {
            title:"Komentar",
            path:"/skill"
        },
      
        
    ]
    const sesion =true
    const isAdmin =true

    return (
        <div className={styles.container}>

       
        <div className={styles.links}>
            {links.map((link) => (
                <NavLinks item={link} key={link.title} />
            ))}{
                // sesion ? (
                //     <>
                //         {isAdmin && 
                //             <NavLinks item={{title:"Admin", path:"/admin"}}/>}
                //         <button className={styles.logout}>Logout</button>
                //         </>
                //         ) : (
                //             <NavLinks item={{title:"Login", path:"/login"}}/>
                //             )
                        }
                    </div>
                    <  Image src="/menu.png" alt="menu" width="30" height="30" className={styles.menuButton} onClick={() => setOpen ((prev)=>!prev)} />
                    
                    {open && (
                        <div className={styles.mobileLinks}>
                            {links.map((link) => (
                <NavLinks item={link} key={link.title} />
            ))}
                            </div>
                    )}
            </div>
    )
}

export default Links;
