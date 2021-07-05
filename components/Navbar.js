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
            <Link href='/fixed'>
                <a>
                    Fixed
                </a> 
            </Link>
            <Link href='/intrinsic'>
                <a>
                    Intrinsic
                </a> 
            </Link>
            <Link href='/responsive'>
                <a>
                    Responsive
                </a> 
            </Link>
            <Link href='/fill'>
                <a>
                    Fill
                </a> 
            </Link>
        </div>
    )
}
