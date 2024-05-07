import { useContext } from "react"
import Input from "./UI/Input"
import Button from "./UI/Button";
import Modal from "./Modal";
import { CartContext } from "../CartContext"
import { ProgressContext } from "../ProgressContext";


export default function OrderForm() {
  const { total } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(ProgressContext)

  return (
    <Modal open={progress === 'checkout'} onClose={hideCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>{`$ ${total}`}</p>
        <Input id={'full-name'} label={'Full Name'} type='text' />
        <Input id={'E-Mail Address'} label={'E-Mail Address'} type='email' />
        <Input id={'street'} label={'Street'} type='text' />
        <div className="control-row">
          <Input id={'postal-code'} label={'Postal Code'} type='text' />
          <Input id={'city'} label={'City'} type='text' />
        </div>
        <p className="modal-actions">
          <Button onClick={hideCheckout} type='button' style='text-only'>Close</Button>
          <Button >Submit Order</Button>
        </p>

      </form>
    </Modal>
  )
}
