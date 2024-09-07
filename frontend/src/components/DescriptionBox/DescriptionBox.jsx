import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="db-navigator">
        <div className="db-nav-box">Description</div>
        <div className="db-nav-box fade">Reviews (122)</div>
      </div>
      <div className="db-description">
        <p>An e-commerce website is a digital platform enabling businesses to sell products and services online. It features secure payment processing, product catalogs, user reviews, and shopping carts. E-commerce sites enhance customer convenience, expand market reach, and streamline operations, driving the growth of online retail and global commerce.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
