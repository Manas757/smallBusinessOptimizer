import React, { useState } from 'react';
import '../CSS/Home.css'
import '../CSS/Categories.css'
import { 
  Search, Zap, Shirt, Palette, Gamepad2, 
  Footprints, Armchair, Sparkles, Home, 
  BookOpen, Cuboid as Lego, Coffee, Heart, 
  ArrowRight, ChevronDown 
} from 'lucide-react';

const categoriesData = [
  { icon: Zap, name: "Electrical", count: "125 items" },
  { icon: Shirt, name: "Clothing", count: "320 items" },
  { icon: Palette, name: "Crafts", count: "88 items" },
  { icon: Gamepad2, name: "Games", count: "150 items" },
  { icon: Footprints, name: "Footwear", count: "210 items" },
  { icon: Armchair, name: "Furniture", count: "95 items" },
  { icon: Sparkles, name: "Self-made products", count: "60 items" },
  { icon: Home, name: "Home Decor", count: "180 items" },
  { icon: BookOpen, name: "Books & Media", count: "400 items" },
  { icon: Lego, name: "Toys & Hobbies", count: "250 items" },
  { icon: Coffee, name: "Kitchenware", count: "110 items" },
  { icon: Heart, name: "Health & Beauty", count: "290 items" },
];

const Categories = () => {
  const [price, setPrice] = useState(500);

  return (
    <div className="category-container">
      <h1 className="page-title">Product Categories</h1>
  
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            className="search-input"
          />
        </div>
      </div>

      <div className="content-layout">
        <aside className="cat-filter">
          <div className="filter-header">
            <h3>Filters</h3>
          </div>
          <div className="filter-section">
            <div className="filter-group-header">
              <h4>Popular Filters</h4>
              <ChevronDown size={16} />
            </div>
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                New Arrivals
              </label>
              <label className="checkbox-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                On Sale
              </label>
              <label className="checkbox-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Top Rated
              </label>
              <label className="checkbox-item">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Featured
              </label>
            </div>
          </div>

          <div className="divider"></div>

          <div className="filter-section">
            <h4>Price Range</h4>
            <input type="range"
              min="0"
              max="1000"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className='range-slider' />

            <div className="price-labels">
                <span>0</span>
                <span>1000</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="filter-section">
            <h4>Color</h4>
            <div className="color-options">
              <div className="color-circle" style={{backgroundColor: '#ff4d4f'}}></div>
              <div className="color-circle" style={{backgroundColor: '#3b82f6'}}></div>
              <div className="color-circle" style={{backgroundColor: '#2ecc71'}}></div>
              <div className="color-circle" style={{backgroundColor: '#000000'}}></div>
              <div className="color-circle" style={{backgroundColor: '#ffffff', border: '1px solid #ddd'}}></div>
            </div>
          </div>

          <button className="apply-btn">Apply Filters</button>
        </aside>

        <main className="cat-grid">
          {categoriesData.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="icon-wrapper">
                <cat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="card-title">{cat.name}</h3>
              <p className="item-count">{cat.count}</p>
              <a href="#" className="view-link">
                View All <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Categories;