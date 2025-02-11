import React, { useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import ratio from '../helpers/ratio'
import { tabletP } from '../utils/bp'
import brand01 from '../assets/images/brands/brand-01.png'
import brand02 from '../assets/images/brands/brand-02.svg'
import brand03 from '../assets/images/brands/brand-03.svg'
import brand04 from '../assets/images/brands/brand-04.png'
import brand05 from '../assets/images/brands/brand-05.png'
import brand06 from '../assets/images/brands/brand-06.png'
import brand07 from '../assets/images/brands/brand-07.png'
import brand08 from '../assets/images/brands/brand-08.png'
import Marquee from "react-fast-marquee";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

const WorkListNames = ({ works = [], currentWorkIndex = 0, onNameClick, mode = null }) => {

    const [rollerTranslateY, setRollerTranslateY] = useState(0)

    useEffect(() => {
        if (window.innerWidth > tabletP) {
            setRollerTranslateY(ratio(-4) * currentWorkIndex)
        }
    }, [currentWorkIndex])

    

    let transitionKey = works[0] ? works[0].id : ''
    transitionKey += works[1] ? works[1].id : ''

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={transitionKey}
                timeout={300}
            >
                <div className={`WorkListNames ${mode}`}>
                    <div className="portfolio__clients">
                        <Link to='/portfolio' className='portfolio__clients--cta btntrans scrollbtn' data-title="View all work">
                            View all work
                        </Link>
                        <div className="portfolio__clients--slideAnim scrolltrans">
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
                    </div>
                    <ul className="WorkListNames__Roller" style={{ transform: `translate3d(0, ${rollerTranslateY}vw, 0)` }}>
                        {works.map((work, index) => {
                            const distFromCurrent = currentWorkIndex - index
                            return (
                                <div className="WorksListNames__ItemEnterContainer" key={`works-list-names-${index}`}>
                                    <p
                                        className={`WorksListNames__Item ${currentWorkIndex === index ? 'isCurrent' : ''} WorksListNames__Item--DistFromCurrent${distFromCurrent}`}
                                        onClick={() => onNameClick(index)}
                                    >
                                        <span data-title={work.name}>{work.name}</span>
                                    </p>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default WorkListNames
