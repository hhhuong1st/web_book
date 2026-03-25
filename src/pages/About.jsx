import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About Our Comic Store</h1>
            <p style={{ maxWidth: '800px', fontSize: '1.2rem', textAlign: 'center', lineHeight: '1.6' }}>
                Welcome to Comixs, your number one source for all thing comics. We're dedicated to giving you the very best of superhero stories, with a focus on rarity, quality, and community.
            </p>
            <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '10px', textAlign: 'center' }}>
                    <i className="fa-solid fa-book-open" style={{ fontSize: '2.5rem', color: 'red', marginBottom: '15px' }}></i>
                    <h3>10,000+ Titles</h3>
                </div>
                <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '10px', textAlign: 'center' }}>
                    <i className="fa-solid fa-users" style={{ fontSize: '2.5rem', color: 'red', marginBottom: '15px' }}></i>
                    <h3>5k+ Community</h3>
                </div>
                <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '10px', textAlign: 'center' }}>
                    <i className="fa-solid fa-truck" style={{ fontSize: '2.5rem', color: 'red', marginBottom: '15px' }}></i>
                    <h3>Express Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default About;
