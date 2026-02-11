import React, { useState } from 'react';
import "../CSS/ProductInfo.css";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=400&fit=crop'
  ];

  const relatedProducts = [
    { 
      id: 1, 
      name: 'Concrete Table', 
      price: '$249.00', 
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=400&h=400&fit=crop' 
    },
    { 
      id: 2, 
      name: 'Concrete Vase', 
      price: '$149.00', 
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop' 
    },
    { 
      id: 3, 
      name: 'Concrete Lamp', 
      price: '$199.00', 
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop' 
    },
    { 
      id: 4, 
      name: 'Concrete Candle Holders', 
      price: '$79.00', 
      image: 'https://images.unsplash.com/photo-1602874801006-96632be8204b?w=400&h=400&fit=crop' 
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: 'Jan 15, 2026',
      title: 'Amazing sound quality!',
      content: 'I\'m absolutely blown away by the sound quality of this speaker. The bass is deep and rich without being overwhelming, and the highs are crystal clear.'
    },
    {
      id: 2,
      author: 'James K.',
      rating: 5,
      date: 'Jan 10, 2026',
      title: 'Beautiful design',
      content: 'Not only does it sound great, but it looks stunning in my living room. The concrete finish is so unique and modern.'
    },
    {
      id: 3,
      author: 'Emily R.',
      rating: 4,
      date: 'Jan 5, 2026',
      title: 'Great purchase',
      content: 'Very happy with this speaker. Setup was easy and the Bluetooth connection is stable. Only wish the battery lasted a bit longer.'
    },
    {
      id: 4,
      author: 'Michael T.',
      rating: 5,
      date: 'Dec 28, 2025',
      title: 'Worth every penny',
      content: 'Premium quality in every aspect. The sound is exceptional and the build quality is top-notch. Highly recommend!'
    }
  ];

  return (
    <div className="page-container">

      {/* Product Section */}
      <div className="product-section">
        <div className="product-grid">
          {/* Left Column - Product Info */}
          <div className="product-info">
            <h1 className="product-title">AxiomEcho Smart Speaker</h1>
            <div className="product-price">
              <span>$249.00</span>
            </div>
            
            <p className="product-description">
              Experience premium sound quality with our AxiomEcho Smart Speaker. Crafted with precision and designed for the modern home, this speaker combines cutting-edge audio technology with stunning aesthetics.
            </p>

            <div className="features-section">
              <h3 className="features-title">Key Features:</h3>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span>360-degree premium sound quality</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span>Hand-crafted concrete exterior</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span>Bluetooth 5.0 connectivity</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span>12-hour battery life</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span>Voice assistant compatible</span>
                </li>
              </ul>
            </div>

            <div className="product-controls">
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  −
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button className="add-to-cart-btn">
                Add to Cart
              </button>
              <button className="wishlist-btn">
                <svg className="wishlist-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Product Images */}
          <div className="product-images">
            <div className="main-image-container">
              <img 
                src={productImages[selectedImage]} 
                alt="Product"
                className="main-image"
              />
            </div>
            <div className="thumbnail-grid">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`thumbnail-button ${selectedImage === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="thumbnail-image" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="product-showcase">
          <h2 className="section-title">Product Showcase</h2>
          <div className="showcase-carousel">
            <button className="carousel-button prev">
              <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="showcase-image-container">
              <img 
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop" 
                alt="Product showcase"
                className="showcase-image"
              />
            </div>
            <button className="carousel-button next">
              <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="related-products">
          <h2 className="section-title">You Might Also Like</h2>
          <div className="products-grid">
            {relatedProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price-text">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Ratings & Reviews */}
        <div className="reviews-section">
          <h2 className="section-title-left">Customer Ratings & Reviews</h2>
          <div className="reviews-header">
            <div className="rating-summary">
              <span className="rating-number">4.8</span>
              <div className="rating-info">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-icon" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="rating-count">Based on 127 reviews</p>
              </div>
            </div>
          </div>

          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <div className="review-author-info">
                    <div className="review-author-section">
                      <span className="review-author">{review.author}</span>
                      <div className="review-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="star-icon-small" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p className="review-content">{review.content}</p>
              </div>
            ))}
          </div>

          <button className="load-more-btn">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;