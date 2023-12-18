'use client';

import styles from './login.module.css';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function LoginPage() {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault;
  };

  return (
    <main>
      <form onSubmit={onSubmit} className={styles.loginBox}>
        <h2>로그인</h2>
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <button type="submit">LOG IN</button>
      </form>
    </main>
  );
}
