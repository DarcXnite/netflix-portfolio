import { create } from 'zustand'

export interface ModalStoreInterface {
  data?: {
    fName?: string
    lName?: string
    description?: string
  }
  isOpen: boolean
  openModal: (data: object) => void
  closeModal: () => void
}

const useInfoModal = create<ModalStoreInterface>(set => ({
  data: {},
  isOpen: false,
  openModal: data => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: {} }),
}))

export default useInfoModal
