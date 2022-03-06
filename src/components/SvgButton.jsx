import React from 'react'
import { motion } from 'framer-motion'

export default function SvgButton({ src, text, alt, onClick }) {
    return (
        <motion.div onClick={() => onClick()} className="svgButtonContainer" style={{
            height: 40,
            width: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
            whileTap={{
                scale: .8
            }}
        >
            <img src={src} alt={alt} />
            <p style={{
                color: "#fff",
                fontSize: 9,
                userSelect: 'none',
            }}>{text}</p>
        </motion.div>
    )
}
