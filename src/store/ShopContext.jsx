import { createContext, useReducer, useState } from "react";
import Reduer from "../reducer/Reducer";

export const ShopContext = createContext({
  items: [],
  onAddItemToCart: () => {},
  onUpdateItemInCart: () => {},
  onDeleteItemInCart: () => {},
  onCheckOutInCart: () => {},
});


export default function ShopContextProvider({ children }) {
  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  const [shoppingCartState, shoppingCartDispatch] = useReducer(Reduer, { items: [] });

  const AddItemsToCart = (id) => {
    console.log(id)
    shoppingCartDispatch({
      type:"ADD_ITEM",
      payload:{id}
      })
  };

  const onUpdateItemInCart = (id, amount) => {
    shoppingCartDispatch({

      type:"UPDATE_ITEM",
      payload:{id,amount}
    })
  };

  const onDeleteItemInCart = (id) => {
   shoppingCartDispatch({
    type:"DELETE_ITEM",
    payload:{id}
   })
  };

  const onCheckOutInCart = () => {
    shoppingCartDispatch({
      type:"CHECKOUT_ITEM"
    })
  };
  return(
    <ShopContext.Provider  value={{
        items: shoppingCartState.items,
        onAddItemToCart: AddItemsToCart,
        onUpdateItemInCart,
        onDeleteItemInCart,
        onCheckOutInCart
      }}>
        {children}
    </ShopContext.Provider>
  )


}
