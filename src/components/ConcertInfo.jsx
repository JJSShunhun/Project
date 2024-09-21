import React, { useState, useEffect } from "react";
import ConcertDetail from "./ConcertDetail";
import events from "./Data";
import "../assets/css/ConcertList.css";

function ConcertInfo() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [favoriteEvents, setFavoriteEvents] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteEvents");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // 관심 공연 등록/해제 함수
  /*const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favoriteEvents.includes(id)) {
      updatedFavorites = favoriteEvents.filter((eventId) => eventId !== id);
    } else {
      updatedFavorites = [...favoriteEvents, id];
    }
    setFavoriteEvents(updatedFavorites);
    localStorage.setItem("favoriteEvents", JSON.stringify(updatedFavorites)); // 로컬 스토리지에 저장
  };*/

  const handleDetailsClick = (id) => {
    setSelectedEventId(id);
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
  }; 

  const toggleFavorite = (id) => {
    if (typeof window !== "undefined") {
      let updatedFavorites;
      if (favoriteEvents.includes(id)) {
        updatedFavorites = favoriteEvents.filter((eventId) => eventId !== id);
      } else {
        updatedFavorites = [...favoriteEvents, id];
      }
      setFavoriteEvents(updatedFavorites);
      localStorage.setItem("favoriteEvents", JSON.stringify(updatedFavorites));
    }
  };
  

  useEffect(() => {
    if (selectedEventId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEventId]);

  if (events.length === 0) {
    return (
      <div className="list-container">
        <h2>전체 공연 목록</h2>
        <p>등록된 공연이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>전체 공연 목록</h2>
      <div className="list">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="card-header">
              {/* 관심 공연 별 아이콘 */}
              <span
                className="star-icon"
                onClick={() => toggleFavorite(event.id)}
              >
                {favoriteEvents.includes(event.id) ? "★" : "☆"}
              </span>
            </div>
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

      {selectedEventId && (
        <ConcertDetail eventId={selectedEventId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ConcertInfo;


