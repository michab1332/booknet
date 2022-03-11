import React from 'react'
import { motion } from 'framer-motion'

export default function BookItem({ src, alt, onClick }) {
    return (
        <motion.img
            onClick={() => onClick()}
            src={src} alt={alt}
            style={{
                width: 120,
                height: 170,
                borderRadius: 4,
                marginRight: 10
            }}
            whileTap={{
                scale: .95
            }}
        />
    )
}
