import './cookie-popup.css';
import '../../styles/common.css';
import { useState } from 'react';
export default function CookiePopup() {
  const [isAcceptedCookie, setIsAcceptedCookie] = useState(false);
  return (
    !isAcceptedCookie && (
      <div className="cookie-popup">
        <h3 className="cookie-popup__title">
          Мы используем куки для улучшения работы сайта
        </h3>
        <p className="cookie-popup__subtitle">
          Оставаясь на сайте, вы соглашаетесь на использование файлов куки
        </p>
        <button
          onClick={() => setIsAcceptedCookie(true)}
          className="cookie-popup__button button-common">
          ОК
        </button>
      </div>
    )
  );
}
