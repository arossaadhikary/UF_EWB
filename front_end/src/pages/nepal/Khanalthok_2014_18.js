import React, { useRef, useEffect } from 'react';
import "../peru/PeruProjects.css";
import { Link } from 'react-router-dom';
import largeSS from "../nepal/nepalpics/nepalSS.jpg";

function Khanalthok_2014_18() {
    const fadeInSectionRef = useRef([]); // Initialize as an array

    useEffect(() => {
        const handleScroll = () => {
            if (Array.isArray(fadeInSectionRef.current) && fadeInSectionRef.current.length > 0) {
                fadeInSectionRef.current.forEach((section) => {
                    if (section) { // Ensure the section exists
                        const rect = section.getBoundingClientRect();
                        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                        if (isVisible) {
                            section.classList.add('is-visible');
                        } else {
                            section.classList.remove('is-visible');
                        }
                    }
                });
            }
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
            <div className='IR-header fade-in-section' ref={addToRefs}>
                <div className="IR-title">
                    <h1>Shree Janahit Secondary School</h1>
                    <h2>2014-2018</h2>
                    <h2>Khanalthok, Nepal</h2>
                </div>
            </div>
            <div className="container">
                <div className='buttons fade-in-section' ref={addToRefs}>
                    <Link to="/nepal" className="peruHomeButton">Nepal Home</Link>
                    <Link to="/nepal/phoolbari_2021_24" className="peruHomeButton">Phoolbari (2021)</Link>
                    <Link to="/nepal/phoolbari_2017_21" className="peruHomeButton">Phoolbari (2017)</Link>
                </div>
                <div className="body-text-nepal fade-in-section" ref={addToRefs}>
                    <p>Our first project in Khanalthok, Nepal consisted of establishing a reliable and clean water source at the community’s secondary school, the Shree Janahit Secondary School, over a course of five years. In this project, we aided the community in constructing a permanent water storage tank and sanitation systems. We have closed out our project in Khanalthok and have performed an evaluation of all implemented systems. Although our team has stopped working in Khanalthok, we still plan to return and maintain relationships with the community. The five years of work were split as follows:</p>
                    <div className="sub-title">
                        <h4>Assessment (May 2014 and May 2015)</h4>
                    </div>
                    <p>Our team’s five-year partnership with the community of Khanalthok began in the summer of 2014, during the initial assessment. Khanalthok is a village located in rural Nepal, nearly a two hour drive from Kathmandu, the closest major city. In Khanalthok, many water sources are turbid and contain harmful bacteria such as fecal coliform. These water sources are also very few and far away, with the closest water source to the primary school being nearly a 30 minute walk through mountainous terrain. This lack of clean and accessible water source at the secondary school lead to several cases of preventable waterborne illnesses among the student population and has put a strain on the students, teachers, and community members of Khanalthok. During this assessment, the team decided to construct a rainwater catchment system with the community to contribute more to the students’ health.</p>
                    <div className="sub-title">
                        <h4>Implementation (May 2016 and May 2017)</h4>
                    </div>
                    <p>In the summers of 2016 and 2017, our team implemented handwashing stations and a rainwater catchment system during initial implementation, then latrines, a first-flush filtration system, and a 30kL ferrocement cistern during secondary implementation. During these implementation trips, the team also focused on educating the students about important gender equality issues and proper sanitation techniques with our partnered organization Days for Girls.</p>
                    <div className="sub-title">
                        <h4>Monitoring and Evaluation (May 2018)</h4>
                    </div>
                    <p>Following the two implementation trips, the team’s last trip to Khanalthok consisted of monitoring and evaluating the implemented systems and recording our help with the community. Although the team has officially closed out our partnership with Khanalthok, we still plan to return in the following years and maintain the relationships we have developed there.</p>
                </div>
                <div className="text-w-img-div2 fade-in-section" ref={addToRefs}>
                    <div className="documentation-div">
                        <div className="documentation-img">
                            <img src={largeSS} alt="largess"/>
                        </div>
                    </div>
                </div>
                <div className="bottom-margin"></div>
            </div>
        </div>
    );
}

export default Khanalthok_2014_18;
