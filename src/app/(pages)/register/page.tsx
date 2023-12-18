'use client';

import styles from './register.module.css';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function RegisterPage() {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault;
  };

  return (
    <main>
      <form onSubmit={onSubmit} className={styles.registerBox}>
        <h2>회원가입</h2>
        <input type="name" name="name" placeholder="email" required />
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <input type="confirmPassword" name="confirmPassword" placeholder="confirmPassword" required />
        <button type="submit">REGISTER</button>
      </form>
    </main>
  );
}
