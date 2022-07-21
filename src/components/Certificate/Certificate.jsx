import React from 'react'
import './Certificate.css'
import C from './CertificateImg/C.jpg'
import HTML from './CertificateImg/HTML.jpg'
import CSS from './CertificateImg/CSS.jpg'
import JS from './CertificateImg/JavaScript.png'
import ReactRedux from './CertificateImg/ReactJs+Redux.jpg'
import ReactComp from './CertificateImg/ReactJs.png'
import gameDevops from './CertificateImg/GameDevelopment.jpg'
import Cpp from './CertificateImg/Cpp.png'
import NodeJS from './CertificateImg/NodeJs.png'
import SQL from './CertificateImg/SQL.png'
import Python from './CertificateImg/Python.png'

import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
const Certificate = () => { 
    let certificate=[
        {
            img:C,
            desc:"Programming in C certification"
        },
        {
            img:HTML,
            desc:"HTML Certification"
        },
        {
            img:CSS,
            desc:"CSS Certification"
        },
        {
            img:JS,
            desc:"JavaScript Certification"
        },
        {
            img:ReactRedux,
            desc:"React + Redux Certification"
        },
        {
            img:ReactComp,
            desc:"Certification in React Components"
        },
        {
            img:gameDevops,
            desc:"Game Development Certificate"
        },
        {
            img:Cpp,
            desc:"Programming in C++ Certificate"
        },
        {
            img:NodeJS,
            desc:"NodeJs Certification"
        },
        {
            img:SQL,
            desc:"SQL Certification"
        },
        {
            img:Python,
            desc:"Python Certification"
        }
    ]
  return ( 
    <div className="certificate" id='Certificates'>
        <div className="c-heading">
            <span>My Certificates </span>
            <span>in Various Technical fields</span>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {certificate.map((crt,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div id='Cimg' className="c-certificate">
                            <img src={crt.img} alt="" />
                            <span>{crt.desc}</span>
                        </div>
                    </SwiperSlide>
                )
            }
        )
        }
        </Swiper>
    </div>
  )
}

export default Certificate