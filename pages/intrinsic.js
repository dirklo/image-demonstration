import React from 'react'
import Image from 'next/image'
import styles from '../styles/layouts.module.css'

export default function layouts() {
    return (
        <div style={{ width: '100%'}}>
            <div style={{position: 'relative', border: '2px solid black', margin: '10px'}}>
                <h1>
                    Intrinsic - Shrinks, but will not grow past designated size.
                </h1>
                <Image 
                    src='/images/image2.jpg' 
                    alt='Image 2' 
                    layout='intrinsic' 
                    width={4928/4} 
                    height={3264/4}
                />  
            </div>
        </div>
    )
}
