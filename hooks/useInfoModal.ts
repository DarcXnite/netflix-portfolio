import { create } from 'zustand'

export interface ModalStoreInterface {
  id?: number
  details: {
    id?: number
    fName?: string
    lName?: string
    name?: string
    description?: string
    link?: string
    github?: string
    email?: string
    linkedin?: string
  }
  isOpen: boolean
  openModal: (id: number, data: object[]) => void
  closeModal: () => void
}

const useInfoModal = create<ModalStoreInterface>(set => ({
  id: undefined,
  details: {},
  isOpen: false,
  openModal: (id: number, data: object[]) =>
    set({ isOpen: true, details: data[id - 1] }),
  closeModal: () => set({ isOpen: false, id: undefined }),
}))

export default useInfoModal
