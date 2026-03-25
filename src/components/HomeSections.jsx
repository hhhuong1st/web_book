import React from 'react';

export const FeaturesSection = () => {
    const features = [
        { icon: "/assets/images/imgi_5_image.png", title: "Free Shipping", text: "Long established fact that a reader will be distracted." },
        { icon: "/assets/images/imgi_6_image.png", title: "Free Returns", text: "Long established fact that a reader will be distracted." },
        { icon: "/assets/images/imgi_5_image.png", title: "Secure Payment", text: "Long established fact that a reader will be distracted." },
        { icon: "/assets/images/imgi_6_image.png", title: "24/7 Support", text: "Long established fact that a reader will be distracted." },
    ];
    return (
        <div className="grid-4" style={{ backgroundColor: '#fff', borderRadius: '15px' }}>
            {features.map((f, i) => (
                <div key={i} className="feature-item">
                    <img src={f.icon} alt={f.title} />
                    <div className="feat-text">
                        <h3>{f.title}</h3>
                        <p>{f.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const CategoriesSection = () => {
    const categories = [
        { name: "Superhero", count: "112", icon: "/assets/images/imgi_2_category-image.png" },
        { name: "Action", count: "90", icon: "/assets/images/imgi_3_category-image.png" },
        { name: "Sci-Fi", count: "150", icon: "/assets/images/imgi_2_category-image.png" },
        { name: "Adventure", count: "80", icon: "/assets/images/imgi_3_category-image.png" },
    ];
    return (
        <>
            {categories.map((c, i) => (
                <div key={i} className="cat-item">
                    <div className="cat-icon-circle"><img src={c.icon} alt={c.name} /></div>
                    <h3>{c.name}</h3>
                    <p>{c.count} Plus Books</p>
                </div>
            ))}
        </>
    );
};

export const TestimonialsSection = () => {
    const testimonials = [
        { avatar: "/assets/images/imgi_46_community-member1.png", name: "David James", title: "CEO Admin", rating: "5.0", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
        { avatar: "/assets/images/imgi_47_community-member2.png", name: "Marry Jane", title: "Marketing", rating: "4.9", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    ];
    return (
        <>
            {testimonials.map((t, i) => (
                <div key={i} className="test-item">
                    <div className="test-header">
                        <img src={t.avatar} className="avatar" alt={t.name} />
                        <div className="test-meta">
                            <h4>{t.name}</h4>
                            <span>{t.title}</span>
                            <div className="rating"><i className="fa-solid fa-star"></i> {t.rating}</div>
                        </div>
                    </div>
                    <p className="test-text">"{t.text}"</p>
                </div>
            ))}
        </>
    );
};

export const BrandsSection = () => {
    const brands = [
        "/assets/images/imgi_52_image.png",
        "/assets/images/imgi_53_image.png",
        "/assets/images/imgi_54_image.png",
        "/assets/images/imgi_55_image.png",
    ];
    return (
        <>
            {brands.map((b, i) => (
                <div key={i} className="brand-logo"><img src={b} alt={`Brand ${i}`} /></div>
            ))}
        </>
    );
};
