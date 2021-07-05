import React from 'react'
import Image from 'next/image'
import styles from '../styles/layouts.module.css'

export default function layouts() {
    return (
        <div style={{ width: '100%'}}>
            <div style={{position: 'relative', border: '2px solid black', margin: '10px'}}>
                <h1>
                    Fill - Stretches to fill 500px X 300px div.
                </h1>
                <div style= {{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <h2>objectFit: contain</h2>
                        <div style={{position: 'relative', height: '500px', width: '300px', border: '3px solid red'}}>
                            <Image 
                                src='/images/image4.jpg' 
                                alt='Image 4' 
                                layout='fill' 
                                objectFit='contain'
                                /> 
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <h2>objectFit: cover</h2>
                        <div style={{position: 'relative', height: '500px', width: '300px', border: '3px solid red'}}>
                            <Image 
                                src='/images/image4.jpg' 
                                alt='Image 4' 
                                layout='fill' 
                                objectFit='cover'
                                /> 
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <h2>objectFit: none</h2>
                        <div style={{position: 'relative', height: '500px', width: '300px', border: '3px solid red'}}>
                            <Image 
                                src='/images/image4.jpg' 
                                alt='Image 4' 
                                layout='fill' 
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
