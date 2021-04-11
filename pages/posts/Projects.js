import styles from '../../styles/Home.module.css'
// import Image from 'next/image'
// import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card.js'
import Layout from '../../components/Layout'

export default function Projects({data}){
    const imageurl='pimage'
    return (
        <Layout>
            <Head>
                <title>Projects</title>
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
    const res = await fetch('https://mahadevan.herokuapp.com/api/getproject')
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
