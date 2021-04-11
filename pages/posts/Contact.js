import styles from '../../styles/Home.module.css'
// import Image from 'next/image'
// import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Contact({data}){
    const url = `https://mahadevan.herokuapp.com/assets/contact/contact.svg`
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.container}>
                <form className='form'>
                    <div className='form-control'>
                        <label htmlFor="name">Enter the name</label>
                        <input name="name" type="text" />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Enter the email</label>
                        <input name="email" type="text" />
                    </div>
                    <button type="submit">send</button>
                </form>
                <div className={styles.cimage}>
                    <img src={url}/>
                </div>
                <div className='form'>
                    <div className='form-cont'>
                        <h2>{data.address}</h2>
                        <h2>{data.email}</h2>
                        <h2>{data.phno}</h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps(){
    const res = await fetch('https://mahadevan.herokuapp.com/api/getcontact')
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
