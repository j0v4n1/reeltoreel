import './header.css';
import Catalog from '../catalog/catalog.tsx';
import * as React from 'react';
import MiniMenu from '../mini-menu/mini-menu.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hook.ts';
import {
  setIsOpenCart,
  setIsOpenFavorite,
  setMenuType,
} from '../../store/slices/mini-menu-slice.ts';
import { useState } from 'react';

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [isOpenCollections, setIsOpenCollections] = useState(false);

  const dispatch = useAppDispatch();

  const favoritesCount: number = useAppSelector(
    (state) => state.favorites.ids
  ).length;

  const menuType = useAppSelector((state) => state.miniMenu.menuType);
  const cartItemCount = useAppSelector((state) => state.cart.ids).length;

  return (
    <header className={'header'}>
      <Catalog isOpen={isOpenCatalog} />
      <MiniMenu />
      <div className={'header__top'}>
        <a className={'header__logo'} href={'#'}>
          Reel to real
        </a>
        <nav className="header__navbar">
          <a className="header__link" href="#">
            Магазины
          </a>
          <a className="header__link" href="#">
            контакты
          </a>
        </nav>
        <div className={'header__actions'}>
          <button
            className={'header__action'}
            onClick={() => {
              if (menuType === 'cart') {
                dispatch(setIsOpenCart(false));
                setTimeout(() => {
                  dispatch(setIsOpenFavorite(true));
                  dispatch(setMenuType('favorite'));
                }, 1000);
              } else if (menuType === 'favorite') {
                dispatch(setIsOpenFavorite(false));
                dispatch(setMenuType(undefined));
              } else if (menuType === undefined) {
                dispatch(setIsOpenFavorite(true));
                dispatch(setMenuType('favorite'));
              }
            }}>
            <span className={'header__action-count'}>{favoritesCount}</span>
            <img src="/images/favor.svg" alt="Избранное" />
          </button>
          <button
            onClick={() => {
              if (menuType === 'favorite') {
                dispatch(setIsOpenFavorite(false));
                setTimeout(() => {
                  dispatch(setIsOpenCart(true));
                  dispatch(setMenuType('cart'));
                }, 1000);
              } else if (menuType === 'cart') {
                dispatch(setIsOpenCart(false));
                setTimeout(() => {
                  dispatch(setMenuType(undefined));
                }, 1000);
              } else if (menuType === undefined) {
                dispatch(setIsOpenCart(true));
                dispatch(setMenuType('cart'));
              }
            }}
            className={'header__action'}>
            <span className={'header__action-count header__action-count--cart'}>
              {cartItemCount}
            </span>
            <img src="/images/cart.svg" alt="Корзина" />
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={'header__login'}>
            войти
          </button>
        </div>
      </div>
      <div className={'header__bottom'}>
        <button
          className={'header__catalog'}
          onClick={() => setIsOpenCatalog(!isOpenCatalog)}>
          <img src="/images/burger.svg" alt="меню" />
          <span className={'header__catalog--text'}>Каталог</span>
          <img
            className={`header__image-arrow ${isOpenCatalog ? 'header__image-arrow--open' : ''}`}
            src="/images/angle_down.svg"
            alt="стрелка вниз"
          />
        </button>
        <button
          className={'header__collections'}
          onClick={() => setIsOpenCollections(!isOpenCollections)}>
          <span className={'header__collections--text'}>Коллекции</span>
          <img
            className={`header__image-arrow ${isOpenCollections ? 'header__image-arrow--open' : ''}`}
            src="/images/angle_down.svg"
            alt="стрелка вниз"
          />
        </button>
        <div className={'header__search'}>
          <img
            className={'header__search-image'}
            src="/images/search.svg"
            alt="поиск"
          />
          <input
            id={'header__search-input'}
            className={'header__search-input'}
            type="search"
            placeholder="Найти винил или аппаратуру"
          />
        </div>
        <a className={'header__phone'} href="tel:88004567890">
          8-800-456-78-90
        </a>
      </div>
    </header>
  );
}
