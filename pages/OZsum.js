import React from 'react'
import Head from 'next/head'
// import Image from 'next/image'
export default function OZsum(){
    return(
        <>
    <div>
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
            </label>
            <ul id="llink">
            <li><a href="#service">Services</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            </ul>
        </nav>
        <div class="bannerr">
            <div class="content">
                <h1>OZsum</h1>
                <h2>Accounting & Business Services</h2>
                <span>IN PURSUIT OF QUALITY</span>
            </div>
        </div>
        <section id="service">
            <div class="title" >
                <h1>SERVICES</h1>
            </div>
            <div class="content">         
                <span>7 years of experience in diverse lines of work like Australian accounting, taxation, book-keeping, and internal audit, enjoying proficiency in MS Office Suite and accounting software tools like XERO, XPM, MYOB AR, MYOB AE,  Quickbooks, etc. My work experiences are as follows:</span>
                <ul>
                    <li>
                        <i class="fas fa-money-check"></i>
                        <p>Accounting</p>
                    </li>
                    <li>
                        <i class="fas fa-money-bill"></i>
                        <p>Taxation</p>
                    </li>
                    <li>
                        <i class="fas fa-book"></i>
                        <p>Bookkeeping</p>
                    </li>
                    <li>
                        <i class="fas fa-money-check-alt"></i>
                        <p>Payroll</p>
                    </li> 
                    <li>
                        <i class="fas fa-business-time"></i>
                        <p>Business Services</p>
                    </li>
                    <li>
                        <i class="fas fa-clipboard"></i>
                        <p>Preparation of BAS & IAS</p>
                    </li>
                    <li>
                        <i class="fas fa-archive"></i>
                        <p>Preparation of Financial Reports</p>
                    </li>
                    <li>
                        <i class="fas fa-book-open"></i>
                        <p>Preparation of management reports</p>
                    </li>
                </ul>
            </div>
        </section>
        <div class="conttool">
            <h1>TOOLS</h1>
            <div class="tools">
                <div class="itimg"><img src="/app1.png" /></div>
                <div class="itimg"><img src="/app2.png" /></div>
                <div class="itimg"><img src="/app3.png" /></div>
                <div class="itimg"><img src="/app4.png" /></div>
                <div class="itimg"><img src="/app5.png" /></div>
            </div>
        </div>
        <div id="feature" class="cont">
            <h1>Salient features</h1>
            <div class="container">
                <div class="item">
                    <i class="fas fa-user-friends"></i>
                    <p>Team of qualified and experienced professionals</p>
                </div>
                <div class="item">
                    <i class="fas fa-space-shuttle"></i>
                    <p>Sound,effective and organised workflow</p>
                </div>
                <div class="item">
                    <i class="fas fa-industry"></i>
                    <p>Offers real-time insights through on-demand reports and intelligence through predictive models</p>
                </div>
                <div class="item">
                    <i class="fas fa-database"></i>
                    <p>Data-driven decisions for your business</p>
                </div>
                <div class="item">
                    <i class="fas fa-hands-helping"></i>
                    <p>Helps to mitigate risks and improve compliance</p>
                </div>
                <div class="item">
                    <i class="fas fa-file"></i>
                    <p>Well-documented Data Security Measures</p>
                </div>
                <div class="item">
                    <i class="fas fa-search-minus"></i>
                    <p>Well-established KPI’s (Key Performance Indicators) to monitor process performance</p>
                </div>
                <div class="item">
                    <i class="fas fa-dollar-sign"></i>
                    <p>Nominal pricing based on a “What-You-Use is What-You-Pay” basis</p>
                </div>
            </div>
        </div>
        <div id="contact" class="contact">
            <h1>CONTACT us</h1>
            <div class="form">
                <form>
                    <ul class="form-style-1">
                        <li>
                            <label>Name <span class="required">*</span></label>
                            <input type="text" name="field1" class="field-long" placeholder="name" />
                        </li>
                        <li>
                            <label>Email <span class="required">*</span></label>
                            <input type="email" name="field3" class="field-long" />
                        </li>
                        <li>
                            <label>Mobile no: <span class="required">*</span></label>
                            <input type="phno" name="field3" class="field-long" />
                        </li>
                        <li>
                            <label>Your Message <span class="required">*</span></label>
                            <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                    </form>
            </div>
        </div>
        <section class="section2" id="about">
            <div class="title">
                <h1>ABOUT us</h1>
            </div>
            <div class="content">         
                <span>
                    OZsum is a start-up Knowledge Process Outsourcing (KPO) firm endeavored to improve the finance and accounting functions of your organization. We are well equipped with professionally qualified and experienced members with sound knowledge in advanced and state-of-the-art technology platforms, who would understand your needs and devise cost-effective solutions accordingly. This lets you focus on the core and strategic activities of your business and thereby save precious time and money; further, it alleviates the burden of having to hire accounting professionals and invest heavily on technology
                </span>
            </div>
            <div class="action">
                <a href="#"><i class="fas fa-arrow-up"></i></a>
            </div>
            <div class="slink">
                <a href="https://au.linkedin.com/in/ozsum-accouting-and-business-services-aa685b205"><i class="fab fa-linkedin"></i></a>
            </div>
        </section>
    </div>
<Head>
<title>My First Next App</title>
<link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="/OZsum.css"/>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
/>
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