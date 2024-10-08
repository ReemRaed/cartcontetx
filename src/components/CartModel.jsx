import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import style from '../style/CartModel.module.css'

const CartModel = forwardRef(function Modal({ title, actions}, ref) {

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return  createPortal(
    <dialog ref={dialog} className={style.modal}>
     <h2>{title}</h2>
       <Cart />
     <form method="dialog" className={style.modalActions}>
       {actions}
     </form>
    </dialog>,document.getElementById("modal")
  )

});

export default CartModel;
