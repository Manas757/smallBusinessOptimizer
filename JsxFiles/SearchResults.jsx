import React, { useState } from 'react';
import '../CSS/searchResults.css'
import { Filter, Star } from 'lucide-react';



const PRODUCTS = [
  { id: 1, title: 'Handmade Lavender Soap', store: 'EcoCraft', price: '8.50', color: '#5c4033' },
  { id: 2, title: 'Ceramic Mug', store: 'Pottery Haven', price: '22.00', color: '#2f4f4f' },
  { id: 3, title: 'Wildflower Honey', store: 'Golden Bloom', price: '15.99', color: '#8b4513' },
  { id: 4, title: 'Soy Wax Candle', store: 'Serenity Scents', price: '18.00', color: '#4a4a4a' },
  { id: 5, title: 'Macrame Hanger', store: 'Knotty Creations', price: '28.00', color: '#556b2f' },
  { id: 6, title: 'Roasted Coffee', store: 'Daily Grind', price: '14.50', color: '#3e2723' },
];

const SearchResults = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All Businesses');
  const [rating, setRating] = useState(2);
  return (
    <div className="search-results-page">
      <div className="filter-bar">
        <div className="tabs">
          {['All Businesses', 'Local Crafts', 'Food & Beverage'].map((tab) => (
            <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <button className="filter-btn" onClick={() => setSidebarOpen(true)}>
          <Filter />
          <span>Filters</span>
        </button>
      </div>
      <h2 className="section-title">Search Results</h2>
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
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      >
      </div>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-h">
          <div className="sidebar-header">
            <h3>Filter Results</h3>
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</button>
          </div>
          <hr />
        </div>
        <div className="sidebar-content">
          <div className="filter-group">
            <h4>Categories</h4>
            <label className='checkbox'><input type="checkbox" />Electronics</label>
            <label className='checkbox'><input type="checkbox" />Apparel</label>
          </div>
          <hr />
          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-inputs">
              <input type="text" placeholder="Min" /> to <input type="text" placeholder="Max" />
            </div>
          </div>
        </div>
        <div className="rating-container">
            <div className="rating-header">
              <h4>Business Rating</h4>
            </div>
            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="green-range-slider"
                style={{
                  background: `linear-gradient(to right, #2ecc71 ${rating * 20}%, #e5e7eb ${rating * 20}%)`
                }}
              />
              <div className="slider-labels">
                <span>0 <Star size={10} /></span>
                <span>1 <Star size={10} /></span>
                <span>2 <Star size={10} /></span>
                <span>3 <Star size={10} /></span>
                <span>4 <Star size={10} /></span>
                <span>5 <Star size={10} /></span>
              </div>
            </div>
          </div>
        <div className="sidebar-footer">
          <button className="btn-apply" onClick={() => setSidebarOpen(false)}>Apply</button>
        </div>
      </aside>
    </div>
  );
};

export default SearchResults;