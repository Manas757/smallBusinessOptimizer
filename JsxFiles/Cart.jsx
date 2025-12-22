import React, {useState} from "react";
import { ShoppingBag, Package, Truck, MapPin, Clock, Check, ChevronRight, Trash2, Heart } from 'lucide-react';
import '../CSS/Cart.css'
const OrderCheckoutPage= ()=>{
    const[orders]=useState([
        {
           id: 1,
      name: 'Wireless Noise Cancelling Headphones',
      sku: 'SKU: 1',
      price: 99.99,
      originalPrice: 129.99,
      image: '🎧',
      status: 'delivered'
    },
    {
      id: 2,
      name: 'SmartWatch with Heart Rate Monitor',
      sku: 'SKU: 2',
      price: 199.99,
      originalPrice: 249.99,
      image: '⌚',
      status: 'processing'
    },
    {
      id: 3,
      name: 'Set of Ceramic Coffee Mugs',
      sku: 'SKU: 3',
      price: 24.99,
      originalPrice: null,
      image: '☕',
      status: 'shipped'
    } 
        
    ]);


const [trackingSteps]= useState([
    { id: 1, title: 'Order Placed', date: 'October 24, 2025', status: 'completed', icon: Check },
    { id: 2, title: 'Processing Order', date: 'October 27, 2025', status: 'completed', icon: Check },
    { id: 3, title: 'Shipped from Warehouse', date: 'October 29, 2025', status: 'completed', icon: Check },
    { id: 4, title: 'Out for Delivery', date: 'October 30, 2025', status: 'current', icon: Truck },
    { id: 5, title: 'Estimated Delivery: Oct 31, 2025', date: '10:00 AM - 1:00 PM', status: 'pending', icon: Clock }
]);

const [wishlist]= useState([
        { id: 1, name: 'Ergonomic Standing Desk', price: 299.99, image: '🪑' },
    { id: 2, name: 'Portable Bluetooth Speaker', price: 79.99, image: '🔊' },
    { id: 3, name: 'Genuine Leather Wallet', price: 45.00, image: '👛' },
    { id: 4, name: 'Noise Cancelling Earbuds', price: 149.99, image: '🎧' }
]);

const subtotal = orders.reduce((sum,order)=> sum + order.price,0);
const shipping = 5.00
const tax = 8.14
const total = subtotal + shipping + tax;

return(
    <div className="checkout_container">
        <div className="main-layout">
            <aside className="order-summary">
                <h2>Order Summary</h2>
                <div className="summary-details">
                    <div className="summary-row">
                        <span>SubTotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Order Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                <button className="checkout-btn">
                    Proceed to Checkout
                </button>
            </aside>

            <main className="main-content">
                {/* Your Orders Section */}
          <section className="section">
            <h2 className="section-title">Your Orders</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-image">
                    <span className="product-emoji">{order.image}</span>
                  </div>
                  <div className="order-info">
                    <h3>{order.name}</h3>
                    <p className="sku">{order.sku}</p>
                    <div className="price-section">
                      {order.originalPrice && (
                        <span className="original-price">${order.originalPrice}</span>
                      )}
                      <span className="current-price">${order.price}</span>
                    </div>
                    {order.status === 'delivered' && (
                      <span className="status-badge delivered">Delivered</span>
                    )}
                  </div>
                  <button className="arrow-btn">
                    <ChevronRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Order Tracking</h2>
            <div className="tracking-container">
                {trackingSteps.map((step,index)=>{
                    const Icon = step.icon;
                    return(
                        <div key={step.id} className={`tracking-step ${step.status}`}>
                            <div className="step-icon-wrapper">
                                <div className="step-icon">
                                    <Icon size={20}/>
                     </div>
                      {index < trackingSteps.length - 1 && (
                        <div className="step-line"></div>
                      )}
                    </div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
           <section className="section">
            <h2 className="section-title">Your Wishlist</h2>
            <div className="wishlist-grid">
              {wishlist.map(item => (
                <div key={item.id} className="wishlist-card">
                  <div className="wishlist-image">
                    <span className="wishlist-emoji">{item.image}</span>
                    <button className="heart-btn">
                      <Heart size={18} fill="#ef4444" color="#ef4444" />
                    </button>
                  </div>
                  <div className="wishlist-info">
                    <h3>{item.name}</h3>
                    <p className="wishlist-price">${item.price}</p>
                    <button className="browse-btn">Browse</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        </div>
    </div>
);
};

export default OrderCheckoutPage;
