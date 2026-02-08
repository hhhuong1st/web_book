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
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <h2 style={{ fontFamily: 'Bangers', fontSize: '2rem', marginBottom: '20px' }}>COMIXS STORE</h2>
                <div className="socials">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <p style={{ marginTop: '20px', opacity: 0.8 }}>&copy; 2024 Comixs. All rights reserved.</p>
            </div>
        </footer>
    );
};

// --- RENDER ---
const headerRoot = ReactDOM.createRoot(document.getElementById('root-header'));
headerRoot.render(<Header />);

const footerRoot = ReactDOM.createRoot(document.getElementById('root-footer'));
footerRoot.render(<Footer />);