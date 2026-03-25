import React, { useState, useEffect } from 'react';

const ToastNotification = () => {
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const handleShowToast = (e) => {
            setToast(e.detail);
            setTimeout(() => setToast(null), 3000);
        };
        window.addEventListener('showToast', handleShowToast);
        return () => window.removeEventListener('showToast', handleShowToast);
    }, []);

    if (!toast) return null;

    return (
        <div className="toast-notification-bottom-right" style={{
            position: 'fixed', bottom: '20px', right: '20px', background: 'white', border: '2px solid #000',
            padding: '15px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', zIndex: 9999,
            display: 'flex', alignItems: 'center', gap: '15px'
        }}>
            <img src={toast.image} alt={toast.name} style={{ width: '40px', borderRadius: '4px' }} />
            <div>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '13px' }}>Added to Cart!</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{toast.name}</p>
            </div>
            <i className="fa-solid fa-circle-check" style={{ color: 'green', fontSize: '20px' }}></i>
        </div>
    );
};

export default ToastNotification;
