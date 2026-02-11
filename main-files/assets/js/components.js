const { useState, useEffect } = React;

// --- HEADER COMPONENT ---
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsSticky(true);
            else setIsSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
            <div className="top-banner">
                <div className="container">
                    <span className="banner-text">
                        Enjoy <span className="text-yellow">20% OFF</span> on This <span className="text-yellow">Premium Theme</span> & Also on <span className="text-yellow">Bundle of 100+ Themes</span>. Use Coupon Code "<span className="text-yellow">CLASSIC</span>"
                    </span>
                    <button className="btn-banner">Buy This Theme</button>
                    <button className="btn-banner">Buy Bundle(100+ Themes)</button>
                </div>
            </div>

            <div className="container header-inner">
                <div className="logo">
                    <img src="images/imgi_1_logo.png" style={{ height: '100px' }} alt="Logo" />
                </div>

                <div className="nav-center">
                    <nav className="nav-menu">
                        <ul>
                            <li><a href="#" className="text-red">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Blogs <i className="fa-solid fa-chevron-down"></i></a></li>
                            <li><a href="#">Page <i className="fa-solid fa-chevron-down"></i></a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <button className="btn-buy-now">Buy Now</button>
                </div>

                <div className="nav-actions">
                    <button className="btn-login">Login</button>
                    <button className="btn-signup-red">Signup</button>
                    <button style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

// --- FOOTER COMPONENT ---
// --- FOOTER COMPONENT ---
// --- FOOTER COMPONENT ---
const Footer = () => {
    return (
        <footer className="site-footer">
            {/* SVG Wave Separator */}
            <div className="footer-wave-svg">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {/* Yellow Wave (Background) - More prominent on left */}
                    <path fill="#FACC15" fillOpacity="1" d="M0,60 C150,60 250,240 400,240 C560,240 720,220 880,190 C1040,160 1240,80 1400,70 L1440,60 L1440,320 L0,320 Z"></path>
                    {/* Black Wave (Foreground) */}
                    <path fill="#111" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>

            {/* Character Image */}
            <div className="footer-character">
                <img src="images/imgi_65_footer-left-img.png" alt="Demon Character" />
            </div>

            <div className="container relative z-10" style={{ position: 'relative', zIndex: 20 }}>
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-logo">Comixs.</div>
                    <button className="btn-buy-now-footer">Buy Now</button>
                    <div className="footer-socials">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i> {/* Updated to X icon if available, else twitter */}
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <hr className="footer-divider" />

                {/* Info Section */}
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

            {/* Copyright Section */}
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

// --- RENDER ---
const headerRoot = ReactDOM.createRoot(document.getElementById('root-header'));
headerRoot.render(<Header />);

const footerRoot = ReactDOM.createRoot(document.getElementById('root-footer'));
footerRoot.render(<Footer />);