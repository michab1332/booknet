import { motion } from 'framer-motion'

import '../../assets/styles/BlurImage.css'

export default function BlurImage({ imgUrl }) {
    return (
        <div className="blurImageContainer">
            <img src={imgUrl} alt="blur" className="blurImageContainer__blurImg" />
            <motion.img
                initial={{
                    scale: 0,
                    left: '50%',
                    top: '50%',
                    translateY: '-50%',
                    translateX: '-50%'
                }}
                animate={{
                    scale: 1,
                }}
                src={imgUrl}
                alt="notBlur"
                className="blurImageContainer__img" />
        </div>
    )
}
