import React, { useState } from 'react';
import '../CSS/BsProfile.css';
import AnalysisChart from './Analysis' 

const SmallBizProfile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('profile');
  const navigate = (section) => {
    alert(`Navigating to ${section} section`);
  
  };

  const viewOrder = (orderId) => {
   
   alert(`Viewing order details for ${orderId}`);
  };


  const handleSearch = (e) => {
    // use onKeyDown below (onKeyPress is deprecated in React)
    if (e.key === 'Enter' && searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      // Example: navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const orders = [
    { id: 'SBZC-00123', date: '2023-11-20', total: '$75.00', status: 'delivered' },
    { id: 'SBZC-00122', date: '2023-11-15', total: '$42.50', status: 'delivered' },
    { id: 'SBZC-00121', date: '2023-11-10', total: '$120.00', status: 'pending' },
    { id: 'SBZC-00120', date: '2023-11-05', total: '$30.00', status: 'delivered' },
    { id: 'SBZC-00119', date: '2023-10-28', total: '$95.00', status: 'canceled' }
  ];

  const actionCards = [
    {
      icon: '💳',
      title: 'Payment Methods',
      description: 'Manage your credit cards and payment options.',
      section: 'payment'
    },
    {
      icon: '📍',
      title: 'Shipping Addresses',
      description: 'Update or add new delivery addresses.',
      section: 'shipping'
    },
    {
      icon: '💚',
      title: 'Saved Items',
      description: 'Browse your wishlist and favorited products.',
      section: 'saved'
    },
    {
      icon: '🔔',
      title: 'Notification Settings',
      description: 'Customize your email and app notification preferences.',
      section: 'notifications'
    }
  ];

  return (
    <div className="app">
      {/* <header className="header">
        <div className="logo">
          <div className="logo-icon">SB</div>
          <span>SmallBiz Cart</span>
        </div> */}

        {/* <nav className="nav">
          <a href="#market">Market</a>
          <a href="#genre">Genre</a>
          <a href="#reels">Reels</a>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products or stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch} // changed to onKeyDown
            />
          </div>

          <div className="header-icons">
            <button type="button" className="icon-btn" aria-label="notifications">🔔</button>
            <button type="button" className="icon-btn" aria-label="cart">🛒</button>
           <button className='role-btn' onClick={()=>setCurrentPage('profile')}>
            <img
              src="https://placehold.co/40x40/60A5FA/ffffff?text=U"
              alt="User Profile"
              className="user-profile"/>
          </button>
          </div>
        </nav>
      </header> */}
{currentPage !== "AnalysisChart"&&
      (<div className="container">
        <button className="analysis" onClick={()=>setCurrentPage('AnalysisChart')}>Analyze</button>

          <div className="profile-section">
          <div className="profile-info">
            <img src="https://placehold.co/40x40/60A5FA/ffffff?text=A" alt="Annie Buyer" className="profile-avatar" />
            <div className="profile-details">
              <h2>Annie Buyer</h2>
              <div className="role">Buyer</div>
              <div className="email">annie.b@example.com</div>
            </div>
          </div>
          <button type="button" className="edit-btn">Edit Profile</button>
          <button type ="button" className='switch-btn' onClick={()=>setCurrentPage('Business')}>Business Profile</button>
        </div>

        <h3 className="section-title">Account Actions</h3>
        <div className="actions-grid">
          {actionCards.map((card, index) => (
            <div
            key={index}
            className="action-card"
            role="button"
            tabIndex={0}
            onClick={() => navigate(card.section)}
            onKeyDown={(e) => { if (e.key === 'Enter') navigate(card.section); }}
            >
              <div className="action-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="order-history">
          <h3 className="section-title">Order History</h3>
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                key={order.id}
                role="button"
                tabIndex={0}
                onClick={() => viewOrder(order.id)}
                onKeyDown={(e) => { if (e.key === 'Enter') viewOrder(order.id); }}
                >
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>)}
{currentPage ==='Business'&& 
  <Business/>
}
{currentPage ==='AnalysisChart'&&
  <AnalysisChart/>
}
    </div>
  );
};

export default SmallBizProfile;
