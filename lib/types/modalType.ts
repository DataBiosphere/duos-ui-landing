export default interface Modal {
  modal: ModalType;
}

export type ModalType = {
  title?: String;
  message: string;
  button: string | JSX.Element;
};
