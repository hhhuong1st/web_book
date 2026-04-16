import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const handleUpdateQuantity = (id, change) => {
        dispatch(updateQuantity({ id, change }));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const shipping = cartItems.length > 0 ? (subtotal > 200 ? 0 : 25.0) : 0;
    const total = subtotal + shipping;

    return (
        <main className="cart-page-main">
            <div className="container cart-container">
                <div className="cart-grid-layout">
                    
                    {/* --- CỘT TRÁI: THÀNH PHẦN THANH TOÁN --- */}
                    <div className="checkout-left">
                        {/* Red Club Banner - Comic Style */}
                        <div className="checkout-banner">
                             <div className="offer-badge">OFFER!</div>
                            <div className="banner-title">Join the Comic Club Now!</div>
                            <div className="banner-sub">Get 15% voucher for your first order.</div>
                        </div>

                        <h2 className="section-heading">Shipping Info</h2>
                        
                        <div className="checkout-form-container">
                            <div className="form-grid-2-1">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <div className="select-wrapper">
                                        <select className="checkout-select">
                                            <option value="mr">Mr.</option>
                                            <option value="ms">Ms.</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your full name..." className="checkout-input" />
                                </div>
                            </div>
                            
                            <div className="form-grid-1-1">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="email@example.com" className="checkout-input" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" placeholder="0123 456 789" className="checkout-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Shipping Address</label>
                                <input type="text" placeholder="Street, Building, Apartment number..." className="checkout-input" />
                            </div>
                            <div className="form-group">
                                <label>Additional Note</label>
                                <textarea placeholder="Any special instructions for the courier?" className="checkout-textarea"></textarea>
                            </div>
                        </div>

                        <h2 className="section-heading" style={{ marginTop: '50px' }}>Payment</h2>
                        <div className="payment-methods">
                            <label className={`payment-option ${paymentMethod === 'momo' ? 'active' : ''}`} onClick={() => setPaymentMethod('momo')}>
                                <input type="radio" name="pay" checked={paymentMethod === 'momo'} readOnly />
                                <div className="payment-icon momo">M</div>
                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>MoMo Wallet</span>
                            </label>
                            
                            <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`} onClick={() => setPaymentMethod('cod')}>
                                <input type="radio" name="pay" checked={paymentMethod === 'cod'} readOnly />
                                <div className="payment-icon cod">
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    {/* --- CỘT PHẢI: CHI TIẾT ĐƠN HÀNG --- */}
                    <div className="checkout-summary-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h2 className="summary-title">Review Order</h2>
                        </div>

                        {/* Red Comic-Alert */}
                        <div className="comic-alert">
                            <span><i className="fa-solid fa-bolt"></i> BOOM! Free shipping over $200.00!</span>
                            <i className="fa-solid fa-xmark" style={{ cursor: 'pointer' }}></i>
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="text-center" style={{ padding: '40px 0' }}>
                                <p style={{ color: '#888', marginBottom: '20px' }}>No comics in your bag.</p>
                                <Link to="/" className="btn-buy-now-small" style={{ textDecoration: 'none' }}>Back to Shop</Link>
                            </div>
                        ) : (
                            <div className="cart-items-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item-row">
                                        <div className="cart-item-image-box">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="cart-item-details">
                                            <div>
                                                <div className="cart-item-header">
                                                    <h4>{item.name}</h4>
                                                    <button onClick={() => handleRemoveItem(item.id)} className="btn-remove-item"><i className="fa-solid fa-xmark"></i></button>
                                                </div>
                                                <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                            
                                            <div className="qty-control-badge">
                                                <button onClick={() => handleUpdateQuantity(item.id, -1)}>-</button>
                                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.quantity}</span>
                                                <button onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Order Summary Table */}
                                <div className="order-totals-box">
                                    <div className="total-line">
                                        <span className="label">Items Subtotal</span>
                                        <span className="value">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="total-line">
                                        <span className="label">Shipping Port</span>
                                        <span className="value">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="total-line final">
                                        <span>TOTAL</span>
                                        <span style={{ color: 'var(--primary-red)' }}>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- FIXED BOTTOM BAR: PLACE ORDER --- */}
            <div className="fixed-bottom-checkout">
                <div className="container bottom-bar-inner">
                    <div className="payment-summary-short">
                        <div className="method-badge">
                            <div className="method-icon" style={{ background: paymentMethod === 'momo' ? '#A50064' : '#000' }}>
                                {paymentMethod === 'momo' ? 'M' : <i className="fa-solid fa-money-bill-transfer" style={{ fontSize: '14px' }}></i>}
                            </div>
                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{paymentMethod === 'momo' ? 'Using MoMo' : 'Paying COD'}</span>
                        </div>
                        <div className="coupon-link"><i className="fa-solid fa-tag"></i> Have a coupon?</div>
                    </div>
                    <div className="total-summary-group">
                        <div className="total-display">
                            <div className="total-amount">${total.toFixed(2)}</div>
                            <div className="tax-note">Tax Included</div>
                        </div>
                        <button className="btn-place-order">
                            Place Order <i className="fa-solid fa-chevron-right" style={{ marginLeft: '10px' }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
