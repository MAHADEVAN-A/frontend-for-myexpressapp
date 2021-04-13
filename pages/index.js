import Head from 'next/head'
import Navbar from '../components/Navbar'
// import Main from '../components/Main'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  const url = `https://mahadevan.herokuapp.com/assets/profile/profile.svg`
  // const url = `http://localhost:5000/assets/profile/profile.svg`
  return (
    <>
      <Head>
        <title>My First Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={styles.container}>
          <h2 className={styles.title}>{data.content}</h2>
          <div className={styles.cimage}>
            <ImageComp isrc={url} />
          </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://mahadevan.herokuapp.com/api/getprofile')
  // const res = await fetch('http://localhost:5000/api/getprofile')
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