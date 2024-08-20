import { useContext } from "react";
import { GoTrash } from "react-icons/go";
import { ShopContext } from "../store/ShopContext";

const Cart=()=>{

  const shopContext=useContext(ShopContext);

 const totalPrice = shopContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  return (
    <div id="cart">
      {shopContext.items?.length === 0 && <p>No items in cart!</p>}
      {shopContext.items?.length > 0 && (
        <ul id="cart-items" key={Date()}>
          {shopContext.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            
            return (
              <>
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => shopContext.onUpdateItemInCart(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => shopContext.onUpdateItemInCart(item.id, 1)}>
                    +
                  </button>
                <span><GoTrash  id="iconremove" onClick={() => shopContext.onDeleteItemInCart(item.id)}/></span>
                </div>
              </li>
              </>
            );
          })}
          <span style={{textAlign:"center",marginTop:"1rem"}}><strong>Cart Total: ${totalPrice.toFixed(2)}</strong></span>
        </ul>
      )}
    </div>
  );
  }

export default Cart;