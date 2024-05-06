import { useContext } from "react"
import Input from "./UI/Input"
import Modal from "./Modal";
import { CartContext } from "../CartContext"
import { ProgressContext } from "../ProgressContext";


export default function OrderForm() {
  const { total } = useContext(CartContext);
  const { progress } = useContext(ProgressContext)
  console.log(total)

  return (
    <Modal open={progress === 'checkout'}>
      <form>
        <h2>{`/$ ${total}`}</h2>

      </form>
    </Modal>
  )
}
