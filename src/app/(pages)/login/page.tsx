'use client';

import styles from './login.module.css';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SVAPI}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert('로그인에 성공했습니다.');
      } else {
        alert(`로그인에 실패했습니다: ${data.errorMessage}`);
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인중 오류가 발생했습니다.');
    }
  };

  return (
    <main>
      <form onSubmit={onSubmit} className={styles.loginBox}>
        <h2>로그인</h2>
        <input type="email" name="email" placeholder="email" value={email} onChange={onChange} required />
        <input type="password" name="password" placeholder="password" value={password} onChange={onChange} required />
        <button type="submit">LOG IN</button>
      </form>
    </main>
  );
}
