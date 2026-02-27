const { useState, useEffect } = React;

// --- COMPONENT PHẦN ĐẦU TRANG (HEADER) ---
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [cartCount, setCartCount] = useState(0);

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

    const currentPath = window.location.pathname;
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '' || currentPath.endsWith('web_book/');
    const isAbout = currentPath.endsWith('about.html');

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
                            <li><a href="index.html" className={isHome ? "text-red" : ""}>Home</a></li>
                            <li><a href="about.html" className={isAbout ? "text-red" : ""}>About</a></li>
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
                    <a href="cart.html" style={{ color: 'inherit' }}>
                        <button style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', position: 'relative' }}>
                            <i className="fa-solid fa-bag-shopping"></i>
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute', top: '-8px', right: '-10px', background: 'red', color: 'white',
                                    fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '50%'
                                }}>{cartCount}</span>
                            )}
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};


// --- COMPONENT PHẦN CHÂN TRANG (FOOTER) ---
const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Phân cách gợn sóng SVG */}
            <div className="footer-wave-svg">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {/* Gợn sóng màu vàng (Nền) - Nổi bật hơn ở bên trái */}
                    <path fill="#FACC15" fillOpacity="1" d="M0,60 C150,60 250,240 400,240 C560,240 720,220 880,190 C1040,160 1240,80 1400,70 L1440,60 L1440,320 L0,320 Z"></path>
                    {/* Gợn sóng màu đen (Tiền cảnh) */}
                    <path fill="#111" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>



            <div className="container relative z-10" style={{ position: 'relative', zIndex: 20 }}>
                {/* Phần trên cùng */}
                <div className="footer-top">
                    <div className="footer-logo">Comixs.</div>
                    <button className="btn-buy-now-footer">Buy Now</button>
                    <div className="footer-socials">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i> {/* Đã cập nhật thành icon X nếu có, ngược lại dùng Twitter */}
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

// --- HIỂN THỊ (RENDER) ---
const headerRootElement = document.getElementById('root-header');
if (headerRootElement) {
    const headerRoot = ReactDOM.createRoot(headerRootElement);
    headerRoot.render(<Header />);
}

const footerRootElement = document.getElementById('root-footer');
if (footerRootElement) {
    const footerRoot = ReactDOM.createRoot(footerRootElement);
    footerRoot.render(<Footer />);
}

// --- MẢNG DỮ LIỆU ---
const featuresData = [
    { id: 1, icon: "fa-solid fa-book-open text-red", title: "Read Books Online", desc: "Lorem ipsum dolor sit amet." },
    { id: 2, icon: "fa-solid fa-rotate-left text-red", title: "30 Days Return", desc: "Lorem ipsum dolor sit amet." },
    { id: 3, icon: "fa-solid fa-truck-fast text-red", title: "Free Shipping", desc: "Lorem ipsum dolor sit amet." },
    { id: 4, icon: "fa-solid fa-shield-halved text-red", title: "Secured Payment", desc: "Lorem ipsum dolor sit amet." }
];

const categoriesData = [
    { id: 1, image: "images/imgi_15_Anime0.png", title: "Manga" },
    { id: 2, image: "images/imgi_12_Love1.png", title: "Love" },
    { id: 3, image: "images/imgi_13_Comic3.png", title: "Comic" },
    { id: 4, image: "images/imgi_14_Arrivals4.png", title: "Arrivals" }
];

const testimonialsData = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", userImg: "https://randomuser.me/api/portraits/men/32.jpg", name: "Leslie Alexander", role: "Creative director, NBC" },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", userImg: "https://randomuser.me/api/portraits/men/45.jpg", name: "Jacob Jones", role: "Creative director, NBC" }
];

const brandsData = [
    { id: 1, image: "images/imgi_58_brand3.png", alt: "MAGICBOOK" },
    { id: 2, image: "images/imgi_59_brand4.png", alt: "RIMBERIO" },
    { id: 3, image: "images/imgi_60_brand5.png", alt: "BOOK STORY" },
    { id: 4, image: "images/imgi_61_brand6.png", alt: "Studio Publisher" }
];

// --- CÁC COMPONENT TỪNG PHẦN ---
const FeaturesSection = () => (
    <>
        {featuresData.map(f => (
            <div className="feature-box" key={f.id}>
                <i className={f.icon}></i>
                <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                </div>
            </div>
        ))}
    </>
);

const CategoriesSection = () => (
    <>
        {categoriesData.map(cat => (
            <div className="cat-card" key={cat.id}>
                <img src={cat.image} alt={cat.title} />
                <div className="cat-overlay">
                    <h3>{cat.title}</h3>
                </div>
            </div>
        ))}
    </>
);

const TestimonialsSection = () => (
    <>
        {testimonialsData.map(t => (
            <div className="testi-item" key={t.id}>
                <div className="bubble">{t.text}</div>
                <div className="user-info">
                    <img src={t.userImg} alt={t.name} />
                    <div><strong>{t.name}</strong><br /><small>{t.role}</small></div>
                </div>
            </div>
        ))}
    </>
);

const BrandsSection = () => (
    <>
        {brandsData.map(b => (
            <div className="brand-box" key={b.id}>
                <img src={b.image} alt={b.alt} />
            </div>
        ))}
    </>
);

// --- HIỂN THỊ CÁC COMPONENT TỪNG PHẦN ---
const rootFeatures = document.getElementById('root-features');
if (rootFeatures) ReactDOM.createRoot(rootFeatures).render(<FeaturesSection />);

const rootCategories = document.getElementById('root-categories');
if (rootCategories) ReactDOM.createRoot(rootCategories).render(<CategoriesSection />);

const rootTestimonials = document.getElementById('root-testimonials');
if (rootTestimonials) ReactDOM.createRoot(rootTestimonials).render(<TestimonialsSection />);

const rootBrands = document.getElementById('root-brands');
if (rootBrands) ReactDOM.createRoot(rootBrands).render(<BrandsSection />);
