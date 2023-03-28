import { useModal } from "@/app/contexts/modal-context"
import ReactModal from "react-modal"

export const Modal = () => {
  const { isOpen, closeModal } = useModal()
  return (
    <ReactModal isOpen={isOpen}>
      MODAL WINDOW
      <button onClick={closeModal}>closeModal</button>
    </ReactModal>
  )
}
