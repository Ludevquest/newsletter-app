"use client"

import Image from 'next/image'
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useSendMail } from '@/hooks/useSendMail';
import { toast } from "react-toastify";
import { ArrowIcon } from '@/components/icons/arrow.icon';

export default function Home() {
  const [email, setEmail] = useState("")
  const { mutate, isError } = useSendMail()

  useEffect(() => {
    if (!isError) return;
    toast("Erro ao confirmar, verifique seu e-mail e tente novamente 😔" ,{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      type: "error"
    })
  }, [isError])

  const submit = () => {
    mutate({
      email,
    })
  }

  return (
    <main className={styles.main}>
      <Image 
      src= "/Ellipse 1.png"
      alt="Ludevquest foto de perfil"
      height={150}
      width={150}
      />
      <h1 className={styles.heading}>QuestNews</h1>
      <p className={styles.paragraph}>Fique por dentro de tudo que rola no mundo da tecnologia!</p>
      <div className={styles.inputWrapper}>
        <input 
        onChange={e => setEmail(e.target.value)} 
        className={styles.input}
        placeholder='digite seu e-mail aqui'>
        </input>
        <button onClick={submit} className={styles.btn}>
        <ArrowIcon />
        </button>
      </div>
      
    </main>
  )
}
