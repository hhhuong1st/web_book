import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Phân cách gợn sóng SVG */}
            <div className="footer-wave-svg">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="#FACC15" fillOpacity={1} d="M0,60 C150,60 250,240 400,240 C560,240 720,220 880,190 C1040,160 1240,80 1400,70 L1440,60 L1440,320 L0,320 Z"></path>
                    <path fill="#111" fillOpacity={1} d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container relative z-10" style={{ position: 'relative', zIndex: 20 }}>
                {/* Phần trên cùng */}
                <div className="footer-top">
                    <div className="footer-logo">Comixs.</div>
                    <button className="btn-buy-now-footer">Buy Now</button>
                    <div className="footer-socials">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <hr className="footer-divider" />

                {/* Phần thông tin */}
                <div className="footer-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Email Id</span>
                            <span className="info-val">exmaple@gmail.com</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Phone</span>
                            <span className="info-val">(+33)7 35 55 31 15</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="info-text">
                            <span className="info-label">Address</span>
                            <span className="info-val">(6391 Elgin St. Celina, Delaware 10299</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần bản quyền */}
            <div className="footer-copyright">
                <div className="container">
                    Copyright © 2024 <span className="text-yellow">Comic Book Store Theme</span>. All Rights Reserved.
                </div>
                <button className="btn-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
