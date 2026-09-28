import './categories.css';

export default function Categories() {
  return (
    <section className={'categories'}>
      <article className={'categories__article'}>
        <img className={'categories__image'} src="/images/vinil.svg" alt="Пластинки" />
        <h2 className={'categories__title'}>Пластинки</h2>
        <p className={'categories__subtitle'}>132 товара</p>
      </article>
      <article className={'categories__article'}>
        <img className={'categories__image'} src="/images/casset.svg" alt="Кассеты" />
        <h2 className={'categories__title'}>Кассеты</h2>
        <p className={'categories__subtitle'}>56 товаров</p>
      </article>
      <article className={'categories__article'}>
        <img className={'categories__image'} src="/images/player.svg" alt="Проигрыватели" />
        <h2 className={'categories__title'}>Проигрыватели</h2>
        <p className={'categories__subtitle'}>11 товаров</p>
      </article>
      <article className={'categories__article'}>
        <img className={'categories__image'} src="/images/accessories.svg" alt="Аксессуары" />
        <h2 className={'categories__title'}>Аксессуары</h2>
        <p className={'categories__subtitle'}>235 товаров</p>
      </article>
    </section>
  );
}
