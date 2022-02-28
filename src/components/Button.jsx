import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ text }) {
    return (
        <motion.button
            style={{
                width: 100,
                borderRadius: 5,
                outline: "none",
                border: "none",
                backgroundColor: '#FFFFFC',
                fontSize: 19,
                fontWeight: "bold"
            }}
            whileTap={{
                scale: .9
            }}
        >{text}</motion.button>
    )
}
