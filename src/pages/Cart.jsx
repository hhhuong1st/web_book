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
        <main style={{ backgroundColor: '#f1ebe6', minHeight: '100vh', paddingBottom: '120px' }}>
            <div className="container" style={{ paddingTop: '50px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
                    
                    {/* --- CỘT TRÁI: THÀNH PHẦN THANH TOÁN --- */}
                    <div className="checkout-left">
                        {/* Red Club Banner - Comic Style */}
                        <div style={{ 
                            backgroundColor: 'var(--primary-red)', 
                            color: '#fff', 
                            padding: '15px 25px', 
                            borderRadius: '15px', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            marginBottom: '40px', 
                            boxShadow: '4px 4px 0 #000',
                            border: '2px solid #000',
                            position: 'relative'
                        }}>
                             <div style={{ position: 'absolute', top: '-15px', left: '-10px', background: '#FACC15', color: '#000', padding: '2px 10px', fontSize: '10px', fontWeight: 'bold', border: '1px solid #000', transform: 'rotate(-5deg)' }}>OFFER!</div>
                            <div style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', fontFamily: 'var(--font-heading)' }}>Join the Comic Club Now!</div>
                            <div style={{ fontSize: '13px' }}>Get 15% voucher for your first order.</div>
                        </div>

                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', marginBottom: '30px', color: '#000' }}>Shipping Info</h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', background: '#fff', padding: '40px', borderRadius: '20px', border: '2px solid #000', boxShadow: '6px 6px 0 rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                                <div>
                                    <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Gender</label>
                                    <div style={{ position: 'relative' }}>
                                        <select style={{ 
                                            width: '100%', 
                                            padding: '14px 20px', 
                                            borderRadius: '50px', 
                                            border: '2px solid #000', 
                                            background: '#fff',
                                            fontSize: '15px',
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            outline: 'none',
                                            transition: '0.3s'
                                        }}>
                                            <option value="mr">Mr.</option>
                                            <option value="ms">Ms.</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '12px' }}></i>
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Full Name</label>
                                    <input type="text" placeholder="Your full name..." style={{ width: '100%', padding: '14px 25px', borderRadius: '50px', border: '2px solid #000', fontSize: '15px', outline: 'none' }} />
                                </div>
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Email Address</label>
                                    <input type="email" placeholder="email@example.com" style={{ width: '100%', padding: '14px 25px', borderRadius: '50px', border: '2px solid #000', fontSize: '15px', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Phone</label>
                                    <input type="text" placeholder="0123 456 789" style={{ width: '100%', padding: '14px 25px', borderRadius: '50px', border: '2px solid #000', fontSize: '15px', outline: 'none' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Shipping Address</label>
                                <input type="text" placeholder="Street, Building, Apartment number..." style={{ width: '100%', padding: '14px 25px', borderRadius: '50px', border: '2px solid #000', fontSize: '15px', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Additional Note</label>
                                <textarea placeholder="Any special instructions for the courier?" style={{ width: '100%', padding: '20px 25px', borderRadius: '20px', border: '2px solid #000', minHeight: '100px', fontSize: '15px', outline: 'none', resize: 'vertical' }}></textarea>
                            </div>
                        </div>

                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', margin: '50px 0 30px 0', color: '#000' }}>Payment</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                padding: '18px 30px', 
                                borderRadius: '50px', 
                                border: paymentMethod === 'momo' ? '2px solid var(--primary-red)' : '2px solid #000', 
                                cursor: 'pointer', 
                                background: paymentMethod === 'momo' ? '#fff5f5' : '#fff',
                                boxShadow: paymentMethod === 'momo' ? '4px 4px 0 var(--primary-red)' : '4px 4px 0 #000',
                                transition: 'all 0.2s'
                            }} onClick={() => setPaymentMethod('momo')}>
                                <input type="radio" name="pay" checked={paymentMethod === 'momo'} readOnly style={{ accentColor: 'var(--primary-red)', transform: 'scale(1.2)' }} />
                                <div style={{ width: '32px', height: '32px', background: '#A50064', borderRadius: '6px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '12px' }}>M</div>
                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>MoMo Wallet</span>
                            </label>
                            
                            <label style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px', 
                                padding: '18px 30px', 
                                borderRadius: '50px', 
                                border: paymentMethod === 'cod' ? '2px solid var(--primary-red)' : '2px solid #000', 
                                cursor: 'pointer', 
                                background: paymentMethod === 'cod' ? '#fff5f5' : '#fff',
                                boxShadow: paymentMethod === 'cod' ? '4px 4px 0 var(--primary-red)' : '4px 4px 0 #000',
                                transition: 'all 0.2s'
                            }} onClick={() => setPaymentMethod('cod')}>
                                <input type="radio" name="pay" checked={paymentMethod === 'cod'} readOnly style={{ accentColor: 'var(--primary-red)', transform: 'scale(1.2)' }} />
                                <div style={{ width: '32px', height: '32px', background: '#eee', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    {/* --- CỘT PHẢI: CHI TIẾT ĐƠN HÀNG --- */}
                    <div className="checkout-right" style={{ background: '#fff', padding: '40px', borderRadius: '30px', border: '2px solid #000', alignSelf: 'start', position: 'sticky', top: '100px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', margin: 0 }}>Review Order</h2>
                        </div>

                        {/* Red Comic-Alert */}
                        <div style={{ 
                            backgroundColor: 'var(--accent-yellow)', 
                            color: '#000', 
                            padding: '15px 20px', 
                            borderRadius: '10px', 
                            fontSize: '14px', 
                            marginBottom: '30px', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            border: '2px solid #000',
                            fontWeight: 'bold'
                        }}>
                            <span><i className="fa-solid fa-bolt"></i> BOOM! Free shipping over $200.00!</span>
                            <i className="fa-solid fa-xmark" style={{ cursor: 'pointer' }}></i>
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="text-center" style={{ padding: '40px 0' }}>
                                <p style={{ color: '#888', marginBottom: '20px' }}>No comics in your bag.</p>
                                <Link to="/" className="btn-buy-now-small" style={{ textDecoration: 'none' }}>Back to Shop</Link>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                {cartItems.map(item => (
                                    <div key={item.id} style={{ display: 'flex', gap: '25px', paddingBottom: '25px', borderBottom: '1px solid #f0f0f0' }}>
                                        <div style={{ width: '100px', height: '140px', borderRadius: '10px', overflow: 'hidden', border: '2px solid #000', flexShrink: 0 }}>
                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                    <h4 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>{item.name}</h4>
                                                    <button onClick={() => handleRemoveItem(item.id)} style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '18px' }}><i className="fa-solid fa-xmark"></i></button>
                                                </div>
                                                <div style={{ fontWeight: 'bold', fontSize: '20px', color: 'var(--primary-red)', marginTop: '5px' }}>${(item.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #000', borderRadius: '50px', padding: '4px 15px', gap: '15px', width: 'fit-content', background: '#fff' }}>
                                                <button onClick={() => handleUpdateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>-</button>
                                                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.quantity}</span>
                                                <button onClick={() => handleUpdateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Order Summary Table */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px', background: '#f9f9f9', padding: '25px', borderRadius: '20px', border: '1px solid #eee' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#666' }}>Items Subtotal</span>
                                        <span style={{ fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#666' }}>Shipping Port</span>
                                        <span style={{ fontWeight: 'bold' }}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '26px', fontWeight: 'bold', borderTop: '2.5px solid #000', paddingTop: '15px', marginTop: '5px' }}>
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
            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#fff', borderTop: '4px solid #000', padding: '20px 0', zIndex: 1000, boxShadow: '0 -15px 40px rgba(0,0,0,0.1)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '30px', height: '30px', background: paymentMethod === 'momo' ? '#A50064' : '#000', borderRadius: '8px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {paymentMethod === 'momo' ? 'M' : <i className="fa-solid fa-money-bill-transfer" style={{ fontSize: '14px' }}></i>}
                            </div>
                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{paymentMethod === 'momo' ? 'Using MoMo' : 'Paying COD'}</span>
                        </div>
                        <div style={{ color: '#888', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}><i className="fa-solid fa-tag"></i> Have a coupon?</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--primary-red)', lineHeight: '1' }}>${total.toFixed(2)}</div>
                            <div style={{ fontSize: '11px', color: '#888', fontWeight: 'bold', textTransform: 'uppercase' }}>Tax Included</div>
                        </div>
                        <button style={{ backgroundColor: 'var(--primary-red)', color: '#fff', padding: '20px 70px', border: '3px solid #000', borderRadius: '60px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', boxShadow: '5px 5px 0 #000', transition: '0.2s' }}>
                            Place Order <i className="fa-solid fa-chevron-right" style={{ marginLeft: '10px' }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
