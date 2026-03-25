import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, change) => {
        dispatch(updateQuantity({ id, change }));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shipping = cartItems.length > 0 ? 5.00 : 0;
    const total = subtotal + shipping;

    return (
        <main className="cart-page-main">
            {/* Banner */}
            <section className="cart-banner">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <p>Home &gt; Shopping Cart</p>
                </div>
            </section>

            <div className="container" style={{ padding: '80px 15px', minHeight: '600px' }}>
                {cartItems.length === 0 ? (
                    <div className="text-center" style={{ margin: '100px 0' }}>
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: '70px', color: '#e0e0e0', marginBottom: '20px' }}></i>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px' }}>Your cart is currently empty</h2>
                        <p style={{ color: '#666', marginBottom: '30px' }}>Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/">
                            <button className="btn-yellow-outline">Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <div className="cart-grid">
                        {/* Table Area */}
                        <div className="cart-table-wrapper">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
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
                                                    <button className="qty-btn" onClick={() => handleUpdateQuantity(item.id, -1)}>-</button>
                                                    <span className="qty-val">{item.quantity}</span>
                                                    <button className="qty-btn" onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
                                                </div>
                                            </td>
                                            <td style={{ fontWeight: 'bold' }}>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                                            <td>
                                                <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                                                    <i className="fa-regular fa-trash-can"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Area */}
                        <aside className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-line">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-line">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="summary-line" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                                <span>Estimate Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="summary-line total">
                                <span>Total Price</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="btn-checkout">Proceed to Checkout</button>
                            <Link to="/" className="continue-shopping">Continue Shopping</Link>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CartPage;
