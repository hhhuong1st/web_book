import React from 'react';

// --- MẢNG DỮ LIỆU GỐC ---
const featuresData = [
    { id: 1, icon: "fa-solid fa-book-open text-red", title: "Read Books Online", desc: "Lorem ipsum dolor sit amet." },
    { id: 2, icon: "fa-solid fa-rotate-left text-red", title: "30 Days Return", desc: "Lorem ipsum dolor sit amet." },
    { id: 3, icon: "fa-solid fa-truck-fast text-red", title: "Free Shipping", desc: "Lorem ipsum dolor sit amet." },
    { id: 4, icon: "fa-solid fa-shield-halved text-red", title: "Secured Payment", desc: "Lorem ipsum dolor sit amet." }
];

const categoriesData = [
    { id: 1, image: "/src/assets/images/imgi_15_Anime0.png", title: "Manga" },
    { id: 2, image: "/src/assets/images/imgi_12_Love1.png", title: "Love" },
    { id: 3, image: "/src/assets/images/imgi_13_Comic3.png", title: "Comic" },
    { id: 4, image: "/src/assets/images/imgi_14_Arrivals4.png", title: "Arrivals" }
];

const testimonialsData = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", userImg: "https://randomuser.me/api/portraits/men/32.jpg", name: "Leslie Alexander", role: "Creative director, NBC" },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", userImg: "https://randomuser.me/api/portraits/men/45.jpg", name: "Jacob Jones", role: "Creative director, NBC" }
];

const brandsData = [
    { id: 1, image: "/src/assets/images/imgi_58_brand3.png", alt: "MAGICBOOK" },
    { id: 2, image: "/src/assets/images/imgi_59_brand4.png", alt: "RIMBERIO" },
    { id: 3, image: "/src/assets/images/imgi_60_brand5.png", alt: "BOOK STORY" },
    { id: 4, image: "/src/assets/images/imgi_61_brand6.png", alt: "Studio Publisher" }
];

// --- CÁC COMPONENT GỐC ---
export const FeaturesSection = () => (
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

export const CategoriesSection = () => (
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

export const TestimonialsSection = () => (
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

export const BrandsSection = () => (
    <>
        {brandsData.map(b => (
            <div className="brand-box" key={b.id}>
                <img src={b.image} alt={b.alt} />
            </div>
        ))}
    </>
);
