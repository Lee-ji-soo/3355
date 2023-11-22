'use client';
import KakaoLoginProvider from '../src/auth/kakao/KakaoLogin.provider';
import { KakaoLoginComponents } from '../src/auth/kakao/KakaoLogin.components';

declare global {
  interface Window {
    Kakao: any;
  }
}

function Home() {
  return (
    <KakaoLoginProvider>
      <KakaoLoginComponents.SigninButton />
      <h1>{'삼삼오오'}</h1>;
    </KakaoLoginProvider>
  );
}

export default Home;
