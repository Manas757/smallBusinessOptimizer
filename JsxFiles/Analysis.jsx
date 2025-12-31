import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, ShoppingCart, Home, Star, Settings, HelpCircle, LogOut } from 'lucide-react';
import "../CSS/Analysis.css"

const AnalysisChart = () => {
  const [activeNav, setActiveNav] = useState('analytics');

  // Dummy data - Replace with API calls later
  const salesData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 38 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 72 },
    { day: 'Sat', value: 58 },
    { day: 'Sun', value: 48 }
  ];

  const productPerformance = [
    { category: 'Clothing', value: 35, color: '#3b82f6' },
    { category: 'Footwear', value: 25, color: '#10b981' },
    { category: 'Crafts', value: 20, color: '#f59e0b' },
    { category: 'Stones', value: 20, color: '#ef4444' }
  ];

  const reviews = [
    {
      customer: 'Alice Smith',
      product: 'Wireless Headphones',
      rating: 5,
      comment: 'Excellent sound quality and comfortable fit. Highly recommend!'
    },
    {
      customer: 'Bob Johnson',
      product: 'Smart Watch X',
      rating: 4,
      comment: 'Good features for the price, but battery life could be better.'
    },
    {
      customer: 'Charlie Brown',
      product: 'Ergonomic Office Chair',
      rating: 5,
      comment: 'Transformed my home office. Super comfortable and superb quality.'
    },
    {
      customer: 'Diana Prince',
      product: 'Organic Cotton T-Shirt',
      rating: 3,
      comment: 'Soft fabric, but it shrunk a bit after the first wash.'
    },
    {
      customer: 'Eve Adams',
      product: 'Portable Blender',
      rating: 5,
      comment: 'Perfect for smoothies on the go! Easy to clean.'
    }
  ];

  const maxSales = Math.max(...salesData.map(d => d.value));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#fbbf24' : 'none'}
        color={i < rating ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  // Calculate donut chart segments
  const total = productPerformance.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;
  const segments = productPerformance.map(item => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const segment = {
      ...item,
      percentage,
      startAngle: currentAngle,
      endAngle: currentAngle + angle
    };
    currentAngle += angle;
    return segment;
  });

  return (
    <div className="dashboard-container">
      {/* Header
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <ShoppingCart size={24} color="#10b981" />
            <span>SmallBiz</span>
          </div>
          <nav className="top-nav">
            <a href="#home" className="nav-link">
              <Home size={18} />
              Home
            </a>
            <a href="#cart" className="nav-link">
              <ShoppingCart size={18} />
              Cart
            </a>
            <a href="#categories" className="nav-link">
              Categories
            </a>
            <a href="#analytics" className="nav-link active">
              Analytics
            </a>
          </nav>
        </div>
        <div className="user-profile">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" />
        </div>
      </header> */}

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveNav('dashboard')}
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </button>
            <button
              className={`nav-item ${activeNav === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveNav('sales')}
            >
              <TrendingUp size={20} />
              <span>Sales Overview</span>
            </button>
            <button
              className={`nav-item ${activeNav === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveNav('performance')}
            >
              <BarChart3 size={20} />
              <span>Product Performance</span>
            </button>
            <button
              className={`nav-item ${activeNav === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveNav('reviews')}
            >
              <Users size={20} />
              <span>Customer Reviews</span>
            </button>
          </nav>

          <div className="sidebar-footer">
            <button className="nav-item">
              <Settings size={20} />
              <span>Settings</span>
            </button>
            <button className="nav-item">
              <HelpCircle size={20} />
              <span>Help</span>
            </button>
            <button className="nav-item">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className="page-title">Analytics Dashboard</h1>

          <div className="charts-row">
            {/* Everyday Sales Chart */}
            <div className="chart-card">
              <h2 className="chart-title">Everyday Sales</h2>
              <div className="bar-chart">
                {salesData.map((item, index) => (
                  <div key={index} className="bar-wrapper">
                    <div
                      className="bar"
                      style={{
                        height: `${(item.value / maxSales) * 100}%`
                      }}
                    >
                      <div className="bar-tooltip">${item.value}</div>
                    </div>
                    <span className="bar-label">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Performance Chart */}
            <div className="chart-card">
              <h2 className="chart-title">Product Performance</h2>
              <div className="donut-chart-container">
                <svg viewBox="0 0 200 200" className="donut-chart">
                  {segments.map((segment, index) => {
                    const startAngle = (segment.startAngle * Math.PI) / 180;
                    const endAngle = (segment.endAngle * Math.PI) / 180;
                    const innerRadius = 60;
                    const outerRadius = 90;

                    const x1 = 100 + outerRadius * Math.cos(startAngle);
                    const y1 = 100 + outerRadius * Math.sin(startAngle);
                    const x2 = 100 + outerRadius * Math.cos(endAngle);
                    const y2 = 100 + outerRadius * Math.sin(endAngle);
                    const x3 = 100 + innerRadius * Math.cos(endAngle);
                    const y3 = 100 + innerRadius * Math.sin(endAngle);
                    const x4 = 100 + innerRadius * Math.cos(startAngle);
                    const y4 = 100 + innerRadius * Math.sin(startAngle);

                    const largeArc = segment.percentage > 50 ? 1 : 0;

                    return (
                      <path
                        key={index}
                        d={`M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`}
                        fill={segment.color}
                        className="donut-segment"
                      />
                    );
                  })}
                </svg>
                <div className="donut-legend">
                  {productPerformance.map((item, index) => (
                    <div key={index} className="legend-item">
                      <div
                        className="legend-color"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="reviews-section">
            <h2 className="section-title">Customer Reviews</h2>
            <div className="reviews-table-container">
              <table className="reviews-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Rating</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={index}>
                      <td className="customer-cell">{review.customer}</td>
                      <td className="product-cell">{review.product}</td>
                      <td className="rating-cell">
                        <div className="stars">{renderStars(review.rating)}</div>
                      </td>
                      <td className="comment-cell">{review.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
       </div>
  );
}

export default AnalysisChart;