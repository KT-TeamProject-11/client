import React, { useState } from 'react';
import { SendHorizontal, Plus } from 'lucide-react';

const ChatInput = ({ input, setInput, onSend, onKeydown }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="input-area">
        <button className="plus-button" onClick={toggleMenu} aria-label="추가기능">
          <Plus size={20} />
        </button>
        <textarea
          rows={1}
          placeholder="호둥이에게 메세지 보내기"
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeydown}
        />
        <button 
          onClick={onSend} 
          disabled={!input.trim()}
          className="send-button"
          aria-label="메시지 전송"
        >
          <SendHorizontal size={18} />
        </button>
      </div>

      {showMenu && (
        <div className="chat-menu">
          <a
          href ="https://www.cheonanurc.or.kr/"
          target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
      >
        홈페이지
        </a>
          <a
          href="https://www.cheonanurc.or.kr/25"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
      >
        연락처
        </a>
           <a
          href="https://www.cheonanurc.or.kr/68"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
      >
        사업소개
        </a>
         <a
          href="https://www.cheonanurc.or.kr/131"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
      >
        오시는길
        </a>
          <a
          href="https://www.cheonanurc.or.kr/92"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
      >
        커뮤니티
        </a>
                <a
      href="https://www.cheonanurc.or.kr/new"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
    >
      공지사항
    </a>
                 <a
      href="https://www.cheonanurc.or.kr/64"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
    >
      투어 코스
    </a>
                     <a
      href="https://www.cheonanurc.or.kr/35"
      target="_blank"
      rel="noopener noreferrer"
      className="external-link-button"
    >
      갤러리
    </a>
        </div>
      )}
      
    </>
  );
  
};

export default ChatInput;
