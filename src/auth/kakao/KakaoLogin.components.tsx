import { HTMLAttributes } from 'react';

type _signInButtonProps = {} & HTMLAttributes<HTMLButtonElement>;
const _signInButton = (props: _signInButtonProps) => {
  function handleKakaoLogin() {
    window.Kakao?.Auth.authorize({
      redirectUri: 'http://localhost:3000/auth',
    });
  }

  return (
    <button {...props} onClick={handleKakaoLogin}>
      카카오로그인
    </button>
  );
};

export const KakaoLoginComponents = {
  SigninButton: _signInButton,
};
