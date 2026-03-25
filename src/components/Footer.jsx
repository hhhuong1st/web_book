import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-col-1">
                    <img src="/assets/images/imgi_1_logo.png" style={{ height: '100px' }} alt="Logo" />
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="footer-col-2">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <h3>Contact Us</h3>
                    <p><i className="fa-solid fa-phone"></i> +012 345 6789</p>
                    <p><i className="fa-solid fa-envelope"></i> info@comixs.com</p>
                    <p><i className="fa-solid fa-location-dot"></i> 123 Comic Street, NY</p>
                </div>
                <div className="footer-col-4">
                    <h3>Newsletter</h3>
                    <div className="newsletter-box" style={{ display: 'flex', gap: '10px' }}>
                        <input type="email" placeholder="Your email..." className="newsletter-input" />
                        <button className="btn-signup-red">Join Now</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p>© 2024 Comixs All Rights Reserved.</p>
                    <div className="social-links">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
