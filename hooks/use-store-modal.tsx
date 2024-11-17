import { create } from "zustand"


interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void
    onClose: () => void
}

export const useStoreModal = create<useStoreModalStore>((set: any) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))