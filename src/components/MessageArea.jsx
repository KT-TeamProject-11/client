import React, { useRef, useEffect } from 'react';

const MessageArea = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages-container">
      {messages.map((m, idx) => (
        <div key={idx} className={`message-bubble ${m.role}`}>
          {/* 👇 프로필 이미지 */}
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${m.role === "user" ? "/avatars/user.png" : "/avatars/hodu.png"})`,
            }}
          />
          {/* 👇 메시지 내용 */}
          <div>
            <div className="message-content">{m.content}</div>
            {m.time && (
              <span className="message-time">
                {m.time.toLocaleTimeString('ko-KR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            )}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageArea;
