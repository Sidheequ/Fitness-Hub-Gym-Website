import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>FITNESS HUB</h2>
                        <p>Empowering you to reach your peak performance. Join us and transform your life today.</p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                            <li><button onClick={() => scrollToSection('about')}>About</button></li>
                            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Connect With Us</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">📱</a>
                            <a href="#" aria-label="Instagram">📸</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="YouTube">🎥</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Fitness Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
