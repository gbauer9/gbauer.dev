import React, { useEffect, useRef, memo } from 'react';
import { type } from "@camwiegert/typical";

const Home: React.FC = () => {
    const typicalRef = useRef(null);
    const subtitleRef = useRef(null);

    const steps = [2500, "G", 100, "Ga", 100, "Gar", 100, "Garr", 100, "Garre", 100, "Garret", 100, "Garrett", 100, "Garrett ", 100, "Garrett B", 100, "Garrett Ba", 100, "Garrett Bau", 100, "Garrett Baue", 100, "Garrett Bauer"];

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