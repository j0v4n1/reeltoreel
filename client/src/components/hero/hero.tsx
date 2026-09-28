import './hero.css';

export default function Hero() {
  return (
    <section className={'hero'}>
      <img className={'hero__image'} src="/images/hero-image.jpg" alt="" />
      <div className={'hero__content'}>
        <h1 className={'hero__title'}>Звук, который можно потрогать</h1>
        <p className={'hero__subtitle'}>
          Reel to Real — портал в эпоху аналогового звука. Редкие виниловые пластинки и
          отреставрированная аппаратура для тех, кто ценит живой звук.
        </p>
        <button className={'hero__button button-common-alternative'}>исследовать коллекцию</button>
      </div>
    </section>
  );
}
