// 1. DỮ LIỆU SẢN PHẨM & COMPONENT CON (Giữ nguyên như cũ)
const productsData = [
    { id: 1, name: "Ultimate Spiderman", image: "images/imgi_7_Ultimate-Spiderman-1.png", price: 25.00, oldPrice: 30.00, quantity: 1, category: "Featured Books" },
    { id: 2, name: "Nova Nexus", image: "images/imgi_8_NOVA-NEXUS.png", price: 22.00, oldPrice: 28.00, quantity: 2, category: "Featured Books" },
    { id: 3, name: "Red Squad IV", image: "images/imgi_9_RED-SQUAD-IV.png", price: 20.00, oldPrice: 25.00, quantity: 1, category: "Featured Books" },
    { id: 4, name: "Super Knight", image: "images/imgi_10_SUPER-KNIGHT.png", price: 28.00, oldPrice: 35.00, quantity: 1, category: "Featured Books" },
    { id: 5, name: "The Villain 4", image: "images/imgi_21_The-Villain-4.png", price: 30.50, oldPrice: 31.50, category: "New Arrivals" },
    { id: 6, name: "The Villain 3", image: "images/imgi_22_The-Villain-3.png", price: 30.50, oldPrice: 31.50, category: "New Arrivals" },
    { id: 7, name: "The Villain 2", image: "images/imgi_23_The-Villain-2.png", price: 30.50, oldPrice: 31.50, category: "New Arrivals" },
    { id: 8, name: "The Villain 1", image: "images/imgi_24_The-Villain-1.png", price: 30.50, oldPrice: 31.50, category: "New Arrivals" },
    { id: 9, name: "Batman Wayne", image: "images/imgi_76_Batman-Wayne-240x300.png", price: 30.50, category: "Superhero" },
    { id: 10, name: "Figures Statues", image: "images/imgi_77_Figures-Statues-240x300.png", price: 30.50, category: "Superhero" },
    { id: 11, name: "Dragon Ball Z", image: "images/imgi_78_Dragon-Ball-Z-240x300.png", price: 30.50, category: "Superhero" },
    { id: 12, name: "Ultimate Spider", image: "images/imgi_79_Ultimate-Spiderman-240x300.png", price: 30.50, category: "Superhero" },
    { id: 13, num: "01", image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=500", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
    { id: 14, num: "02", image: "https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=500", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
    { id: 15, num: "03", image: "images/imgi_51_How-Comics-Create-Immersive-Great-Narratives1-1.png", subtitle: "The Art of Comictelling:", title1: "How Comics Create", title2: "Immersive Great Narratives", shares: "0", category: "Blogs" },
];

const ProductCard = ({ product, index }) => (
    <div className="feat-card">
        <div className="feat-img"><img src={product.image} alt={product.name} /></div>
        <div className="feat-body">
            <h3 className={index === 0 ? "text-red" : ""}>{product.name.toUpperCase()}</h3>
            <div className="feat-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.oldPrice && <del className="old-price">${product.oldPrice.toFixed(2)}</del>}
            </div>
            <div className="feat-btns">
                <button className="btn-add-cart-small" onClick={() => window.addToCart(product)}>Add to Cart</button>
                <button className="btn-buy-now-small">Buy Now</button>
            </div>
        </div>
    </div>
);

const NewArrivalCard = ({ product }) => (
    <div className="product-card">
        <div className="prod-img"><img src={product.image} alt={product.name} /></div>
        <div className="prod-info">
            <h3>{product.name}</h3>
            <div className="price-row">
                <span className="price-red">${product.price.toFixed(2)}</span>
                <button className="btn-add-cart" onClick={() => window.addToCart(product)}>Add To Cart</button>
            </div>
        </div>
    </div>
);

const FeaturedBooksSection = () => {
    return (
        <>
            {productsData.filter(p => p.category === "Featured Books").slice(0, 4)
                .map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </>
    );
};

const NewArrivalsSection = () => {
    return (
        <>
            {productsData.filter(p => p.category === "New Arrivals").slice(0, 4)
                .map(p => <NewArrivalCard key={p.id} product={p} />)}
        </>
    );
};

const rootFeatured = document.getElementById('root-featured-products');
if (rootFeatured) {
    ReactDOM.createRoot(rootFeatured).render(<FeaturedBooksSection />);
}

// Hiển thị phần Truyện Mới
const rootArrivals = document.getElementById('root-new-arrivals');
if (rootArrivals) {
    ReactDOM.createRoot(rootArrivals).render(<NewArrivalsSection />);
}

const SuperheroCard = ({ product }) => (
    <div className="dark-card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
            <h4>{product.name}</h4>
            <span>${product.price.toFixed(2)}</span>
        </div>
    </div>
);

const BlogCard = ({ blog }) => (
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

const SuperheroSection = () => (
    <>
        {productsData.filter(p => p.category === "Superhero").map(p => <SuperheroCard key={p.id} product={p} />)}
    </>
);

const BlogsSection = () => (
    <>
        {productsData.filter(p => p.category === "Blogs").map(b => <BlogCard key={b.id} blog={b} />)}
    </>
);

const rootSuperhero = document.getElementById('root-superhero-series');
if (rootSuperhero) {
    ReactDOM.createRoot(rootSuperhero).render(<SuperheroSection />);
}

const rootBlogs = document.getElementById('root-blogs');
if (rootBlogs) {
    ReactDOM.createRoot(rootBlogs).render(<BlogsSection />);
}