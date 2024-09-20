import React, { useState } from "react";
import events from "./Data";
import ConcertDetail from "./ConcertDetail"; // 공연 상세 정보 모달 컴포넌트
import "../assets/css/ConcertList.css";

function FavoriteConcerts() {
  /*const [favoriteEvents, setFavoriteEvents] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteEvents");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }); */

  const [favoriteEvents, setFavoriteEvents] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favoriteEvents");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });
  

  const [selectedEventId, setSelectedEventId] = useState(null);

  const favoriteConcerts = events.filter((event) =>
    favoriteEvents.includes(event.id)
  );

  const handleDetailsClick = (id) => {
    setSelectedEventId(id);
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
  };

  if (favoriteConcerts.length === 0) {
    return (
      <div className="list-container">
        <h2>관심 공연 목록</h2>
        <p>등록된 관심 공연이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>관심 공연 목록</h2>
      <div className="list">
        {favoriteConcerts.map((event) => (
          <div key={event.id} className="card">
            <img src={event.imageUrl} alt="대표 이미지 준비 중" />
            <div className="card-info">
              <h3>{event.title}</h3>
              <p>공연일시 : {event.date}</p>
              <p>공연장소 : {event.place}</p>
            </div>
            <div className="card-button">
              <button onClick={() => handleDetailsClick(event.id)}>
                자세히 보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 선택한 공연에 대한 상세 정보 모달 */}
      {selectedEventId && (
        <ConcertDetail eventId={selectedEventId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default FavoriteConcerts;
