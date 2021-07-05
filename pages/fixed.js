import React from 'react'
import Image from 'next/image'
import styles from '../styles/layouts.module.css'

export default function layouts() {
    return (
        <div style={{ width: '100%'}}>
            <div style={{position: 'relative', border: '2px solid black', margin: '10px'}}>
                <h1>
                    Fixed - No Resizing
                </h1>
                <Image 
                    src='/images/image1.jpg' 
                    alt='Image 1' 
                    layout='fixed'
                    width={7360/3} 
                    height={4100/3}
                />   
            </div>
        </div>
    )
}
