import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ text, large, outline, onClick }) {
    return (
        <motion.button
            onClick={() => onClick()}
            style={{
                width: large ? "100%" : 100,
                minHeight: 40,
                borderRadius: 5,
                outline: "none",
                border: outline ? "2px solid #fff" : "none",
                backgroundColor: outline ? "transparent" : "#fff",
                color: outline ? '#fff' : '#000',
                fontSize: 19,
                fontWeight: 900
            }}
            whileTap={{
                scale: .95
            }}
        > {text}</motion.button >
    )
}
