import './mini-menu.css';
import { type ProductCard } from '../../types/products.ts';
import {
  setIsOpenFavorite,
  setIsOpenCart,
  setMenuType,
} from '../../store/slices/mini-menu-slice.ts';
import { useAppDispatch, useAppSelector } from '../../store/hook.ts';

export default function MiniMenu() {
  const dispatch = useAppDispatch();

  // useAppSelector start
  const products: ProductCard[] = useAppSelector(
    (state) => state.products.products
  );
  const favoriteIds: number[] = useAppSelector((state) => state.favorites.ids);
  const menuType = useAppSelector((state) => state.miniMenu.menuType);
  const isOpenFavorite = useAppSelector(
    (state) => state.miniMenu.isOpenFavorite
  );
  const isOpenCart = useAppSelector((state) => state.miniMenu.isOpenCart);
  // useAppSelector end

  const favoriteProducts = products.filter((product) => {
    return favoriteIds.includes(product.id);
  });
  const totalPrice = favoriteProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const favoriteProductsList = favoriteProducts.map((product) => {
    return (
      <article key={product.id} className="mini-menu__product-card">
        <div className="mini-menu__product-card-top">
          <img
            className="mini-menu__product-card-image"
            src={product.image}
            alt={product.alt}
          />
          <h4 className="mini-menu__product-card-title">{product.name}</h4>
          <button className="mini-menu__product-card-button-close">
            <img src="/images/close.svg" alt="Закрыть" />
          </button>
        </div>
        <div className="mini-menu__product-card-bottom">
          {menuType === 'cart' && (
            <div className="mini-menu__product-card-counter">
              <button className="mini-menu__product-card-decrease-count">
                -
              </button>
              <span className="mini-menu__product-card-count">1</span>
              <button className="mini-menu__product-card-increase-count">
                +
              </button>
            </div>
          )}
          <p className="mini-menu__product-card-price">{product.price} ₽</p>
        </div>
      </article>
    );
  });

  if (menuType === 'favorite' || menuType === undefined) {
    return (
      <aside className={`mini-menu ${isOpenFavorite ? 'mini-menu--open' : ''}`}>
        <div className="mini-menu__top">
          <h3 className="mini-menu__title">
            Избранное
            <span className="mini-menu__count">{favoriteProducts.length}</span>
          </h3>
          <button
            onClick={() => {
              dispatch(setIsOpenFavorite(false));
              dispatch(setMenuType(undefined));
            }}
            className="mini-menu__button-close">
            <img
              className="mini-menu__button-close-image"
              src="/images/close.svg"
              alt="Закрыть"
            />
          </button>
        </div>
        <div className="mini-menu__content">{favoriteProductsList}</div>
        <div className="mini-menu__bottom">
          <span className="mini-menu__summ">Итог</span>
          <span className="mini-menu__summ-price">{totalPrice} ₽</span>
        </div>
      </aside>
    );
  }
  if (menuType === 'cart' || menuType === undefined) {
    return (
      <aside className={`mini-menu ${isOpenCart ? 'mini-menu--open' : ''}`}>
        <div className="mini-menu__top">
          <h3 className="mini-menu__title">
            Корзина
            <span className="mini-menu__count">{favoriteProducts.length}</span>
          </h3>
          <button
            onClick={() => {
              dispatch(setIsOpenCart(false));
            }}
            className="mini-menu__button-close">
            <img
              className="mini-menu__button-close-image"
              src="/images/close.svg"
              alt="Закрыть"
            />
          </button>
        </div>
        <div className="mini-menu__content">{favoriteProductsList}</div>
        <div className="mini-menu__bottom">
          <span className="mini-menu__summ">Итог</span>
          <span className="mini-menu__summ-price">{totalPrice} ₽</span>
        </div>
      </aside>
    );
  }
}
