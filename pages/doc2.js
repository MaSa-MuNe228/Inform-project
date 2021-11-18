import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import fadeInUp from '../components/fadeInUp'
export default function doc2(){
    return (
        <motion.div exit='exit' initial="initial" animate="animate" >
            <motion.div className={styles.main} variants={fadeInUp}>
                <h1>Формальная модель</h1>
                <p>Обозначения</p>
                <ol>
                    <li>Начальная скорость - V<sub>0</sub></li>
                    <li>Угол - α</li>
                    <li>Высота стенки - h</li>
                    <li>Расстояние до стенки - s</li>
                    <li>x - расстояние, которое пролетел мяч.</li>
                    <li>t - время, за которое мяч преодолеет расстояние x</li>
                    <li>y - высота, на которой находится мяч в момент времени t, на расстоянии x.</li>
                </ol>
                <p>Формулы, необходимые для построения модели:</p>
                <ol>
                    <li>t = x / (v<sub>0</sub> * cosα)</li>
                    <li>y = v<sub>0</sub> * sinα * t - (g * t<sup>2</sup>) / 2</li>
                </ol>
            </motion.div>
        </motion.div>
    )
}