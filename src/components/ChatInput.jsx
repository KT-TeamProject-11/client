import React from 'react';
import { SendHorizontal } from 'lucide-react';

const ChatInput = ({ input, setInput, onSend, onKeydown }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
    // 자동 높이 조절
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="input-area">
      <textarea
        rows={1}
        placeholder="직접 문의할 내용을 입력하세요..."
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
        <SendHorizontal size={20} />
      </button>
    </div>
  );
};

export default ChatInput;