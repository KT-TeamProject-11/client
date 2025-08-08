import React, { useState, useEffect } from 'react';
import Header from './Header';
import MessageArea from './MessageArea';
import WelcomeScreen from './WelcomeScreen';
import ChatInput from './ChatInput';

const pages = {
  소개: {
    title: '천안 도시재생지원센터(URC) 소개',
    content: [
      '2019년 설립된 천안 URC는 시민 주도의 도시재생을 지원·촉진하는 중간지원 조직입니다.',
      '미션: 주민 역량 강화, 지속가능한 마을 경제, 지역 자산 보존',
    ].join('\n\n'),
  },
  '오시는 길 & 연락처': {
    title: '오시는 길 & 연락처',
    content: [
      '주소: (31121) 충남 천안시 동남구 청수14로 20(https://www.cheonanurc.or.kr/131)',
      '대표전화: 041-000-1234',
      '이메일: info@cheonanurc.or.kr',
    ].join('\n'),
  },
  '투어 안내': {
    title: '천안 URC 투어 안내',
    content: [
      '일정: 매주 수요일 14:00 (약 90분)',
      '장소: 천안시 동남구 청수14로 20, 1층 로비 집결',
      '예약: 전주 금요일 18시까지 전화(041-000-1234) 또는 온라인 신청',
    ].join('\n'),
  },
  '아카데미 모집': {
    title: '도시재생 아카데미 2기 모집',
    content: [
      '기간: 9월 3일 ~ 10월 22일 (매주 화·목 19:00)',
      '내용: 기초·심화 강좌 8회 + 현장견학 1회',
      '접수: 8월 15일까지 구글폼(https://forms.gle/abc)',
    ].join('\n'),
  },
};

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    setShowMenu(true);
    setMessages([]);
  }, []);

  function selectPage(key) {
    setShowMenu(false);
    const page = pages[key];
    const pageContent = `${page.title}\n\n${page.content}`;
    setMessages([{ role: 'assistant', content: pageContent, time: new Date() }]);
  }

  async function sendQuery() {
    if (!input.trim()) return;

    // 1) 사용자 메시지 추가
    const userMsg = { role: 'user', content: input, time: new Date() };
    const newMsgs = showMenu ? [userMsg] : [...messages, userMsg];
    setShowMenu(false);
    setMessages(newMsgs);
    setInput('');

    // 2) 로딩 메시지 추가
    setMessages(prev => [
      ...prev,
      { role: 'assistant', content: '답변을 생성 중입니다...', time: null },
    ]);

    try {
      // 3) 백엔드 호출 (프록시 경로)
      const res = await fetch(`/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      });
      if (!res.ok) throw new Error('서버 응답 오류');

      // 4) 스트림 리더 가져오기
      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulated = '';

      // 5) 청크 단위로 읽어와 한 글자씩 누적 렌더
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;

        // 마지막 메시지(로딩 메시지) 교체
        setMessages(prev => {
          const msgs = [...prev];
          msgs[msgs.length - 1] = {
            role: 'assistant',
            content: accumulated,
            time: new Date(),
          };
          return msgs;
        });
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // 에러 시 마지막 메시지 교체
      setMessages(prev => {
        const msgs = [...prev];
        msgs[msgs.length - 1] = {
          role: 'assistant',
          content: '[오류] 연결에 실패했습니다.',
          time: new Date(),
        };
        return msgs;
      });
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendQuery();
    }
  }

  function resetToMenu() {
    setShowMenu(true);
    setMessages([]);
  }

  return (
    <div className="chatbot-widget">
      <Header title="천안 재생센터 챗봇" onReset={resetToMenu} />

      {showMenu ? (
        <WelcomeScreen pages={pages} onSelectPage={selectPage} />
      ) : (
        <MessageArea messages={messages} />
      )}

      <ChatInput
        input={input}
        setInput={setInput}
        onSend={sendQuery}
        onKeydown={handleKey}
      />
    </div>
  );
}
