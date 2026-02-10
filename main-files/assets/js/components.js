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
            <div className="footer-wave"></div>

            {/* Character Image - Moved outside container for better positioning */}
            <div className="footer-character">
                <img src="images/imgi_65_footer-left-img.png" alt="Demon Character" />
            </div>

            <div className="container relative text-center" style={{ position: 'relative', zIndex: '10' }}>

                {/* Top Section: Logo, Button, Socials */}
                <div className="footer-top">
                    <div className="footer-logo">Comixs.</div>
                    <button className="btn-buy-now">Buy Now</button>
                    <div className="footer-socials">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>

                <hr className="footer-divider" />

                {/* Middle Section: Contact Info */}
                <div className="footer-info">
                    <div className="info-item">
                        <i className="fa-regular fa-envelope text-yellow"></i>
                        <div className="text-left">
                            <span className="info-label text-yellow">Email Id</span>
                            <span className="info-val">exmaple@gmail.com</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-phone text-yellow"></i>
                        <div className="text-left">
                            <span className="info-label text-yellow">Phone</span>
                            <span className="info-val">(+33)7 35 55 31 15</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-location-dot text-yellow"></i>
                        <div className="text-left">
                            <span className="info-label text-yellow">Address</span>
                            <span className="info-val">(6391 Elgin St. Celina, Delaware 10299</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright - Moved outside container */}
            <div className="footer-copyright">
                <div className="container">
                    Copyright © 2024 <span className="text-yellow">Comic Book Store Theme</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

// --- RENDER ---
const headerRoot = ReactDOM.createRoot(document.getElementById('root-header'));
headerRoot.render(<Header />);

const footerRoot = ReactDOM.createRoot(document.getElementById('root-footer'));
footerRoot.render(<Footer />);