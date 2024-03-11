import "./MerchContent.css";
import AdressForm from "../../../AddressForm/AdressForm";
import { promoData, merchData, programmData } from "../../../../mocks/card-merch-data";

function MerchContent() {
  return (
    <div className="merchContent__container">
      <div className="merchContent__info-block">
        <ul className="merchContent__table-list">
          <li className="merchContent__table-item">
            <h2 className="merchContent__subtitle">Промокод</h2>
            <span className="merchContent__text merchContent__data">samplepromocode13</span>
          </li>
          {Object.entries(promoData).map(([key, value]) => (
            <li className="merchContent__table-item" key={key}>
              <span className="merchContent__text">{key}</span>
              <span className="merchContent__text merchContent__data">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <AdressForm />
      <div className="merchContent__info-block">
        <ul className="merchContent__table-list">
          <li className="merchContent__table-item">
            <h2 className="merchContent__subtitle">Мерч</h2>
          </li>
          {Object.entries(merchData).map(([key, value]) => (
            <li className="merchContent__table-item" key={key}>
              <span className="merchContent__text">{key}</span>
              <span className="merchContent__text merchContent__data_size">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="merchContent__table-list">
        <li className="merchContent__table-item">
          <h2 className="merchContent__subtitle">Программа лояльности</h2>
        </li>
        <ul className="merchContent__table-list_merch">
          {Object.entries(programmData).map(([key, value]) => (
            <li className="merchContent__table-item" key={key}>
              <span className="merchContent__text_merch">{key}</span>
              <span className="merchContent__text_merch merchContent__data_merch">{value}</span>
            </li>
          ))}
        </ul>
      </ul>
      <div className="merchContent__table-list">
        <h2 className="merchContent__subtitle">Комментарий</h2>
        <form>
          <textarea
            className="merchContent__input_comment"
            type="text"
            placeholder="Комментарий в свободной форме"
          />
        </form>
      </div>
    </div>
  );
}

export default MerchContent;
