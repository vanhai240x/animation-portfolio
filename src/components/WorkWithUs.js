import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { Power3, ScrollTrigger } from "gsap/all";
import Splitting from 'splitting'

const WorkWithUs = () => {
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
                    start: "top center",
                    end: 'bottom center',
                    scrub: true
                }
            });
        });

    }, []);
    return (
        <div className='workwithus'>
            <div className="workwithus__inner">
                <div className="workwithus__content">
                    <div className='workwithus__content--title' id='target' ref={splttext}>
                        <div className="line">
                            I am future-orientated and thrive in
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            complexity. I’m a problem-solver
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            at our core. My aim is to learn
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            and build great products
                            <div className="mask" ref={mask}></div>
                        </div>
                        <div className="line">
                            across mobile and web.
                            <div className="mask" ref={mask}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs