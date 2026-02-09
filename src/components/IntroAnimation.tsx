import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [stage, setStage] = useState<'tightening' | 'reveal' | 'complete'>('tightening');

    useEffect(() => {
        // Tightening animation for 2 seconds
        const tighteningTimer = setTimeout(() => {
            setStage('reveal');
        }, 2500);

        // Reveal text for 1.5 seconds then complete
        const revealTimer = setTimeout(() => {
            setStage('complete');
            setTimeout(onComplete, 500);
        }, 4500);

        return () => {
            clearTimeout(tighteningTimer);
            clearTimeout(revealTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {stage !== 'complete' && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center overflow-hidden"
                >
                    {/* Metallic shine effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0,transparent_50%)]" />

                    <div className="relative">
                        {/* Nut and Bolt Assembly */}
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            {/* Bolt head (hexagon) */}
                            <motion.div
                                className="absolute w-32 h-32 flex items-center justify-center"
                                style={{
                                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                                }}
                            >
                                {/* Hexagon nut */}
                                <div
                                    className="w-full h-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 shadow-2xl"
                                    style={{
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.3)'
                                    }}
                                />

                                {/* Center hole */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-inner" />
                                </div>

                                {/* Hex socket detail */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        clipPath: 'polygon(30% 25%, 70% 25%, 85% 50%, 70% 75%, 30% 75%, 15% 50%)'
                                    }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800" />
                                </div>
                            </motion.div>

                            {/* Allen Key (Angle Key) */}
                            <motion.div
                                className="absolute"
                                initial={{ rotate: 0 }}
                                animate={stage === 'tightening' ? {
                                    rotate: [0, 360, 720, 1080],
                                } : { rotate: 1080 }}
                                transition={{
                                    duration: 2.5,
                                    ease: [0.45, 0, 0.55, 1],
                                    times: [0, 0.33, 0.66, 1]
                                }}
                                style={{ transformOrigin: 'center' }}
                            >
                                {/* L-shaped Allen key */}
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    {/* Long arm */}
                                    <div
                                        className="absolute w-32 h-3 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-lg"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.5)'
                                        }}
                                    />

                                    {/* Short arm (vertical) */}
                                    <div
                                        className="absolute w-3 h-12 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 rounded-full shadow-lg"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -100%)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.5)'
                                        }}
                                    />

                                    {/* Hex tip */}
                                    <div
                                        className="absolute w-4 h-4 bg-gray-600"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Tightening particles */}
                            {stage === 'tightening' && (
                                <>
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-orange-400 rounded-full"
                                            initial={{
                                                x: 0,
                                                y: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                x: Math.cos((i * Math.PI * 2) / 8) * 80,
                                                y: Math.sin((i * Math.PI * 2) / 8) * 80,
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: 3,
                                                delay: i * 0.1,
                                                ease: "easeOut"
                                            }}
                                        />
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Company Name Reveal */}
                        <AnimatePresence>
                            {stage === 'reveal' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.34, 1.56, 0.64, 1]
                                    }}
                                    className="absolute -bottom-32 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                >
                                    <h1 className="text-7xl font-black tracking-tighter text-white uppercase">
                                        ADARSH <span className="text-emerald-400 italic">WORLD</span>
                                    </h1>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mt-4"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Metallic floor reflection */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;
