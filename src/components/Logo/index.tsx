import React, { useState } from "react";
import { motion } from "framer-motion";
//import "../styles.css"; // Ensure your styles include the Typekit import

const ByteAnchorLogo = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Colors with hover variants
    const colors = {
        primary: "#0074A6",       // Original blue
        primaryHover: "#00A3E0",  // Lighter blue for hover
        accent: "#FFFFFF",        // White
        text: "#0074A6",          // Original text color
        textHover: "#00A3E0",     // Hover text color
        underline: "#FFD700"      // Gold underline for contrast
    };

    return (
        <div
            className="fixed left-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="300">
                <defs>
                    <style>
                        @import url("https://use.typekit.net/oyo8exc.css");
                    </style>
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
                <motion.circle
                    cx="80"
                    cy="100"
                    r="50"
                    fill={colors.accent}
                    clipPath="url(#half)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: isHovered ? 1.05 : 1
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 300
                    }}
                />
                <clipPath id="half">
                    <rect x="80" y="50" width="50" height="100" />
                </clipPath>

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

                {/* Byte Anchor Text with Stencil Std Font */}
                <motion.text
                    x="145"
                    y="100"
                    fontSize="45"
                    fontWeight="700"
                    fontStyle="normal"
                    fill={isHovered ? colors.textHover : colors.text}
                    letterSpacing={'0px'}
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

                {/* Animated underline that appears on hover */}
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

                {/* Light glow beneath the text when hovered */}
                {isHovered && (
                    <motion.ellipse
                        cx="300"
                        cy="140"
                        rx="180"
                        ry="25"
                        fill={colors.primaryHover}
                        opacity="0.15"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </svg>
        </div>
    );
};

export default ByteAnchorLogo;
