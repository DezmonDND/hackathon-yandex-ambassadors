import { useLocation } from "react-router-dom";
import "./SearchButtons.css";

function SearchButtons() {
  const { pathname } = useLocation();

  return (
    <div className="buttons">
      {pathname.includes("/promocodes") && (
        <>
          <button className="button__settings button__sheet"></button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
          <button className="button__settings button__export">
            Экспортировать
          </button>
        </>
      )}
      {pathname.includes("/ambassadors") && (
        <>
          <button className="button__settings button__arrows"></button>
          <button className="button__settings button__gear"></button>
          <button className="button__settings button__pencil"></button>
          <button className="button__settings button__plus"></button>
          <button className="button__settings button__minus"></button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
          <button className="button__settings button__delete">
            Удалить выбранные
          </button>
        </>
      )}
      {pathname.includes("/content") && (
        <>
          <button className="button__settings button__sheet"></button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
          <button className="button__settings button__export">
            Экспортировать
          </button>
        </>
      )}
      {pathname.includes("/send-merch") && (
        <>
          <button className="button__settings button__minus"></button>
          <button className="button__settings button__plus"></button>
          <button className="button__settings button__delete">
            Удалить выбранные
          </button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
        </>
      )}
      {pathname.includes("/budget") && (
        <>
          <button className="button__settings button__year"></button>
          <button className="button__settings button__sheet"></button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
          <button className="button__settings button__export">
            Экспортировать
          </button>
        </>
      )}
      {pathname.includes("/loyalty-programm") && (
        <>
          <button className="button__settings button__sheet"></button>
          <button className="button__settings button__year"></button>
          <button className="button__settings button__clear">
            Очистить выбор
          </button>
          <button className="button__settings button__export">
            Экспортировать
          </button>
        </>
      )}
      {pathname.includes("/faq") && (
        <>
          <button className="button__settings button__plus"></button>
        </>
      )}
    </div>
  );
}

export default SearchButtons;
