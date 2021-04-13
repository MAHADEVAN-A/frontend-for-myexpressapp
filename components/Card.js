import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'
import React from 'react'
export default function Card({item,iurl,detail}){
    const url = `https://mahadevan.herokuapp.com/assets/${iurl}/${item.image}.svg`
    // const url = `http://localhost:5000/assets/${iurl}/${item.image}.svg`
    console.log(url,'url')
    const link = `/${detail}/${item.id}`
    return(
            <div className={styles.card}>
                <div className={styles.cimage}>
                    {/* {<img src={url}/>||<Skeleton width={300} height={300}/>} */}
                    <ImageComp isrc={url} />
                </div>
                <div className={styles.ccont}>
                    <Link href={link}>
                        <a><h2>{item.content}</h2></a>
                    </Link>
                </div>
            </div>      
    )
}


const ImageComp= (props)=>{
    const url = props.isrc;
    return(
        <Image 
        src={url}
        height={350}
        width={350}
        alt="mahadevan"
        />
    )
}