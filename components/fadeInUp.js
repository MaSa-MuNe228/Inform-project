const fadeInUp = {
    initial: {
        x: -150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.1
        }
    },
    exit: {
        x: -150,
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.1
        }
    }
}
export default fadeInUp;