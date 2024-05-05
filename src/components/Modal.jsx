import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, open, style = '' }) => {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      dialog.current.close();
    }
  }, [open])


  return createPortal(
    <dialog ref={dialog} className={`modal ${style}`}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default Modal
