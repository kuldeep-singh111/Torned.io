import create from 'zustand';

interface UseStore {
  show: boolean;
  toggleShow: () => void;
}

export const useStore = create<UseStore>((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));
