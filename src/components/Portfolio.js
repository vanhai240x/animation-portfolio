import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import WorkListImages from './WorkListImages'
import brand01 from '../assets/images/brands/brand-01.png'
import brand02 from '../assets/images/brands/brand-02.svg'
import brand03 from '../assets/images/brands/brand-03.svg'
import brand04 from '../assets/images/brands/brand-04.png'
import brand05 from '../assets/images/brands/brand-05.png'
import brand06 from '../assets/images/brands/brand-06.png'
import brand07 from '../assets/images/brands/brand-07.png'
import brand08 from '../assets/images/brands/brand-08.png'
import WorkListNames from './WorkListNames'
import smoothScrollTo from '../helpers/smoothScrollTo'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({
    works = [
        {
            id: 0,
            name: 'PUBLIC',
            src: '/public.png',
            srcmobile: '/public-mobile.png'
        },
        {
            id: 1,
            name: 'NBS',
            src: '/nbs.png',
            srcmobile: '/nbs-mobile.png'
        },
        {
            id: 2,
            name: 'Haru Marriage',
            src: '/harumarriage.png',
            srcmobile: '/harumarriage-mobile.png'
        },
    ],
}) => {
    const [mode, setMode] = useState('all') // [all,venture,agency]
    const [sortedWorks, setSortedWorks] = useState(works)
    const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
    const [arbitrarySelectedIndex, setArbitrartySelectedIndex] = useState(null)
    const main = useRef();
    useEffect(() => {
        smoothScrollTo(null, 0, 0)
        if (mode === 'all') {
            setSortedWorks(works)
        }
        else if (mode === 'venture') {
            const newSortedWorks = works.filter(w => w.case.document.data.type === 'Venture')
            setSortedWorks(newSortedWorks)
        }
        else if (mode === 'agency') {
            const newSortedWorks = works.filter(w => w.case.document.data.type === 'Agency')
            setSortedWorks(newSortedWorks)
        }
    }, [mode])

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            setTimeout(() => {
                gsap.from('.portfolio__mobile .WorkListImages__ItemImage', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: "top center",
                    }
                });
                gsap.from('.portfolio__mobile .swiper-slide h4', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .swiper-slide h4',
                        start: "top center",
                    }
                });
                gsap.from('.portfolio__mobile .swiper-pagination', {
                    y: 60,
                    opacity: 0,
                    duration: .5,
                    stagger: 0.05,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .swiper-pagination',
                        start: "-400px center",
                    }
                });
                gsap.from('.portfolio__mobile .portfolio__clients', {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .portfolio__clients',
                        start: "-400px center",
                    }
                });
                gsap.to('.portfolio__mobile .portfolio__clients--cta', {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: Power3.easeInOut,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: '.portfolio__mobile .portfolio__clients',
                        start:'-400px bottom'
                    }
                });
            }, 1000);
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    const handleNewCurrentWorkIndex = newCurrentWorkIndex => {
        setCurrentWorkIndex(newCurrentWorkIndex)
    }
    const handleWorkListNameOrThumbnailClick = newIndex => {
        setArbitrartySelectedIndex(newIndex + 2.4)
    }
    let transitionKey = sortedWorks[0] ? sortedWorks[0].id : ''
    transitionKey += sortedWorks[1] ? sortedWorks[1].id : ''
    return (
        <div className='portfolio' ref={main}>
            <div className="portfolio__desktop">
                <WorkListNames
                    works={sortedWorks}
                    currentWorkIndex={currentWorkIndex}
                    onNameClick={handleWorkListNameOrThumbnailClick}
                    mode={mode}
                />
                <WorkListImages
                    arbitrarySelectedIndex={arbitrarySelectedIndex}
                    onNewCurrentWorkIndex={handleNewCurrentWorkIndex}
                />
            </div>
            <div className="portfolio__mobile">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={5}
                    slidesPerView={1.10}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {works.map((work, index) => (
                        <SwiperSlide key={work.id}>
                            <img
                                className="WorkListImages__ItemImage"
                                src={work.srcmobile}
                            />
                            <h4>
                                {work.name}
                            </h4>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
                
                <div className="portfolio__clients">
                    <div className="portfolio__clients--slideAnim">
                        <Marquee speed={30}>
                                <div className="portfolio__clients--logoWrapper">
                                    <div className="portfolio__clients--logo">
                                        <img src={brand01} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand02} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand03} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand04} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand05} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand06} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand07} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={brand08} alt="" />
                                    </div>
                                    {/* <div className="portfolio__clients--logo">
                                        <img src={asoslogo} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={kenjologo} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={wefox} alt="" />
                                    </div>
                                    <div className="portfolio__clients--logo">
                                        <img src={mineirors} alt="" />
                                    </div> */}
                                </div>
                        </Marquee>
                    </div>
                    <Link to='/portfolio' className='portfolio__clients--cta btntrans' data-title="View all work">
                        View all work
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Portfolio