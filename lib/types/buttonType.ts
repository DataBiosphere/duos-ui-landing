import React from 'react';

export default interface Button {
  button: ButtonType;
}

export type ButtonType = {
  children: string | React.ReactNode;
  onClick: () => void;
};
