import React, { useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bggrid from '../assets/images/bg-grid.svg'
gsap.registerPlugin(ScrollTrigger);


const Service = () => {
    useEffect(() => {

        gsap.from('.service__vision--slide', {
            scrollTrigger: {
                trigger: '.service',
                start: "-=50%",
            },
            y: '110%',
        });
        gsap.from('.service__textbox', {
            scrollTrigger: {
                trigger: '.service',
                start: "-=30%",
            },
            y: 100,
            opacity: 0,
        });

        ScrollTrigger.refresh()

    }, []);
    return (
        <div className="service" data-scroll-section>
            <div className="service__vision">
                <Parallax translateX={[0, -20]} className='mdone'>
                    <div className="service__vision--slide textSlide">
                        <h1 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
                            Experienceeeee
                        </h1>
                    </div>
                </Parallax>
                <Parallax translateX={[0, -100]} className='mdblock'>
                    <div className="service__vision--slide textSlide">
                        <h1 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
                            Experienceeeee
                        </h1>
                    </div>
                </Parallax>
            </div>
            <Parallax speed={20}>
                <div className="service__textbox">
                    <p>
                        <i>Senior Front End Developer</i>, <b>FPT Software</b>, 5/2024 - Present
                        <br/><i>Senior Front End Developer</i>, <b>Upwork's Freelancer</b>, 1/2024 - 4/2024
                        <br/><i>Senior Front End Developer</i>, <b>EcoTruck</b>, 02/2023 - 12/2023
                        <br/><i>Front End Developer</i>, <b>Danh Khoi</b>, 04/2022 - 01/2023
                        <br/><i>Front End Developer</i>, <b>Rionlab</b>, 03/2019 - 03/2022
                    </p>
                </div>
            </Parallax>
        </div>
    )
}

export default Service