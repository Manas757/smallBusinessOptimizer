import React, {useState} from 'react';
import { ShoppingCart, User, Search, Zap, Package, Tag, UserCheck, Laptop, Shirt, Home as HomeIcon, Palette } from 'lucide-react';
import '../CSS/Home.css'; 
import SearchResults from './SearchResults';
import Categories from "./Categories"
import SmallBizProfile from './BsProfile'
const PRODUCTS = [
  { id: 1, title: 'Handmade Lavender Soap', store: 'EcoCraft', price: '8.50', color: '#5c4033' },
  { id: 2, title: 'Ceramic Mug', store: 'Pottery Haven', price: '22.00', color: '#2f4f4f' },
  { id: 3, title: 'Wildflower Honey', store: 'Golden Bloom', price: '15.99', color: '#8b4513' },
  { id: 4, title: 'Soy Wax Candle', store: 'Serenity Scents', price: '18.00', color: '#4a4a4a' },
];
const CATEGORIES = [
  { id: 1, name: 'Electronics', icon: <Laptop size={32} /> },
  { id: 2, name: 'Apparel', icon: <Shirt size={32} /> },
  { id: 3, name: 'Home Goods', icon: <HomeIcon size={32} /> },
  { id: 4, name: 'Handmade Crafts', icon: <Palette size={32} /> },
];
const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
  <div className='app-container'>
    <nav className="navbar">
      <div className="navbar-content">
        <div className="nav-left">
          <div className="nav-logo" onClick={() => setCurrentPage('home')}>
            <div className="logo-box">
              <Zap color="white" size={18} />
            </div>
            <span className="logo-text">SmallBiz Cart</span>
          </div>
          <div className="nav-links">
            {['Categories', 'Reels'].map((item) => (
              <button key={item} className='nav-link' onClick={()=>setCurrentPage(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="search-container-desktop">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for products or stores..."
              className="search-input"
              onFocus={() => setCurrentPage('search')}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentPage('search')}
            />
            <Search className="search-icon" size={20} />
          </div>
        </div>
        <div className="nav-right">
          <button type="button" className="icon-btn" aria-label="notifications">🔔</button>
          <button type="button" className="icon-btn" aria-label="cart">🛒</button>
          <button className='Sign-in-btn'>
          <h4>Sign In</h4>
          </button>
          <button className='role-btn' onClick={()=>setCurrentPage('profile')}>
            <img
              src="https://placehold.co/40x40/60A5FA/ffffff?text=U"
              alt="User Profile"
              className="user-profile"/>
          </button>
          
        </div>
      </div>
      <div className="mobile-search-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            onFocus={() => setCurrentPage('search')}
            onKeyDown={(e) => e.key === 'Enter' && setCurrentPage('search')}
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>
    </nav>
    {currentPage ==='home' && (
    <div className="content-container">
    <div className="promo-banner">
      <div className="promo-content">
        <h1 className="promo-heading">Unlock Exclusive Winter Savings!</h1>
        <p className="promo-text">
          Discover incredible deals on your favorite products for a limited time.
        </p>
        <p className="promo-text">
          Don't miss out on these fantastic offers!
        </p>
        <button className="promo-button">Explore Deals</button>
      </div>
    </div>
    <div className="products-container">
    <div className='products-container-text'>Recent deals </div>
    <div className="product-grid">
        {PRODUCTS.map(product => (
          <div className="card" key={product.id}>
            <div className="card-img" style={{ backgroundColor: product.color }}></div>
            <div className="card-body">
              <h3>{product.title}</h3>
              <p className="store-name">{product.store}</p>
              <div className="card-footer">
                <span className="price">${product.price}</span>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <section className="category-section">
      <h2 className="section-heading">Shop by Category</h2>
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="cat-icon">{cat.icon}</div>
            <span className="cat-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
    <div className="recommendation">
      
    </div>
    <h2 className='products-container-text'>Recommended for you </h2>
    <div className="product-grid">
        {PRODUCTS.map(product => (
          <div className="card" key={product.id}>
            <div className="card-img" style={{ backgroundColor: product.color }}></div>
            <div className="card-body">
              <h3>{product.title}</h3>
              <p className="store-name">{product.store}</p>
              <div className="card-footer">
                <span className="price">${product.price}</span>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)}
    {currentPage === 'search' && (
          <SearchResults/>
        )}
    {currentPage === "Categories" && (
        <Categories/>
    )}
    {currentPage === "profile" && (
        <SmallBizProfile/>
    )}
    
  </div>
  );
};

export default Home;
