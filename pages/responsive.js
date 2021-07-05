import React from 'react'
import Image from 'next/image'
import styles from '../styles/layouts.module.css'

export default function layouts() {
    return (
        <div style={{ width: '100%'}}>
            <div style={{position: 'relative', border: '2px solid black', margin: '10px'}}>
                <h1>
                    Responsive - Will shrink or grow based on viewport.
                </h1>
                <Image 
                    src='/images/image3.jpg' 
                    alt='Image 3' 
                    layout='responsive' 
                    width={7360} 
                    height={4912}
                /> 
            </div>
        </div>
    )
}
