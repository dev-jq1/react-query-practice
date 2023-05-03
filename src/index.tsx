import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// QueryClient(): React Query의 핵심 클래스
// query, mutation 등을 관리
// 캐싱도 하기 때문에 데이터를 효율적으로 가져오고 업데이트를 하는 데에 사용
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    {/* 개발할 때만 사용
          애플리케이션에서 수행되는 쿼리나 뮤테이션의 상태를 모니터링해주는 도구
      */}
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
