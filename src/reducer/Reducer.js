import { DUMMY_PRODUCTS } from "../dummy-products";

const Reduer = (state, action) => {
    
  if (action.type === "ADD_ITEM") {
    console.log(action.type,action.payload.id)
    const item = DUMMY_PRODUCTS.find((prd) => prd.id === action.payload.id);
    console.log(item); // Debug: Check if the item is found correctly
    if (!item) return state; // If item is not found, return the current state

    const itemExists = state.items?.find((prd) => prd.id === action.payload.id);

    if (itemExists) {
      return {
        ...state,
        items: state.items.map((prd) =>
          prd.id === action.payload.id
            ? { ...prd, quantity: prd.quantity + 1 }
            : prd
        ),
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }
  }
  if (action.type === "UPDATE_ITEM") {
    return {
      ...state,
      items: state.items.map((prd) =>
        prd.id === action.payload.id
          ? { ...prd, quantity: prd.quantity + action.payload.amount }
          : prd
      ),
    };
  }
  if (action.type === "DELETE_ITEM") {
    const item = DUMMY_PRODUCTS.find((prd) => prd.id === action.payload.id);
    if (!item) return;
    return {
      ...state,
      items: state.items.filter((prd) => prd.id !== action.payload.id),
    };
  }
  if (action.type === "CHECKOUT_ITEM") {
    return { ...state, items: [] };
  }
  return state;
};

export default Reduer;
