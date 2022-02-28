import React from 'react'
import { motion } from 'framer-motion'

export default function SvgButton({ src, text, alt }) {
    return (
        <motion.div className="svgButtonContainer" style={{
            height: 40,
            width: 40,
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
                fontSize: 9
            }}>{text}</p>
        </motion.div>
    )
}
