import { AlertModalType, ModalType } from '@/types';
import { create } from 'zustand';

/*
 *  MODAL STORE
 */
export type ModalStore = {
  modalProps: ModalType;
  setModalOpen: (props?: ModalType) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modalProps: {
    isOpen: false,
    isClosed: false,
    isRefresh: true,
    description: '',
    customSize: '',
    title: '',
    modalContent: null,
    modalFooter: null,
    modalButton: null,
  },
  setModalOpen: (modalProps?: ModalType) => set({ modalProps }),
}));

/*
 *  ALERT MODAL STORE
 */
export type AlertModalStore = {
  modalProps: AlertModalType;
  setAlertModalOpen: (props?: AlertModalType) => void;
};

export const useAlertModalStore = create<AlertModalStore>((set) => ({
  modalProps: {
    isOpen: false,
    customSize: '',
    title: '',
    message: '',
    btnConfirmText: '',
    btnCancelText: '',
    modalButton: null,
    onConfirm: () => {},
    onCancel: () => {},
  },
  setAlertModalOpen: (modalProps?: AlertModalType) => set({ modalProps }),
}));
