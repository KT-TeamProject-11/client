import React from 'react';
import { X } from 'lucide-react';

const Header = ({ title, onReset }) => {
  return (
    <header className="chatbot-header">
      <h1>{title}</h1>
      <button onClick={onReset} className="icon-button" aria-label="메뉴로 돌아가기">
        <X size={22} />
      </button>
    </header>
  );
};

export default Header;