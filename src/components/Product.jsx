import { useContext } from "react";
import { ShopContext } from "../store/ShopContext";

const Product =({id,image,title,price,description})=>{

  const shopConext=useContext(ShopContext)
    return<>
      <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        <p className='product-actions'>
          <button onClick={()=>shopConext.onAddItemToCart(id)}  >Add to Cart</button>
        </p>
      </div>
    </article>
    </>
}

export default Product;
