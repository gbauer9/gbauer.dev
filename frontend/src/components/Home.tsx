import React, { useEffect, useRef, memo } from 'react';
import { type } from "@camwiegert/typical";

const Home: React.FC = () => {
    const typicalRef = useRef(null);

    const steps = [2500, "Garrett Bauer"]

    useEffect(() => {
        type(typicalRef.current, ...steps);
    });

    return (
        <div>
            <h1 ref={typicalRef} className="typicalWrapper"></h1>
            <h2>Software Engineer</h2>
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

export default memo(Home);