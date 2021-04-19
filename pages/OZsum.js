import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'
export default function OZsum(){
    return(
        <>
<div id="checkbtn" class="navbar-toggle">
        <i class="fas fa-bars"></i>
    </div>
    <nav class="navbar">
        <div id="checkbtn1" class="navbar-toggle1">
            <i class="fas fa-window-close"></i>
        </div>
        <ul class="navbar-menu">
            <li><a href="#service">Services</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
    <div class="banner">
        <div class="banner-logo">
            <img src="/OZsumlogo.png" alt=""/>
        </div>
    </div>
    
    <section class="section" id="service">
        <div class="section-title" >
            <h1>SERVICES</h1>
        </div>
        <div class="section-content">
             <div class="box">
                <i class="fas fa-money-check"></i>
                <p>Accounting</p>
             </div>
             <div class="box">
                <i class="fas fa-money-bill"></i>
                <p>Taxation</p>
             </div>
             <div class="box">
                <i class="fas fa-book-open"></i>
                <p>Preparation of management reports</p>
             </div>
             <div class="box">
                <i class="fas fa-archive"></i>
                <p>Preparation of Financial Reports</p>
             </div>
             <div class="box">
                <i class="fas fa-clipboard"></i>
                <p>Preparation of BAS & IAS</p>
             </div>
             <div class="box">
                <i class="fas fa-business-time"></i>
                <p>Business Services</p>                                 
            </div>
             <div class="box">  
                <i class="fas fa-money-check-alt"></i>
                <p>Payroll</p>  
             </div>
             <div class="box">
                <i class="fas fa-book"></i>
                <p>Bookkeeping</p>
             </div>
        </div>
        <div class="action-top">
            <a href="#"><i class="fas fa-arrow-up"></i></a>
        </div>
    </section>

    <div class="tools">
        <h1 class="tools-title">TOOLS</h1>
        <div class="tools-container">
            <div class="tool-img"><img src="/app1.png" /></div>
            <div class="tool-img"><img src="/app2.png" /></div>
            <div class="tool-img"><img src="/app3.png" /></div>
            <div class="tool-img"><img src="/app4.png" /></div>
            <div class="tool-img"><img src="/app5.png" /></div>
        </div>
        <div class="action-top">
            <a href="#"><i class="fas fa-arrow-up"></i></a>
        </div>
    </div>
    <div id="feature" class="section">
        <div class="section-title">
            <h1>Salient features</h1>
        </div>
        <div class="section-content">
            <div class="box">
                <i class="fas fa-user-friends"></i>
                <p>Team of qualified and experienced professionals</p>
            </div>
            <div class="box">
                <i class="fas fa-space-shuttle"></i>
                <p>Sound,effective and organised workflow</p>
            </div>
            <div class="box">
                <i class="fas fa-industry"></i>
                <p>Offers real-time insights through on-demand reports and intelligence through predictive models</p>
            </div>
            <div class="box">
                <i class="fas fa-database"></i>
                <p>Data-driven decisions for your business</p>
            </div>
            <div class="box">
                <i class="fas fa-hands-helping"></i>
                <p>Helps to mitigate risks and improve compliance</p>
            </div>
            <div class="box">
                <i class="fas fa-file"></i>
                <p>Well-documented Data Security Measures</p>
            </div>
            <div class="box">
                <i class="fas fa-search-minus"></i>
                <p>Well-established KPI’s (Key Performance Indicators) to monitor process performance</p>
            </div>
            <div class="box">
                <i class="fas fa-dollar-sign"></i>
                <p>Nominal pricing based on a “What-You-Use is What-You-Pay” basis</p>
            </div>
        </div>
        <div class="action-top">
            <a href="#"><i class="fas fa-arrow-up"></i></a>
        </div>
    </div>
    <div id="contact" class="contact">
         <div class="contact-title">   
            <h1>CONTACT us</h1>
         </div>
        <form class="contact-form">
            <div class="links">
            <div class="contact-links">
                <i class="fas fa-envelope"><div class="conten">ozsum.services@ outlook.com.au</div></i>
                <i class="fas fa-phone-square-alt"><div class="conten">+61414411992</div></i>
            </div>
            </div>
            <label for="name">Name:</label>
            <input type="text" name="name"/>
            <label for="email">Email:</label>
            <input type="text"/>
            <label for="message">Message:</label>
            <input class="rtext" type="text"/>
            <div class="action">
            <button type="button">SEND</button>
            </div>
            <div class="social-links">
                <a href="https://au.linkedin.com/in/ozsum-accouting-and-business-services-aa685b205"><i class="fab fa-linkedin"></i></a>
            </div>
        </form>
        <div class="action-top">
            <a href="#"><i class="fas fa-arrow-up"></i></a>
        </div>
        
    </div>
    <section class="section" id="about">
        <div class="section-title">
            <h1>ABOUT us</h1>
        </div>
        <div class="section1-content">         
            
                OZsum is a <span> start-up Knowledge Process Outsourcing (KPO) firm </span> endeavored to improve the finance and accounting functions of your organization. We are well equipped with professionally qualified and experienced members with sound knowledge in advanced and state-of-the-art technology platforms, who would understand your needs and devise cost-effective solutions accordingly. This lets you focus on the core and strategic activities of your business and thereby save precious time and money; further, it alleviates the burden of having to hire accounting professionals and invest heavily on technology
            
        </div>
        <div class="action-top">
            <a href="#"><i class="fas fa-arrow-up"></i></a>
        </div>
    </section>
<Head>
<title>My First Next App</title>
<link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="/OZsum.css"/>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
<script type="text/javascript" src="/javas.js"></script>
</Head>
</>
    )
    
}




// const ImageComp= (props)=>{
//     const url = props.src;
//     return(
//         <Image 
//         src={url}
//         height={109}
//         width={144}
//         alt="mahadevan"
//         />
//     )
//   }