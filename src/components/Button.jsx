import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ text, large, outline, onClick }) {
    return (
        <motion.button
            onClick={() => onClick()}
            style={{
                borderRadius: 5,
                outline: "none",
                border: "2px solid #fff",
                backgroundColor: outline ? "transparent" : "#fff",
                color: outline ? '#fff' : '#000',
                fontSize: 19,
                fontWeight: 900,
                padding: "7px 32px"
            }}
            whileTap={{
                scale: .95
            }}
        > {text}</motion.button >
    )
}
