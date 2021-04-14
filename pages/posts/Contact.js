import styles from '../../styles/Home.module.css'
import Image from 'next/image'
// import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Contact({data}){
    const url = `https://mahadevan.herokuapp.com/assets/contact/contact.svg`
    // const url = `http://localhost:5000/assets/contact/contact.svg`
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.ccontainer}>
                <form className={styles.form}>
                    <div className={styles.formcontrol}>
                        <label htmlFor="name">Enter the name</label>
                        <input name="name" type="text" />
                    </div>
                    <div className={styles.formcontrol}>
                        <label htmlFor="email">Enter the email</label>
                        <input name="email" type="text" />
                    </div>
                    <button type="submit">send</button>
                </form>
                <div className={styles.formcimage}>
                    <ImageComp isrc={url} />
                </div>
                <div className={styles.form1}>
                    <div className={styles.formcont1}>
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
    // const res = await fetch('http://localhost:5000/api/getcontact')
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