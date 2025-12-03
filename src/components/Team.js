import React from 'react';
import './Team.css';

const teamMembers = [
    {
        name: 'Holden Caulfield',
        role: 'UI Designer',
        image: 'https://dummyimage.com/80x80'
    },
    {
        name: 'Henry Letham',
        role: 'CTO',
        image: 'https://dummyimage.com/84x84'
    },
    {
        name: 'Oskar Blinde',
        role: 'Founder',
        image: 'https://dummyimage.com/88x88'
    },
    {
        name: 'John Doe',
        role: 'DevOps',
        image: 'https://dummyimage.com/90x90'
    },
    {
        name: 'Martin Eden',
        role: 'Software Engineer',
        image: 'https://dummyimage.com/94x94'
    },
    {
        name: 'Boris Kitua',
        role: 'UX Researcher',
        image: 'https://dummyimage.com/98x98'
    },
    {
        name: 'Atticus Finch',
        role: 'QA Engineer',
        image: 'https://dummyimage.com/100x90'
    },
    {
        name: 'Alper Kamu',
        role: 'System',
        image: 'https://dummyimage.com/104x94'
    },
    {
        name: 'Rodrigo Monchi',
        role: 'Product Manager',
        image: 'https://dummyimage.com/108x98'
    }
];

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header">
                    <h2 className="section-title">Our Team</h2>
                    <p className="section-subtitle">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
                    </p>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card-wrapper">
                            <div className="team-card">
                                <img
                                    alt={member.name}
                                    className="team-image"
                                    src={member.image}
                                />
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
