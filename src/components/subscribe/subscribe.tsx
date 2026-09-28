import './subscribe.css';

export default function Subscribe() {
  return (
    <section className={'subscribe'}>
      <h2 className={'subscribe__title'}>Подписка на рассылку</h2>
      <p className={'subscribe__subtitle'}>
        Мы будем присылать вам обзоры аппаратуры,
        <br />
        промокоды и интересные новости
      </p>
      <div className={'subscribe__form'}>
        <input
          placeholder={'Ваш E-mail'}
          name={'email'}
          className={'subscribe__input'}
          type={'email'}
          autoComplete={'email'}
          required={true}
        />
        <button className={'subscribe__button'} type={'submit'}>
          Подписаться
        </button>
      </div>
    </section>
  );
}
