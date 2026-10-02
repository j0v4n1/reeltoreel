import './app.css';
import Header from '../header/header.tsx';
import Hero from '../hero/hero.tsx';
import RunningLine from '../running-line/running-line.tsx';
import Categories from '../categories/categories.tsx';
import Products from '../products/products.tsx';
import Subscribe from '../subscribe/subscribe.tsx';
import Footer from '../footer/footer.tsx';
import Modal from '../modal/modal.tsx';
import CookiePopup from '../cookie-popup/cookie-popup.tsx';
import Loading from '../loading/loading.tsx';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook.ts';
import { fetchProducts } from '../../store/slices/product-slice.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (isModalOpen) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return status === 'succeeded' ? (
    <div className="app">
      <Header setIsOpen={setIsModalOpen} />
      <main>
        <Hero />
        <RunningLine />
        <Categories />
        <Products />
        <Subscribe />
      </main>
      <Footer />
      {isModalOpen ? <Modal setIsOpen={setIsModalOpen} /> : <></>}
      <CookiePopup />
    </div>
  ) : status === 'failed' ? (
    <div className="app">
      <Header setIsOpen={setIsModalOpen} />
      <NotFoundPage />
      <Footer />
      {isModalOpen ? <Modal setIsOpen={setIsModalOpen} /> : <></>}
      <CookiePopup />
    </div>
  ) : (
    <Loading />
  );
}

export default App;
