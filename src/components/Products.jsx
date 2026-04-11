import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const productsData = [
    { id: 1, name: "Ultimate Spiderman", image: "/src/assets/images/imgi_7_Ultimate-Spiderman-1.png", price: 25.0, oldPrice: 30.0, category: "Featured Books" },
    { id: 2, name: "Nova Nexus", image: "/src/assets/images/imgi_8_NOVA-NEXUS.png", price: 22.0, oldPrice: 28.0, category: "Featured Books" },
    { id: 3, name: "Red Squad IV", image: "/src/assets/images/imgi_9_RED-SQUAD-IV.png", price: 20.0, oldPrice: 25.0, category: "Featured Books" },
    { id: 4, name: "Super Knight", image: "/src/assets/images/imgi_10_SUPER-KNIGHT.png", price: 28.0, oldPrice: 35.0, category: "Featured Books" },
    { id: 5, name: "The Villain 4", image: "/src/assets/images/imgi_21_The-Villain-4.png", price: 30.5, oldPrice: 31.5, category: "New Arrivals" },
    { id: 6, name: "The Villain 3", image: "/src/assets/images/imgi_22_The-Villain-3.png", price: 30.5, oldPrice: 31.5, category: "New Arrivals" },
    { id: 7, name: "The Villain 2", image: "/src/assets/images/imgi_23_The-Villain-2.png", price: 30.5, oldPrice: 31.5, category: "New Arrivals" },
    { id: 8, name: "The Villain 1", image: "/src/assets/images/imgi_24_The-Villain-1.png", price: 30.5, oldPrice: 31.5, category: "New Arrivals" },
    { id: 9, name: "Batman Wayne", image: "/src/assets/images/imgi_76_Batman-Wayne-240x300.png", price: 30.5, category: "Superhero" },
    { id: 10, name: "Figures Statues", image: "/src/assets/images/imgi_77_Figures-Statues-240x300.png", price: 30.5, category: "Superhero" },
    { id: 11, name: "Dragon Ball Z", image: "/src/assets/images/imgi_78_Dragon-Ball-Z-240x300.png", price: 30.5, category: "Superhero" },
    { id: 12, name: "Ultimate Spider", image: "/src/assets/images/imgi_79_Ultimate-Spiderman-240x300.png", price: 30.5, category: "Superhero" },
    { id: 13, num: "01", image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=500", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
    { id: 14, num: "02", image: "https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=500", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
    { id: 15, num: "03", image: "/src/assets/images/imgi_51_How-Comics-Create-Immersive-Great-Narratives1-1.png", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
];

export const ProductCard = ({ product, index }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = () => {
        dispatch(addToCart(product));
        window.dispatchEvent(new CustomEvent('showToast', { detail: product }));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    const handleBuyNow = () => {
        dispatch(addToCart(product));
        window.dispatchEvent(new Event('cartUpdated'));
        navigate('/cart');
    };
    return (
        <div className="feat-card">
            <div className="feat-img"><img src={product.image} alt={product.name} /></div>
            <div className="feat-body">
                <h3 className={index === 0 ? "text-red" : ""}>{product.name.toUpperCase()}</h3>
                <div className="feat-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <del className="old-price">${product.oldPrice.toFixed(2)}</del>}
                </div>
                <div className="feat-btns">
                    <button className="btn-add-cart-small" onClick={handleAdd}>Add to Cart</button>
                    <button className="btn-buy-now-small" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export const NewArrivalCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addToCart(product));
        window.dispatchEvent(new CustomEvent('showToast', { detail: product }));
        window.dispatchEvent(new Event('cartUpdated'));
    };
    return (
        <div className="product-card">
            <div className="prod-img"><img src={product.image} alt={product.name} /></div>
            <div className="prod-info">
                <h3>{product.name}</h3>
                <div className="price-row">
                    <span className="price-red">${product.price.toFixed(2)}</span>
                    <button className="btn-add-cart" onClick={handleAdd}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export const SuperheroCard = ({ product }) => (
    <div className="dark-card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
            <h4>{product.name}</h4>
            <span>${product.price.toFixed(2)}</span>
        </div>
    </div>
);

export const BlogCard = ({ blog }) => (
    <div className="blog-item">
        <div className="blog-num">{blog.num}</div>
        <div className="blog-img">
            <img src={blog.image} alt={`Blog ${blog.id}`} />
        </div>
        <div className="blog-info">
            <div className="blog-meta">
                <span><i className="fa-regular fa-comment"></i> Comments</span>
                <span><i className="fa-solid fa-share"></i> {blog.shares} Share</span>
            </div>
            <h5 className="blog-subtitle">{blog.subtitle}</h5>
            <h3 className="blog-title">{blog.title1}<br />{blog.title2}</h3>
            <a href="#" className="btn-arrow-circle"><i className="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
);

export const FeaturedBooksSection = () => (
    <>
        {productsData.filter(p => p.category === "Featured Books").slice(0, 4)
            .map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
    </>
);

export const NewArrivalsSection = () => (
    <>
        {productsData.filter(p => p.category === "New Arrivals").slice(0, 4)
            .map(p => <NewArrivalCard key={p.id} product={p} />)}
    </>
);

export const SuperheroSection = () => (
    <>
        {productsData.filter(p => p.category === "Superhero").map(p => <SuperheroCard key={p.id} product={p} />)}
    </>
);

export const BlogsSection = () => (
    <>
        {productsData.filter(p => p.category === "Blogs").map(b => <BlogCard key={b.id} blog={b} />)}
    </>
);
