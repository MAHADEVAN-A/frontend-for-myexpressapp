import styles from '../../styles/Home.module.css'
import {React,useEffect,useState} from 'react'
// import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
// import Cardd from '../../components/Cardd'
import useSWR from 'swr'
// var detail
export default function Container(){
    //  const [detail,setDetail]=useState({})
    //  const [hell,setId]=useState()
    // let iurl
    async function handleFetch(props){
        console.log(props)
        const res = await fetch(props)
        const data = await res.json()
        console.log(data)
        return data
    }
        const router = useRouter() 
        // console.log(router,'hell yeah')
        const url = `https://mahadevan.herokuapp.com/api/getpdetail/${router.query.id}`
    const {data,error}=useSWR(url,handleFetch)
    if(error) return <div>failed to load</div>
    if(!data) return <div><h1>Loading...</h1></div>
    // iurl=data.images;
    
    console.log(data);
    
    
    

    return (
        <Layout>
            <Head>
                <title>Blogs</title>
            </Head>
            <div>
                {   
                    data.pdetails.map((item)=>{
                        const url=`https://mahadevan.herokuapp.com/assets/pdetail/${data.images}/image${item.id}.svg`;
                        return(
                            <div key={item.id} className={styles.dcont}>
                                <div className={styles.dcontent}>
                                    {item.content}
                                </div>
                                <div className={styles.dimage}>
                                   <img src={url}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

