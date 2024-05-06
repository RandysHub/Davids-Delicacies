import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, open, style = '' }) => {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open])



  return createPortal(
    <dialog ref={dialog} className={`modal ${style}`}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
