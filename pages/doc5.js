import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import fadeInUp from '../components/fadeInUp'
export default function doc5(){
    return (
        <motion.div exit='exit' initial="initial" animate="animate" >
            <motion.div className={styles.main} variants={fadeInUp}>
                <div className={styles.paragraph}>
                    <h1>Вывод</h1>
                <p>Мне удалось построить модель полета мячика, находящегося
                    под разными углами, летящего с определенной скоросью в 
                    стенку определенной высоты, находящуюся на определенном
                    расстоянии
                </p>
                </div>
            </motion.div>
        </motion.div>
    )
}