import React, { useEffect, useRef } from 'react';
import '../Home.css'
import { type } from "@camwiegert/typical";

const Home: React.FC = () => {
    const typicalRef = useRef(null);

    const steps = [2500, "Software Engineer"]

    useEffect(() => {
        type(typicalRef.current, ...steps);
    });

    return (
        <div id="home">
            <h1>Garrett Bauer</h1>
            <h2 ref={typicalRef} className="typicalWrapper"></h2>
            <h3>📍Portland, Oregon</h3>
            <div>
                <div>
                    <a href="https://github.com/gbauer9" >
                        <span>Github</span>
                    </a>
                </div>
                <div >
                    <a href="https://www.linkedin.com/in/gbauer9/">
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div>
                    <a href="mailto:bauer.garrett9@gmail.com">
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;