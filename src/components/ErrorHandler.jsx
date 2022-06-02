import React from 'react'

export default function ErrorHandler({ error }) {
    return (
        <div style={{
            backgroundColor: "red",
            color: "#fff",
            height: '3rem',
            width: "70%",
            maxWidth: "500px",
            borderRadius: "5px",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: "1.2rem",
            fontWeight: "bold",
        }}>{error}</div>
    )
}
