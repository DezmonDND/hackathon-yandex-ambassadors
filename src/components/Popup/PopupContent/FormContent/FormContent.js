import "./FormContent.css";

function FormContent() {
  return (
    <div className="formContent__container">
      <div className="formContent__info-block">
        <h2 className="formContent__subtitle">
          Контакты
        </h2>
        <ul className="formContent__table-list">
          <li className="formContent__table-item">
            <span className="formContent__text">ФИО</span>
            <span className="formContent__text formContent__data">Иванов Иван Иванович</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Email</span>
            <span className="formContent__text formContent__data">email@example.com</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Телефон</span>
            <span className="formContent__text formContent__data">+7 (999) 999 09 09</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Телеграм</span>
            <span className="formContent__text formContent__data">@nickname</span>
          </li>
        </ul>
      </div>
      <div className="formContent__info-block">
        <h2 className="formContent__subtitle">
          Об участнике
        </h2>
        <ul className="formContent__table-list">
          <li className="formContent__table-item">
            <span className="formContent__text">Программа</span>
            <span className="formContent__text formContent__data formContent__data-about">Продакт-менеджер для специалистов с опытом</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Образование</span>
            <span className="formContent__text formContent__data formContent__data-about">РГГУ, филология</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Работа</span>
            <span className="formContent__text formContent__data formContent__data-about">проджект-менеджер в ООО Айтипроекты</span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Цель в Практикуме</span>
            <span className="formContent__text formContent__data formContent__data-about">
              Углубление имеющихся знаний, чтобы использовать их в текущей работе
            </span>
          </li>
          <li className="formContent__table-item">
            <span className="formContent__text">Цель амбассадора</span>
            <span className="formContent__text formContent__data formContent__data-about">Вести блог, Снимать видео</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FormContent;
