import styles from '../../styles/Home.module.css'
// import Image from 'next/image'
// import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card.js'
import Layout from '../../components/Layout'
import Skeleton from 'react-loading-skeleton'
export default function Projects({data}){
    const imageurl='pimage'
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <div className={styles.ccontainer}>
               {
                   data.map((item)=>{
                       return <Card key={item.id} detail="posts" item={item} iurl={imageurl}/>||<Skeleton width={300} height={300}/>
                   })
               }
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://mahadevan.herokuapp.com/api/getproject')
    // const res = await fetch('http://localhost:5000/api/getproject')
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