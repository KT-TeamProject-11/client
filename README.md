<<<<<<< HEAD
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
├─ public/               # 정적 에셋 (파비콘 등)
├─ src/
│  ├─ components/        # 재사용 가능한 리액트 컴포넌트
│  │  └─ ChatWidget.jsx  # 메인 챗봇 위젯
│  ├─ styles/            # CSS 스타일
│  │  └─ Chatbot.css
│  ├─ App.jsx            # 메인 애플리케이션 컴포넌트
│  └─ main.jsx           # 앱 진입점 (DOM 렌더링)
├─ .env                   # 환경 변수 파일
├─ index.html             # HTML 템플릿
├─ package.json           # 프로젝트 의존성 및 스크립트
└─ README.md              # 프로젝트 문서 (이 파일)
```

## 포트 
```
package.json -> vite --port 8666 변경
```

---

## UI 참고
## UI 참고

<table style="width:100%; border-collapse:collapse;">
  <tr>
    <td style="width:50%; padding:4px;">
      <img src="https://github.com/user-attachments/assets/563901c1-2dee-4b62-ab1c-56df85286900" alt="1" style="width:100%; height:auto; display:block;" />
    </td>
    <td style="width:50%; padding:4px;">
      <img src="https://github.com/user-attachments/assets/11f48bed-fca1-4eb1-b46c-f050666ed413" alt="2" style="width:100%; height:auto; display:block;" />
    </td>
  </tr>
  <tr>
    <td style="width:50%; padding:4px;">
      <img src="https://github.com/user-attachments/assets/a93434c7-c354-4997-b092-4bcec5d632bc" alt="3" style="width:100%; height:auto; display:block;" />
    </td>
    <td style="width:50%; padding:4px;">
      <img src="https://github.com/user-attachments/assets/eb09901a-ab2c-44bf-b6ee-d909e5d51ff4" alt="4" style="width:100%; height:auto; display:block;" />
    </td>
  </tr>
</table>
