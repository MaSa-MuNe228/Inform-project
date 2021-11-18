import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar () {
    return (
        <header className={styles.header}>
            <div className={styles.footer}>
                <Link href="/">
                    <a>Главная</a>
                </Link>
                <Link href="/doc1">
                    <a>Описательная модель</a>
                </Link>
                <Link href="/doc2" >
                    <a>Формальная модель</a>
                </Link>
                <Link href="/doc3">
                    <a>Компьютерная модель</a>
                </Link>
                <Link href="/doc4">
                    <a>Компьютерный эксперимент</a>
                </Link>
                <Link href="/doc5">
                    <a>Вывод</a>
                </Link>
            </div>
        </header>
    )
}