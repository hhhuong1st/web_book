import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const handleUpdateQuantity = (id, change) => {
        dispatch(updateQuantity({ id, change }));
    };
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    return (
        <main className="cart-page-main">
            <section className="cart-banner">
                <div className="container">
                    <h1>Shopping Cart</h1>
                    <p>Home &gt; Shopping Cart</p>
                </div>
            </section>
            <div className="container py-80" style={{ padding: '80px 15px', marginBottom: '80px', minHeight: '600px' }}>
                {cartItems.length === 0 ? (
                    <div className="text-center" style={{ margin: '100px 0' }}>
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: '70px', color: '#e0e0e0', marginBottom: '20px' }}></i>
                        <h2>Your cart is currently empty</h2>
                        <Link to="/" style={{ display: 'inline-block', marginTop: '30px' }}>
                            <button className="btn-yellow-outline">Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <div className="cart-grid">
                        <div className="checkout-form-container" style={{ background: '#f9f9f9', padding: '30px', border: '2px solid #000', borderRadius: '8px' }}>
                            <h3>Shipping details</h3>
                            {/* Shortened for brevity in recovery, can be expanded later */}
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label>Full Name *</label>
                                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '10px', border: '2px solid #e0e0e0', borderRadius: '4px' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label>Address *</label>
                                <input type="text" placeholder="123 Comic Street, NY" style={{ width: '100%', padding: '10px', border: '2px solid #e0e0e0', borderRadius: '4px' }} />
                            </div>
                            <h3>Payment Method</h3>
                            <div className="payment-options">
                                <label><input type="radio" name="payment" defaultChecked /> COD</label>
                            </div>
                        </div>
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-products">
                                {cartItems.map(item => (
                                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px', background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto', borderRadius: '6px' }} />
                                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--primary-red)', color: 'white', fontSize: '12px', fontWeight: 'bold', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '2px solid #fff' }}>{item.quantity}</span>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontFamily: 'var(--font-heading)' }}>{item.name}</h4>
                                            <div style={{ fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <span style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleRemoveItem(item.id)}><i className="fa-solid fa-trash"></i></span>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <button onClick={() => handleUpdateQuantity(item.id, -1)} style={{ cursor: 'pointer', background: '#f0f0f0', border: 'none', width: '20px' }}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => handleUpdateQuantity(item.id, 1)} style={{ cursor: 'pointer', background: '#f0f0f0', border: 'none', width: '20px' }}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--primary-red)' }}>
                                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-line total">
                                <span>Total</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <button className="btn-checkout">Proceed To Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CartPage;
