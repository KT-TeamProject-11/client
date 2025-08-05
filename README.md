# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---



# 디렉터리 구조
```
client/
├─ public/               # 파비콘 등 정적 에셋 폴더
├─ src/
│  ├─ assets/            # 이미지, 폰트 등 리소스 폴더
│  ├─ components/        # 재사용 가능한 리액트 컴포넌트 폴더
│  │  ├─ ChatWidget.jsx  # (가정) 챗봇의 모든 기능을 통합하는 메인 위젯
│  │  ├─ ChatInput.jsx   # 메시지 입력 및 전송 컴포넌트
│  │  ├─ Header.jsx      # 챗봇 상단 헤더 컴포넌트
│  │  ├─ MessageArea.jsx # 대화 내용이 표시되는 컴포넌트
│  │  └─ WelcomeScreen.jsx # 초기 메뉴 화면 컴포넌트
│  ├─ styles/            # CSS 스타일 폴더
│  │  └─ Chatbot.css     # 챗봇 전용 커스텀 스타일
│  ├─ App.jsx            # 메인 애플리케이션 컴포넌트
│  └─ main.jsx           # React 앱의 진입점 (DOM 렌더링)
├─ .env                   # (생성 필요) 환경 변수 파일
├─ index.html             # HTML 템플릿
├─ package.json           # 프로젝트 의존성 및 스크립트 정보
└─ README.md              # 프로젝트 문서 (이 파일)

```

## 포트 
```
package.json -> vite --port 8666 변경
```

