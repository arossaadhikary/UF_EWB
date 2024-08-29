import React, { useState, useRef, useEffect } from 'react';
import './GetInvolved.css';
import randomImg from './peru/pictures/randomPic.png';

function GetInvolved() {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);
    const fadeInSectionRef = useRef([]);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    useEffect(() => {
        answerRefs.current.forEach((el, index) => {
            if (index === openIndex) {
                el.style.maxHeight = el.scrollHeight + "px";
                el.style.opacity = "1";
            } else {
                el.style.maxHeight = "0";
                el.style.opacity = "0";
            }
        });
    }, [openIndex]);

    useEffect(() => {
        const handleScroll = () => {
            fadeInSectionRef.current.forEach((section) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    if (isVisible) {
                        section.classList.add('is-visible');
                    } else {
                        section.classList.remove('is-visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the event once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !fadeInSectionRef.current.includes(el)) {
            fadeInSectionRef.current.push(el);
        }
    };

    return (
        <div>
            <div className='intro-box1 fade-in-section' ref={addToRefs}>
                <div className='intro-writing'>
                    <h1>Get Involved</h1>
                </div>
            </div>

            <div className='wholeContainer'>

                <div className='info-box fade-in-section' ref={addToRefs}>
                    <div className='application-and-pic'>
                        <div className='caption'>
                            <h1>APPLICATION</h1>
                            <div className='paragraph'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc quis orci elementum rhoncus. Curabitur sodales velit felis, in vulputate mi porttitor ac. Maecenas quis nisl quis odio efficitur imperdiet. Proin ac gravida mi. Fusce interdum quam vitae odio tempor facilisis. Aliquam erat volutpat. Phasellus tristique turpis ut euismod consectetur. Donec et neque molestie eros dictum mattis sed quis risus. Curabitur faucibus malesuada urna, et gravida lectus fringilla non. Nunc pellentesque placerat faucibus. Fusce gravida odio non sapien aliquet vehicula.</p>
                            </div>
                        </div>
                        <img src={randomImg} alt="Home Image" className='applicationPicImg' />
                    </div>
                </div>

                <div className='FAQ-box fade-in-section' ref={addToRefs}>
                    <div className='caption2'>
                        <h1 className="faqtext"> FAQs</h1>
                    </div>

                    {[...Array(5)].map((_, index) => (
                        <div className='faq' key={index}>
                            <button className='Q-Box' onClick={() => toggleFAQ(index)}>
                                Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </button>
                            <div className='answer' ref={(el) => (answerRefs.current[index] = el)}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='margin'></div>
            </div>
        </div>
    );
}

export default GetInvolved;
