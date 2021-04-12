// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Skeleton from 'react-loading-skeleton'
import React from 'react'
export default function Card({item,iurl}){
    const url = `https://mahadevan.herokuapp.com/assets/${iurl}/${item.image}.svg`
    console.log(url,'url')
    return(
            <div className={styles.card}>
                <div className={styles.cimage}>
                    {<img src={url}/>||<Skeleton width={300} height={300}/>}
                </div>
                <div className={styles.ccont}>
                    <h2>{item.content || <Skeleton/>}</h2>
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