import React from 'react';
import styles from './ProductsList.module.scss'
import ProductCard from "@/components/ProductCard/ProductCard";
import {Product} from "@/interfaces/Product";

interface IProductsListProps {
    data: Product[]
}

function ProductsList({data}: IProductsListProps) {
    return (
        <div className={styles.list}>
            {
                data.map(prod => {
                    return <ProductCard key={prod.id} product={prod}/>
                })
            }
        </div>
    );
}

export default ProductsList;
