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
                <button className="btn-add-cart-small">Add to Cart</button>
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
                <button className="btn-add-cart">Add To Cart</button>
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

// Render New Arrivals
const rootArrivals = document.getElementById('root-new-arrivals');
if (rootArrivals) {
    ReactDOM.createRoot(rootArrivals).render(<NewArrivalsSection />);
}