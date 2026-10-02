import './not-found-page.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2 className="not-found-page__main-title">404</h2>
      <div className="not-found-page__content-wrapper">
        <h3 className="not-found-page__title">Ой! Что-то пошло не так</h3>
        <p className="not-found-page__subtitle">
          Попробуйте воспользоваться поиском или перейдите на{' '}
          <a className="not-found-page__link" href="">главную</a>
        </p>
      </div>
    </div>
  );
}
