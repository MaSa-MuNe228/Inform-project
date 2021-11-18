import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import fadeInUp from '../components/fadeInUp'
import s0 from '../public/s0.png'
import s1 from '../public/s1.png'
import s2 from '../public/s2.png'
export default function doc4(){
    return (
        <motion.div exit='exit' initial="initial" animate="animate" >
            <motion.div className={styles.main} variants={fadeInUp}>
                <h1>Компьютерный эксперимент</h1>
                <p>Исходя из данный, следует рассмотреть отдельные случаи:</p>
                <ol>
                    <li>Когда мячик попадает точно в верхний край стенки. (s=2)</li>
                    <li>Когда мячик попадает в середину стенки. (s=1) </li>
                    <li>Когда мячик попадает точно в угол между землей и стеной. (s=0)</li>
                </ol>
                <ol>
                    <li><p>Для попадания мяча в верхний край стены, необходимо 
                        бросить его под углом 40,1°</p>
                        </li>
                        <Image src={s2}/>
                    <li><p>Для попадания мяча в середину стены, 
                        необходимо бросить его под кглом 36°</p>
                        </li>
                        <Image src={s1}/>
                    <li><p>Для попадания мяча в угол меджу землей и стеной, необходимо бросить
                        его под углом 32,57°</p>
                        </li>
                        <Image src={s0}/>
                </ol>
            </motion.div>
        </motion.div>
    )
}