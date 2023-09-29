import React from 'react'
import './Portfolio.css'
import 'swiper/css'

import {Swiper, SwiperSlide} from 'swiper/react'

import { themeContext } from "../../Context";
import { useContext } from "react";



import KiddoDemo from '../../Videos/KiddoDemo.mp4'
import KIDDO from '../../img/KIDDO.jpg';
import LetsStartLearning from '../../img/Lets Start Learning.jpg';
import Alphabets from '../../img/Alphabets.jpg';
import Numbers from '../../img/Numbers.jpg';
import Videos from '../../img/Videos.jpg';
import PoemVideos from '../../img/Poem Videos.jpg';
import StoryVideos from '../../img/Story Videos.jpg';



const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return(
        <div className="portfolio" id="Portfolio">

            {/* heading*/}
            <span style={{color : darkMode? 'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider*/}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >   
            
            
                <SwiperSlide>
                    <video 
                    controls
                    >
                        <source src={KiddoDemo} type="video/mp4" />
                    </video>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={KIDDO} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={LetsStartLearning} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Alphabets} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Numbers} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Videos} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PoemVideos} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={StoryVideos} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio