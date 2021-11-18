import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fadeInUp from '../components/fadeInUp'

export default function Home() {
  return (
    <motion.div exit='exit' initial="initial" animate="animate" >
      <motion.div className={styles.main} variants={fadeInUp}>
        <h1>Проект по информатике</h1>
        <h2>Моделирование полета мяча с определенными условиями.</h2>
        <h2>Сделал: Краснов Кирилл Алексеевич 11А</h2>
      </motion.div>
    </motion.div>
  )
}
