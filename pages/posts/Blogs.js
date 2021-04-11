import styles from '../../styles/Home.module.css'
// import Image from 'next/image'
// import Link from 'next/link'
import Card from '../../components/Card.js'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Blogs({data}){
    const imageurl='bimage'
    return (
        <Layout>
            <Head>
                <title>Blogs</title>
            </Head>
            <div className={styles.container}>
               {
                   data.map((item)=>{
                       console.log(item,'item');
                       return <Card item={item} iurl={imageurl}/>
                   })
               }
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:5000/api/getblog')
    const data = await res.json()
    console.log(data)
    if(!data){
        return{
            notFound:true,
        }
    }
    return {
        props:{data},
        revalidate: 60,
    }
}

// const ImageComp= ()=>{
//     return(
//         <Image 
//         src="/images/freelancer.svg"
//         height={200}
//         width={200}
//         alt="mahadevan"
//         />
//     )
// }