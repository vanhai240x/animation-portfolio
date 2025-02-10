import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import brandlogo from '../assets/images/brand-logo.svg'
import wdlogo from '../assets/images/web-deisgn-icon.svg'
import pdlogo from '../assets/images/product-icon.svg'
import OffersBlocks from './OffersBlocks'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';


gsap.registerPlugin(ScrollTrigger);

const OurOffers = () => {
    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            gsap.to('.ouroffers__card', {
                y: 0,
                opacity: 1,
                duration: .5,
                stagger: .2,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__card--icon', {
                scale: .8,
                opacity: 0,
                duration: .8,
                stagger: .3,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__card h4', {
                y: 60,
                opacity: 0,
                duration: .5,
                stagger: .3,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__mobile .ouroffers__mobile--title', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top center'
                },
            });
            gsap.from('.ouroffers__mobile .swiper-slide h4', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .swiper-slide h4',
                    start: '-=700px'
                },
            });
            gsap.from('.ouroffers__mobile .swiper-pagination', {
                y: 60,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .swiper-pagination',
                    start: '-=700px'
                },
            });
            gsap.from('.ouroffers__mobile .ouroffers__mobile--cta a', {
                scale: .7,
                opacity: 0,
                duration: .5,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: '.ouroffers__mobile .ouroffers__mobile--cta',
                    start: '-=700px'
                },
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    return (
        <div className="ouroffers" ref={main}>
            <div className="offergradient"></div>
            <div className="offergradient2"></div>
            <OffersBlocks />
        </div>
    )
}

export default OurOffers