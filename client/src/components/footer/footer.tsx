import './footer.css';

export default function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'footer__top'}>
        <a href="#" className="footer__logo">
          REEL TO REAL
        </a>
        <nav className={'footer__menu'}>
          <div className="footer__column">
            <h3 className={'footer__title'}>Каталог</h3>
            <ul className={'footer__list'}>
              <li className={'footer__item'}>
                <a className={'footer__link'} href="">
                  Винил
                </a>
              </li>
              <li className={'footer__item'}>
                <a className={'footer__link'} href="">
                  Кассеты
                </a>
              </li>
              <li className={'footer__item'}>
                <a className={'footer__link'} href="">
                  Аппаратура
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">КЛИЕНТАМ</h3>
            <ul className="footer__list">
              <li className={'footer__item'}>
                <a href="#" className="footer__link">
                  Доставка
                </a>
              </li>
              <li className={'footer__item'}>
                <a href="#" className="footer__link">
                  Возврат
                </a>
              </li>
              <li className={'footer__item'}>
                <a href="#" className="footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">КОНТАКТЫ</h3>
            <ul className="footer__list footer__list--contacts">
              <li>
                Email:{' '}
                <a href="mailto:hi@reeltoreal.ru" className="footer__link">
                  hi@reeltoreal.ru
                </a>
              </li>
              <li>
                Телефон:{' '}
                <a href="tel:+71234567890" className="footer__link">
                  +7 123 456-78-90
                </a>
              </li>
              <li>Адрес: СПб, Невский пр-т, 59</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={'footer__bottom'}>
        <div className={'footer__copyright'}>&copy; 2024 Reel to Real. Все права защищены.</div>
        <div className={'footer__legal'}>
          <a className={'footer__legal-link'} href="#">
            Политика конфиденциальности
          </a>
          <a className={'footer__legal-link'} href="#">
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
}
