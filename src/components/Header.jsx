import { useContext, useRef } from "react";
import CartModel from "./CartModel";
import { ShopContext } from "../store/ShopContext";

const Header = () => {

 const shopContext=useContext(ShopContext);
 const modal = useRef();
 const handleCart =()=>
  {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (shopContext.items.length > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={shopContext.onCheckOutInCart} style={{backgroundColor:"black",color:"#d1b68b"}}>Checkout</button>
      </>
    );
  }
 
  return (
    <>
      <header id="main-header">
        <CartModel  ref={modal} title="shop Cart" actions={modalActions}/>
        <div id="main-title" >
          <img src="./logo.png" alt="logo" />
          <p>Elegant Context</p>
        </div>
        <button onClick={handleCart}>Cart  {shopContext.items?.length?shopContext.items.length:""}</button>
      </header>
    </>
  );
};

export default Header;
