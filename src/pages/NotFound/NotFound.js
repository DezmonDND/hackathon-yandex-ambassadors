import { NavLink } from "react-router-dom";
import Layout from "../../layouts/default";
import './NotFound.css'

function NotFound() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <div className="not-found">
            <div className="not-found__image">
              <span>404</span>
            </div>
            <div className="not-found__title">
              Страница не найдена
            </div>
            <div className="not-found__text">
              К сожалению, запрашиваемая вами страница не найдена. Попробуйте другой адрес или вернитесь на главную страницу.
            </div>
            <NavLink to="/" className="not-found__btn">На главную</NavLink>
          </div>
        </Layout>
      ) : (
        <div className="not-found">
          <div className="not-found__image">
            <span>404</span>
          </div>
          <div className="not-found__title">
            Страница не найдена
          </div>
          <div className="not-found__text">
            К сожалению, запрашиваемая вами страница не найдена. Попробуйте другой адрес или вернитесь на главную страницу.
          </div>
          <NavLink to="/" className="not-found__btn">На главную</NavLink>
        </div>
      )}
    </>
  )
}
export default NotFound;
