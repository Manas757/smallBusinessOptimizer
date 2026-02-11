import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Zap, Package, Tag, UserCheck, Laptop, Shirt, Home as HomeIcon, Palette } from 'lucide-react';
import '../CSS/Home.css'; 
import SearchResults from './SearchResults';
import Categories from "./Categories"
import SmallBizProfile from './BsProfile'
import OrderCheckoutPage from './Cart'
import SignIn from './SignIn'
import ProductPage from './ProductInfo';

const CATEGORIES = [
  { id: 1, name: 'Electronics', icon: <Laptop size={32} /> },
  { id: 2, name: 'Apparel', icon: <Shirt size={32} /> },
  { id: 3, name: 'Home Goods', icon: <HomeIcon size={32} /> },
  { id: 4, name: 'Handmade Crafts', icon: <Palette size={32} /> },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from your Node.js backend
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('http://localhost:5050/getproducts');
        const data = await response.json();
        setDbProducts(data); // Stores the converted Base64 products
        setLoading(false);   
      } catch (error) {
        console.error("Failed to fetch:", error);
        setLoading(false);
      }
    };

    if (currentPage === 'home') {
      loadProducts();
    }
  }, [currentPage]);

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
          <button className='role-btn' onClick={()=>setCurrentPage('Cart')} 
          aria-label="cart">🛒
          </button>
          <button className='Sign-in-btn' onClick={()=>setCurrentPage('SignIn')}>
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

      {currentPage === 'home' && (
        <div className="content-container">
          <div className="promo-banner">
            <div className="promo-content">
              <h1 className="promo-heading">Unlock Exclusive Winter Savings!</h1>
              <p className="promo-text">Discover incredible deals on your favorite products.</p>
              <button className="promo-button">Explore Deals</button>
            </div>
          </div>

          <div className="products-container">
            <div className='products-container-text'>Latest from Small Businesses</div>
            
            {loading ? (
              <div className="loading-spinner">Loading fresh deals...</div>
            ) : dbProducts.length > 0 ? (
              <div className="product-grid">
                {/* Mapping through your live database products */}
                {dbProducts.map((item) => (
                  <div className="card" key={item.productid}>
                    <div className="card-img">
                      {item.productimg ? (
                        <img 
                          src={item.productimg} 
                          alt={item.productname} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{ backgroundColor: '#e0e0e0', height: '100%' }}></div>
                      )}
                    </div>
                    <div className="card-body">
                      {/* Product Title */}
                      <h3>{item.productname}</h3>
                      <p className="store-name">SmallBiz Verified Store</p>
                      
                      <div className="card-footer">
                        {/* Price Display */}
                        <span className="price">${item.price}</span>
                        
                        {/* Action Buttons */}
                        <div className="button-group">
                          <button className="home-view-btn">Add to Cart</button>
                          <button className="view-btn" onClick={()=> setCurrentPage('ProductInfo')}>View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products available right now.</p>
            )}
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
        </div>
      )}
    {currentPage === 'search' && (
          <SearchResults/>
        )}
    {currentPage === "Categories" && (
        <Categories/>
    )}
    {currentPage==='Cart'&&(
      <OrderCheckoutPage/>
    )}
    {currentPage === "profile" && (
        <SmallBizProfile/>
    )}
    {currentPage==="SignIn" && (
        <SignIn/>
    )}
    {currentPage==="ProductInfo" &&(
      <ProductPage/>
    )}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-brand">
                <div className="logo-box">
               <Zap color="white" size={18} />
                </div>
                <span className="logo-text">SmallBiz Cart</span>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Safety Center</a></li>
                <li><a href="#">Guidelines</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 SmllBiz Cart. All rights reserved.</p>
          </div>
        </div>
      </footer>
  </div>
  );
};

export default Home;