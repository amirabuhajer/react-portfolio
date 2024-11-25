import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "SQL",
    "React",
    "Git"
];

const labelsSecond = [
    "React",
    "Javascript",
    "HTML5/CSS3",
    "Python",
    "PostgreSQL",
];

const labelsThird = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Software Engineering & Development</h3>
                    <p>I build reliable and efficient software solutions, leveraging strong expertise in coding, debugging, and system design. My focus lies in creating scalable, secure, and maintainable software aligned with industry best practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Full-Stack Development</h3>
                    <p>I design and develop dynamic web applications, combining modern front-end frameworks with robust back-end systems. I aim to deliver seamless, user-friendly experiences through effective implementation of the software development lifecycle.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Agile and Collaborative Development</h3>
                    <p>I thrive in collaborative, agile environments, working closely with teams to deliver projects on time. I specialize in version control, CI/CD pipelines, and cloud technologies to enhance team efficiency and ensure smooth deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;