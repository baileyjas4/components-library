import type { ProductDisplayProps } from "../types";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart
}) => {
    return(
        <>
<p>{product.name}</p>
<p>{product.description}</p>
<p>{product.id}</p>
<p>{product.imageUrl}</p>
<p>{product.price}</p>
<p>{product.inStock}</p>
        </>
    )
}

export default ProductDisplay;