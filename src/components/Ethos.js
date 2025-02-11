import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import TextScroll from './TextScroll';
import Splitting from 'splitting'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const Ethos = () => {
    const splttext = useRef(null)
    const mask = useRef(null)
    const text = new Splitting({ target: splttext.current, by: 'lines' });
    const comp = useRef();

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {

        gsap.utils.toArray(".mask").forEach(elem => {
            gsap.to(elem, {
                width: 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "-300px center",
                    end: 'bottom center',
                    scrub: true
                }
            });
        });

    }, []);
    return (
        <div className="ethos" id='ethos'>
            <div className="ethos__content">
                <h4 className="ethos__content--mobiletitle">
                    my ethos
                </h4>
                <div className='ethos__content--title' id='target' ref={splttext}>
                    <div className="line">
                        I have been fortunate to work 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        for many companies, including 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        leading domestic technology 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        corporations, where I have 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        learned from and worked with
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        talented and experienced engineers. 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        I have had exposure to exciting 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        fields such as blockchain, real 
                        <div className="mask" ref={mask}></div>
                    </div>
                    <div className="line">
                        estate, logistics, call centers, etc.
                        <div className="mask" ref={mask}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ethos