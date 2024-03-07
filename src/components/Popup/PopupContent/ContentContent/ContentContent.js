import { useState } from 'react';
import "./ContentContent.css";
import CardContent from '../../../CardContent/CardContent';
import { cardGaidData, cardContentData} from "../../../../mocks/card-content-data";

function ContentContent() {
  const [cardsContent, setCardsContent] = useState(cardContentData);
  const [cardsGaid, setCardsGaid] = useState(cardGaidData);

  const handleDeleteCard = (index, type) => {
    if (type === 'content') {
      const updatedCardsContent = cardsContent.filter((_, i) => i !== index);
      setCardsContent(updatedCardsContent);
    } else if (type === 'gaid') {
      const updatedCardsGaid = cardsGaid.filter((_, i) => i !== index);
      setCardsGaid(updatedCardsGaid);
    }
  };

  return (
    <div className="contentContent__container">
      <div className="contentContent__info-block">
        <h2 className="contentContent__subtitle">Гайд</h2>
        {cardsGaid.map((card, i) => (
          <CardContent
            key={i}
            card={card}
            index={i}
            type= "gaid"
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
      <div className="contentContent__info-block">
        <h2 className="contentContent__subtitle">Контент</h2>
        {cardsContent.map((card, i) => (
          <CardContent
            key={i}
            card={card}
            index={i}
            type="content"
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentContent;
