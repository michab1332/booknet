import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingIcon() {
    return (
        <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
                animate={{ scale: [1, .8, 1] }}
                transition={{ type: "string", duration: 1, repeat: "Infinity" }}
                width="10" height="40" rx="2" fill="#00A7E1" />
            <motion.rect
                animate={{ scale: [1, .8, 1] }}
                transition={{ type: "string", duration: 1, repeat: "Infinity", delay: .5 }}
                x="16" width="10" height="40" rx="2" fill="#00A7E1" fillOpacity="0.75" />
            <motion.rect
                animate={{ scale: [1, .8, 1] }}
                transition={{ type: "string", duration: 1, repeat: "Infinity", delay: 1 }}
                x="32" width="10" height="40" rx="2" fill="#00A7E1" fillOpacity="0.5" />
        </svg>

    )
}
