import React, {useState} from 'react';
import styles from './ProductCard.module.scss';
import Image from "next/image";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import {Product} from "@/interfaces/Product";

interface IProductCardProps {
    product: Product;
}

function ProductCard({product}: IProductCardProps) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className={styles.card}>
            <Image
                className={styles.card__image}
                src={product.img[currentImage] ? product.img[currentImage] : product.img[0]}
                alt={product.title}
            />

            <span className={styles.card__price}>${product.price}</span>
            <h2 className={styles.card__title}>{product.title}</h2>
            <p className={styles.card__description}>{product.description}</p>

            <ColorPicker colors={product.colors} changeImage={setCurrentImage}/>

            <button className={styles.card__button + ' ' + styles.card__button_add}>Add to cart</button>
            <button className={styles.card__button + ' ' + styles.card__button_buy}>Buy now</button>

            <a className={styles.card__reviews} href={''}>Read reviews</a>
        </div>
    );
}

export default ProductCard;
