import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, price }) => (
    <div className={styles['product-card']}>
        {image ? (
            <img src={image} alt={name} className={styles['product-card-image']} />
        ) : null}
        <div className={styles['product-card-info']}>
            <h3 className={styles['product-card-name']}>{name}</h3>
            <p className={styles['product-card-price']}>R$ {price}</p>
        </div>
    </div>
);

export default ProductCard;
