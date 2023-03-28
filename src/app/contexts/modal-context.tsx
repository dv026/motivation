import {
  createContext,
  PropsWithChildren,
  useState,
  FC,
  useContext,
} from "react"

interface ModalContextProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => null,
  closeModal: () => null,
})

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
