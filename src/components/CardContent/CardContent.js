import React, { useState } from 'react';
import "./CardContent.css";

const CardContent = ({ card, index, type, handleDeleteCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardData, setCardData] = useState(card);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Тут добавить еще обработку сохранения данных
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div className="contentContent__card">
      <div className="contentContent__card-info">
        <p className="contentContent__text">{cardData.date}</p>
        <p className="contentContent__text">{cardData.source}</p>
        <div className="contentContent__buttons">
          <button
            type="button"
            className="contentContent__button contentContent__button_delete"
            onClick={() => handleDeleteCard(index, type)}
          />
          {isEditing ? (
            <button
              type="button"
              className="contentContent__button contentContent__button_save"
              onClick={handleSave}
            />
          ) : (
            <button
              type="button"
              className="contentContent__button contentContent__button_edit"
              onClick={handleEdit}
            />
          )}
        </div>
      </div>
      {isEditing ? (
        <input
          className="contentContent__text contentContent__card-input"
          type="text"
          name="url"
          value={cardData.url}
          onChange={handleInputChange}
        />
      ) : (
        <a
          href={cardData.url}
          className="contentContent__text contentContent__card-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardData.url}
        </a>
      )}
    </div>
  );
};

export default CardContent;
