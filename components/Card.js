// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
export default function Card({item,iurl}){
    const url = `http://localhost:5000/assets/${iurl}/${item.image}.svg`
    console.log(url,'url')
    return (
     
            <div className={styles.card}>
                <div className={styles.cimage}>
                    <img src={url}/>
                </div>
                <div className={styles.ccont}>
                    <h2>{item.content}</h2>
                </div>
            </div> 
    )
    
}


// const ImageComp= (props)=>{
//     const url = `http://localhost:5000/assets/pimage/${props.isrc}.svg`
//     return(
//         <Image 
//         src={url}
//         height={350}
//         width={350}
//         alt="mahadevan"
//         />
//     )
// }