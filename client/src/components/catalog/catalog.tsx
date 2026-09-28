import './catalog.css';

interface CatalogMenuProps {
  isOpen: boolean;
}

export default function Catalog({ isOpen }: CatalogMenuProps) {
  return (
    <div className={`catalog ${isOpen ? 'catalog--open' : ''}`}>
      <aside className={'catalog__categories'}>
        <a href="#" className="catalog__category">
          Проигрыватели
        </a>
        <a href="#" className="catalog__category">
          Микрофоны
        </a>
        <a href="#" className="catalog__category">
          Акустические системы
        </a>
        <a href="#" className="catalog__category">
          Виниловые пластинки
        </a>
        <a href="#" className="catalog__category">
          Портативный Hi-Fi
        </a>
        <a href="#" className="catalog__category">
          Студийное оборудование
        </a>
        <a href="#" className="catalog__category">
          Наушники
        </a>
        <a href="#" className="catalog__category">
          Усилители
        </a>
        <a href="#" className="catalog__category">
          Внешние ЦАПы
        </a>
        <a href="#" className="catalog__category">
          Саундбары
        </a>
      </aside>
      <div className={'catalog__products'}>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro.png" alt="" />
          <h3 className={'catalog__title'}>ДИНАМИЧЕСКИЕ</h3>
          <span className={'catalog__count'}>20</span>
        </a>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro2.png" alt="" />
          <h3 className={'catalog__title'}>конденсаторные</h3>
          <span className={'catalog__count'}>11</span>
        </a>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro3.png" alt="" />
          <h3 className={'catalog__title'}>Радиосистемы</h3>
          <span className={'catalog__count'}>43</span>
        </a>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro5.png" alt="" />
          <h3 className={'catalog__title'}>Конференц-системы</h3>
          <span className={'catalog__count'}>22</span>
        </a>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro6.png" alt="" />
          <h3 className={'catalog__title'}>Петлички</h3>
          <span className={'catalog__count'}>25</span>
        </a>
        <a href="#" className="catalog-menu__card">
          <img className={'catalog__image'} src="/images/micro7.png" alt="" />
          <h3 className={'catalog__title'}>Аксессуары</h3>
          <span className={'catalog__count'}>52</span>
        </a>
      </div>
    </div>
  );
}
