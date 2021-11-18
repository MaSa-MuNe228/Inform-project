import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import fadeInUp from '../components/fadeInUp'
import table from '../public/Inform-table.png'
import model from '../public/Inform-model.png'
export default function doc3(){
    return (
        <motion.div exit='exit' initial="initial" animate="animate" >
            <motion.div className={styles.main} variants={fadeInUp}>
                <h1>Компьютерная модель</h1>
                <p>Таблица составлена на основе следующих данных:</p>
                <ul>
                    <li>v<sub>0</sub> = 18 м/с</li>
                    <li>α<sub>1,2,3,4</sub> = 20°, 40°, 60°, 80°</li>
                    <li>h = 2 м</li>
                    <li>s = 30 м</li>
                </ul>
                <div>
                    <Image src={table} className={styles.img1} width={550} height={400}/>
                    <Image src={model} className={styles.img2} width={550} height={400}/>
                </div>
            </motion.div>
        </motion.div>
    )
}