import React from 'react'
import Image from 'next/image'
import styles from '../styles/layouts.module.css'

export default function layouts() {
    return (
        <div style={{ width: '600'}}>
            <div style={{height: 200, width: 200, background: 'grey'}}>
                <Image src='/images/image1.jpg' alt='Image 1' layout='fixed' height={100} width={100} />    
            </div> 
        </div>
    )
}
