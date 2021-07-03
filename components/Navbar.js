import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <a>
                    Home 
                </a> 
            </Link>
            <Link href='/layouts'>
                <a>
                    Layouts 
                </a> 
            </Link>
        </div>
    )
}
