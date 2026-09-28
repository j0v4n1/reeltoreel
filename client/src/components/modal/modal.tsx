import './modal.css';
import * as React from 'react';

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setIsOpen }: ModalProps) {
  return (
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className={'modal'}>
      <form
        className={'modal__form'}
        onClick={(event) => event.stopPropagation()}>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          type={'button'}
          className={'modal__close'}>
          <img src="/images/close.svg" alt="" />
        </button>
        <h2 className={'modal__title'}>Вход или регистрация</h2>
        <input
          className={'modal__input'}
          type="tel"
          placeholder={'Ваш телефон'}
        />
        <button type={'submit'} className={'modal__submit'}>
          Войти
        </button>
      </form>
    </div>
  );
}
