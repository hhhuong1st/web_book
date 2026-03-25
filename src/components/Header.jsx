import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        setCartCount(count);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsSticky(true);
            else setIsSticky(false);
        };
        window.addEventListener('scroll', handleScroll);

        updateCartCount();
        window.addEventListener('cartUpdated', updateCartCount);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('cartUpdated', updateCartCount);
        };
    }, []);

    const currentPath = location.pathname;
    const isHome = currentPath === '/';
    const isAbout = currentPath === '/about';

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
                    <img src="/assets/images/imgi_1_logo.png" style={{ height: '100px' }} alt="Logo" />
                </div>

                <div className="nav-center">
                    <nav className="nav-menu">
                        <ul>
                            <li><Link to="/" className={isHome ? "text-red" : ""}>Home</Link></li>
                            <li><Link to="/about" className={isAbout ? "text-red" : ""}>About</Link></li>
                            <li><Link to="/comics">Comics</Link></li>
                            <li><Link to="/blogs">Blogs <i className="fa-solid fa-chevron-down"></i></Link></li>
                            <li><Link to="/pages">Page <i className="fa-solid fa-chevron-down"></i></Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <button className="btn-buy-now">Buy Now</button>
                </div>

                <div className="nav-actions">
                    <button className="btn-login">Login</button>
                    <button className="btn-signup-red">Signup</button>
                    <Link to="/cart" style={{ color: 'inherit' }}>
                        <button style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', position: 'relative' }}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute', top: '-8px', right: '-10px', background: 'red', color: 'white',
                                    fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '50%'
                                }}>{cartCount}</span>
                            )}
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
