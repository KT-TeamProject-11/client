import React from 'react';
import { Info, MapPin, Calendar, ClipboardList } from 'lucide-react';

const icons = {
  "소개": <Info size={28} className="menu-icon" />,
  "오시는 길 & 연락처": <MapPin size={28} className="menu-icon" />,
  "투어 안내": <Calendar size={28} className="menu-icon" />,
  "아카데미 모집": <ClipboardList size={28} className="menu-icon" />,
};

const WelcomeScreen = ({ pages, onSelectPage }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-message">
        안녕하세요! 천안 재생센터 챗봇입니다.
        <br />
        궁금한 내용을 아래 버튼으로 선택해 보세요.
      </div>
      <div className="menu-grid">
        {Object.entries(pages).map(([key]) => (
          <button key={key} onClick={() => onSelectPage(key)} className="menu-button">
            {icons[key]}
            <span className="menu-label">{key}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;