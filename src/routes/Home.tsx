import React, { useEffect, useRef } from 'react';
import { type } from "@camwiegert/typical";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home: React.FC = () => {
    const titleRef = useRef(null);

    const titleSteps = [2000, "Software Engineer"]

    useEffect(() => {
        type(titleRef.current, ...titleSteps);
    });

    return (
        <div className="text-center mt-5">
            <h1 className="mb-3">Garrett Bauer</h1>
            <h2 ref={titleRef} className="typicalWrapper mb-3"></h2>
            <h3>📍Portland, Oregon</h3>
            <Row className="mb-auto mt-5">
                <Col>
                    <a className="hoverable" href="https://github.com/gbauer9" >
                        <span className="init">Github</span>
                        <span className="replace">{">"}Github</span>
                    </a>
                </Col>
                <Col>
                    <a className="hoverable" href="https://www.linkedin.com/in/gbauer9/">
                        <span className="init">LinkedIn</span>
                        <span className="replace">{">"}LinkedIn</span>
                    </a>
                </Col>
                <Col>
                    <a className="hoverable" href="mailto:bauer.garrett9@gmail.com">
                        <span className="init">Email</span>
                        <span className="replace">{">"}Email</span>
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Home;