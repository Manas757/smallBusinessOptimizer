import React, { useState } from 'react';
import { Upload, X, Image } from 'lucide-react';
import '../CSS/AddItem.css';

// Add isOpen and onClose props
const AddNewProduct = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productId: '',
    price: '',
    description: '',
    deliveryTime: '',
    quantity: '',
  });

  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (file) => {
    if (file && file.size <= 5 * 1024 * 1024) {
      setProductImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    setProductImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    submitData.append('productName', formData.productName);
    submitData.append('productId', formData.productId);
    submitData.append('price', formData.price);
    submitData.append('description', formData.description);
    submitData.append('deliveryTime', formData.deliveryTime);
    submitData.append('quantity', formData.quantity);
    if (productImage) {
      submitData.append('image', productImage);
    }

    console.log('Form submitted:', formData);
    console.log('Image:', productImage);
    
    alert('Product added successfully!');
    handleCancel(); // Close modal after submission
  };

  const handleCancel = () => {
    setFormData({
      productName: '',
      productId: '',
      price: '',
      description: '',
      deliveryTime: '',
      quantity: '',
    });
    setProductImage(null);
    setImagePreview(null);
    setDragActive(false);
    onClose(); // Close the modal
  };

  // Don't render if not open
  if (!isOpen) return null;

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      handleCancel();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        {/* Close button */}
        <button className="modal-close-btn" onClick={handleCancel}>
          <X size={24} />
        </button>

        <div className="add-product-container modal-content">
          <div className="add-product-card">
            <h1 className="form-title">Add New Product</h1>

            <div className="product-form">
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Wireless Noise-Cancelling Headphones"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="productId">Product ID</label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  value={formData.productId}
                  onChange={handleInputChange}
                  placeholder="WH-1000XM5"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="349.99"
                  step="0.01"
                  min="0"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Experience industry-leading noise cancellation and premium sound quality..."
                  rows="4"
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryTime">Estimated Time of Delivery</label>
                <input
                  type="text"
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleInputChange}
                  placeholder="2-3 business days"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity Available</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="500"
                  min="0"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Product Images</label>
                <div className="image-upload-section">
                  {imagePreview ? (
                    <div className="image-preview">
                      <img src={imagePreview} alt="Product preview" />
                      <button
                        type="button"
                        className="remove-image-btn"
                        onClick={removeImage}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`upload-area ${dragActive ? 'drag-active' : ''}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="upload-placeholder">
                        <Image size={48} color="#94a3b8" />
                      </div>
                      <div className="upload-content">
                        <label htmlFor="file-upload" className="upload-btn">
                          <Upload size={18} />
                          <span>Upload New Image</span>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                        <p className="upload-hint">Drag & drop files or click to upload (Max 5MB)</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="button" className="submit-btn" onClick={handleSubmit}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;