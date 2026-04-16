import React from 'react';

const About = () => {
    return (
        <div className="about-hero-container">
            <h1 className="about-hero-title">About Our Comic Store</h1>
            <p className="about-hero-description">
                Welcome to Comixs, your number one source for all thing comics. We're dedicated to giving you the very best of superhero stories, with a focus on rarity, quality, and community.
            </p>
            <div className="about-features-grid">
                <div className="about-feature-card">
                    <i className="fa-solid fa-book-open about-feature-icon"></i>
                    <h3>10,000+ Titles</h3>
                </div>
                <div className="about-feature-card">
                    <i className="fa-solid fa-users about-feature-icon"></i>
                    <h3>5k+ Community</h3>
                </div>
                <div className="about-feature-card">
                    <i className="fa-solid fa-truck about-feature-icon"></i>
                    <h3>Express Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default About;
