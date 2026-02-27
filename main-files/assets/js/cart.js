const { useState, useEffect } = React;

// --- HÀM THÊM VÀO GIỎ HÀNG (DÙNG CHUNG TOÀN TRANG) ---
window.addToCart = (product) => {
    // 1. Lấy dữ liệu giỏ hàng hiện tại từ Local Storage (nếu chưa có thì trả về mảng rỗng [])
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 2. Kiểm tra xem sản phẩm này đã từng được thêm vào giỏ hàng chưa (dựa theo ID)
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        // Nếu đã có trong giỏ -> Chỉ cần tăng số lượng lên 1
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        // Nếu chưa có -> Đẩy sản phẩm này vào mảng với số lượng mặc định là 1
        cart.push({ ...product, quantity: 1 });
    }

    // 3. Cập nhật lại giỏ hàng vào Local Storage để lưu trữ lâu dài
    localStorage.setItem('cart', JSON.stringify(cart));

    // 4. Báo hiệu cho React biết giỏ hàng đã thay đổi (để cập nhật con số trên thanh Menu)
    window.dispatchEvent(new Event('cartUpdated'));

    // Phát sự kiện CustomEvent để Component React Toast bắt lấy
    window.dispatchEvent(new CustomEvent('showToast', { detail: product }));
};

// --- COMPONENT THÔNG BÁO TOAST BẰNG REACT (THAY THẾ CHO ALERT LỖI THỜI) ---
const ToastNotification = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const handleShowToast = (e) => {
            const product = e.detail;
            const newToast = { id: Date.now() + Math.random(), product };

            // Xóa thông báo cũ (nếu muốn hiển thị gộp), ở đây ta cho phép hiện nhiều cái cùng lúc
            setToasts(prev => [...prev, newToast]);

            // Tự động tắt sau 3 giây
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== newToast.id));
            }, 3000);
        };

        window.addEventListener('showToast', handleShowToast);
        return () => window.removeEventListener('showToast', handleShowToast);
    }, []);

    if (toasts.length === 0) return null;

    return (
        <>
            <style>
                {`
                @keyframes slideUpToast {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                `}
            </style>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {toasts.map(t => (
                    <div key={t.id} style={{
                        background: '#D9001B', color: 'white', padding: '15px 25px', borderRadius: '5px',
                        boxShadow: '5px 5px 0px #000', fontFamily: 'var(--font-body)', border: '2px solid #000',
                        fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px',
                        animation: 'slideUpToast 0.3s ease-out forwards'
                    }}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>Added <strong>{t.product.name}</strong> to cart!</span>
                    </div>
                ))}
            </div>
        </>
    );
};

// Khởi tạo root mỏ neo trực tiếp trên JS để bám Toast vào
const toastRootElement = document.createElement('div');
toastRootElement.id = 'root-toast';
document.body.appendChild(toastRootElement);
ReactDOM.createRoot(toastRootElement).render(<ToastNotification />);

// --- COMPONENT TRANG QUẢN LÝ GIỎ HÀNG (SỬ DỤNG REACT JSX DỄ QUẢN LÝ) ---
const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    // Lấy dữ liệu giỏ hàng ngay khi vừa load xong Component
    useEffect(() => {
        loadCart();

        // Lắng nghe sự kiện để cập nhật giỏ hàng theo thời gian thực
        window.addEventListener('cartUpdated', loadCart);
        return () => window.removeEventListener('cartUpdated', loadCart);
    }, []);

    // Hàm lấy lại dữ liệu từ Local Storage
    const loadCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    };

    // Hàm tăng/giảm số lượng
    const updateQuantity = (id, change) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = (item.quantity || 1) + change;
                // Nếu newQuantity > 0 thì cập nhật, không thì giữ nguyên ít nhất là 1
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        });

        // Cập nhật State và Lưu vào Local Storage
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Hàm xóa hẳn sản phẩm khỏi giỏ hàng
    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Hàm Tính tổng số tiền (Subtotal) sử dụng hàm lặp của JS
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    return (
        <div className="container py-80" style={{ padding: '80px 15px', marginBottom: '80px' }}>
            {cartItems.length === 0 ? (
                // Giao diện khi GIỎ HÀNG TRỐNG
                <div className="text-center" style={{ margin: '100px 0' }}>
                    <i className="fa-solid fa-cart-shopping" style={{ fontSize: '70px', color: '#e0e0e0', marginBottom: '20px' }}></i>
                    <h2>Your cart is currently empty</h2>
                    <p style={{ color: '#666', marginTop: '10px' }}>You haven't added any comic books yet. Let's explore our store!</p>
                    <a href="index.html" style={{ display: 'inline-block', marginTop: '30px' }}>
                        <button className="btn-yellow-outline">Continue Shopping</button>
                    </a>
                </div>
            ) : (
                // Giao diện khi CÓ SẢN PHẨM Ở TRONG
                <div className="cart-grid">
                    <div className="cart-table-wrapper">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="cart-item-info">
                                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                                <span className="cart-item-name">{item.name}</span>
                                            </div>
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>
                                            <div className="cart-qty-controls">
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}><i className="fa-solid fa-minus" style={{ fontSize: '10px' }}></i></button>
                                                <span className="qty-val">{item.quantity || 1}</span>
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}><i className="fa-solid fa-plus" style={{ fontSize: '10px' }}></i></button>
                                            </div>
                                        </td>
                                        <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                                        <td>
                                            <button className="btn-remove" onClick={() => removeItem(item.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-summary">
                        <h3>Cart Summary</h3>
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span style={{ color: 'green' }}>Free</span>
                        </div>
                        <div className="summary-line total">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="btn-checkout">Proceed To Checkout <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i></button>
                        <a href="index.html" className="continue-shopping">Browse more products</a>
                    </div>
                </div>
            )}
        </div>
    );
};

// Hiển thị Component Giỏ hàng (Mã nguồn này sẽ chỉ render nếu trang hiện tại có thẻ id="root-cart")
const rootCart = document.getElementById('root-cart');
if (rootCart) {
    ReactDOM.createRoot(rootCart).render(<CartPage />);
}
