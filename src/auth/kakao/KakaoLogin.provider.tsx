'use client';
import { ReactNode, useEffect } from 'react';

type KakaoLoginProviderProps = {
  children: ReactNode;
};

const KakaoLoginProvider = (props: KakaoLoginProviderProps) => {
  useEffect(() => {
    const head = document.getElementsByTagName('head').item(0);
    const kakaoScript = document.createElement('script');
    kakaoScript.setAttribute('type', 'text/javascript');
    kakaoScript.setAttribute(
      'src',
      `https://t1.kakaocdn.net/kakao_js_sdk/${process.env.NEXT_PUBLIC_KAKAO_JDK_VERSION}/kakao.min.js`,
    );
    kakaoScript.setAttribute(
      'integrity',
      `${process.env.NEXT_PUBLIC_KAKAO_JDK_INTEGRITY_VALUE}`,
    );
    kakaoScript.setAttribute('crossorigin', 'anonymous');
    head?.appendChild(kakaoScript);
  }, []);

  useEffect(() => {
    if (window.Kakao) {
      console.log(`kakao::`);
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      console.log(`kakao::${window.Kakao.isInitialized()}`);
    }
  }, [window.Kakao]);
  return <>{props.children}</>;
};

export default KakaoLoginProvider;
