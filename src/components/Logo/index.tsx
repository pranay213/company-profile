import React, { useState } from "react";
import { motion } from "framer-motion";

const ByteAnchorLogo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const colors = {
        primary: "#0074A6",
        primaryHover: "#00A3E0",
        accent: "#FFFFFF",
        text: "#0074A6",
        textHover: "#00A3E0",
        underline: "#FFD700",
        techText: "#FFFFFF",  // White color for technologies
    };

    return (
        <div
            className="fixed left-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="300">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation={isHovered ? "3" : "0"} result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Circle with BA initials */}
                <motion.circle
                    cx="80"
                    cy="100"
                    r="50"
                    fill={isHovered ? colors.primaryHover : colors.primary}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: isHovered ? 1.05 : 1
                    }}
                    transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300
                    }}
                />

                {/* Initials B & A */}
                <motion.text
                    x="40"
                    y="115"
                    fontSize="40"
                    fill={colors.accent}
                    fontFamily="Spectral, serif"
                    fontWeight="500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.5
                    }}
                >
                    B
                </motion.text>
                <motion.text
                    x="90"
                    y="115"
                    fontSize="40"
                    fill={colors.primary}
                    fontFamily="Spectral, serif"
                    fontWeight="500"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: isHovered ? 1.1 : 1
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.7
                    }}
                >
                    A
                </motion.text>

                {/* Byte Anchor Text */}
                <motion.text
                    x="145"
                    y="100"
                    fontSize="45"
                    fontWeight="700"
                    fill={isHovered ? colors.textHover : colors.text}
                    fontFamily="stencil-std, sans-serif"
                    filter={isHovered ? "url(#glow)" : ""}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 1
                    }}
                >
                    BYTE ANCHOR
                </motion.text>

                {/* Animated underline */}
                <motion.rect
                    x="150"
                    y="125"
                    width="300"
                    height="4"
                    rx="2"
                    fill={colors.underline}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                        scaleX: isHovered ? 1 : 0,
                        opacity: isHovered ? 0.8 : 0
                    }}
                    style={{ transformOrigin: '0% 50%' }}
                    transition={{ duration: 0.4 }}
                />

                {/* Technologies below Byte Anchor */}
                <motion.text
                    x="150"
                    y="160"
                    fontSize="20"
                    fontWeight="600"
                    fill={colors.techText}
                    fontFamily="Arial, sans-serif"
                    textAnchor="start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 160 : 170
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 1.2
                    }}
                    style={{ textShadow: "2px 2px 4px black" }}
                >
                    React | Framer Motion | SVG | UI Design
                </motion.text>
            </svg>
        </div>
    );
};

export default ByteAnchorLogo;
