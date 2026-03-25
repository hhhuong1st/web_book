import React from 'react';
import { FeaturesSection, CategoriesSection, TestimonialsSection, BrandsSection } from '../components/HomeSections';
import { FeaturedBooksSection, NewArrivalsSection, SuperheroSection, BlogsSection } from '../components/Products';

const Home = () => {
    return (
        <main>
            <section className="hero-section">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <span className="sub-title">Welcome to <span className="text-red">Comixs</span></span>
                        <h1>The Best Online <span className="text-red">Comic Store</span></h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        <div className="search-box">
                            <input type="text" placeholder="Search keyword..." />
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/assets/images/cacanhhung.png" alt="Heroes" />
                    </div>
                </div>
                <img src="/assets/images/khoi.png" className="cloud-img" alt="Clouds" />
            </section>

            <section className="features container" id="root-features">
                <FeaturesSection />
            </section>

            <section className="featured-books container section-spacing">
                <div className="section-title text-center">
                    <span className="text-red">Comic</span>
                    <h2>Featured Books</h2>
                </div>
                <div className="grid-4 mt-30" id="root-featured-products">
                    <FeaturedBooksSection />
                </div>
            </section>

            <section className="category-section">
                <img src="/assets/images/imgi_1_vector-image.png" className="scratch-top" alt="border" />
                <div className="bang-sticker">
                    <img src="/assets/images/imgi_19_image.png" alt="BANG!" />
                </div>

                <div className="container text-center relative z-10">
                    <div className="section-title text-white mb-40">
                        <span className="text-white small-title">Shop By</span>
                        <h2 className="big-title">Category</h2>
                    </div>

                    <div className="cat-grid" id="root-categories">
                        <CategoriesSection />
                    </div>
                </div>
                <img src="/assets/images/imgi_2_vector-image.png" className="scratch-bottom" alt="border" />
            </section>

            <section className="arrivals container section-spacing">
                <div className="section-title text-center mb-40">
                    <span className="text-red small-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>New</span>
                    <h2 className="big-title" style={{ color: '#000' }}>Arrivals</h2>
                </div>

                <div className="arrivals-grid">
                    <div className="arrival-left-img">
                        <img src="/assets/images/imgi_20_arrival-img.png" alt="New Arrival Girl" />
                    </div>

                    <div className="arrival-products" id="root-new-arrivals">
                        <NewArrivalsSection />
                    </div>
                </div>

                <div className="text-center mt-40">
                    <button className="btn-yellow-outline">View All Products</button>
                </div>
            </section>

            <section className="dark-series section-spacing">
                <img src="/assets/images/imgi_32_top-img.png" className="wow-sticker" alt="WOW!" />
                <img src="/assets/images/imgi_33_bottom-img.png" className="girl-sticker" alt="Girl with Megaphone" />
                <img src="/assets/images/imgi_3_vector-image.png" className="scratch-top" alt="border" />
                <div className="container relative z-10">
                    <div className="section-title text-center text-white">
                        <span>New</span>
                        <h2>Superhero Series</h2>
                    </div>
                    <div className="filter-buttons">
                        <button className="active">Upcoming</button>
                        <button>Weekly Best</button>
                        <button>Most Popular</button>
                    </div>
                    <div className="grid-4 mt-30" id="root-superhero-series">
                        <SuperheroSection />
                    </div>
                    <div className="text-center mt-30">
                        <button className="btn-superhero">See More Hero</button>
                    </div>
                </div>
                <img src="/assets/images/imgi_4_vector-image.png" className="scratch-bottom" alt="border" />
            </section>

            <section className="testimonials container section-spacing">
                <div className="section-title text-center">
                    <span className="text-red">Testimonial</span>
                    <h2>Few Word Form Our Community</h2>
                </div>
                <div className="grid-2" id="root-testimonials">
                    <TestimonialsSection />
                </div>

                <div className="cta-banner">
                    <img src="/assets/images/imgi_38_image.png" className="cta-img" alt="Mascot" />
                    <div className="cta-content text-center">
                        <h2>Want to readers and listeners see Your digital comics? Join this team!</h2>
                        <p className="text-white">We Strongly Believe That our team support & Drive You.</p>
                        <button className="btn-superhero">Join Now</button>
                    </div>
                </div>
            </section>

            <section className="blogs container section-spacing">
                <div className="section-title text-center">
                    <span className="text-red">Blogs</span>
                    <h2>Our Top Trendy Comic News</h2>
                    <hr />
                </div>
                <div className="blog-list" id="root-blogs">
                    <BlogsSection />
                </div>
                <div className="text-center" style={{ marginTop: '60px' }}>
                    <button className="btn-yellow-outline">Browse More</button>
                </div>
            </section>

            <section className="newsletter">
                <img src="/assets/images/imgi_3_vector-image.png" className="scratch-top" alt="border" />
                <div className="container text-center relative z-10">
                    <p className="newsletter-sub">You may unsubscribe at any moment</p>
                    <h2 className="text-yellow">Get your Need on By Subscribing our Newsletter</h2>
                    <button className="btn-superhero">See All Post</button>
                    <div className="hero-group">
                        <img src="/assets/images/imgi_52_bg-bottom-img.png" alt="Justice League" />
                    </div>
                    <div className="pow-badge">POW!</div>
                </div>
                <img src="/assets/images/imgi_4_vector-image.png" className="scratch-bottom" alt="border" />
            </section>

            <section className="brands container section-spacing text-center">
                <div className="section-title text-center">
                    <span className="text-red" style={{ textTransform: 'uppercase' }}>Our</span>
                    <h2 style={{ color: '#000' }}>Brands</h2>
                </div>
                <div className="grid-4 mt-30" id="root-brands">
                    <BrandsSection />
                </div>
            </section>
        </main>
    );
};

export default Home;
