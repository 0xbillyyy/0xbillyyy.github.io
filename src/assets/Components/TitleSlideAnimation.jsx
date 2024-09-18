import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const slicingVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '-100%' },
};

export function TitleSlideAnimation({ texts, color, size }) { // Destructuring texts from props
    const [textIndex, setTextIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const cycleText = async () => {
            await controls.start('animate');
            await new Promise(resolve => setTimeout(resolve, 2000));
            await controls.start('exit');
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            controls.start('initial');
        };
        const interval = setInterval(cycleText, 2000);
        return () => clearInterval(interval);
    }, [controls, texts]); // Ensure the effect updates if texts changes

    return (
        <motion.div
            variants={slicingVariants}
            initial="initial"
            animate={controls}
            exit="exit"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className={`font-bold text-gray-800 ${color}`}
            style={{ fontSize: size }}
        >
            {texts[textIndex]}
        </motion.div>
    );
}
