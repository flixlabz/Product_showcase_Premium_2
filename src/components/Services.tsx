import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Wrench, Shield, Cpu, Settings, Target } from 'lucide-react';

const services = [
    {
        title: "Machine Maintenance",
        description: "Comprehensive preventive maintenance programs to keep your industrial equipment running at peak performance.",
        icon: <Wrench className="w-8 h-8" />,
        color: "from-orange-500/20 to-orange-500/0",
        accent: "text-orange-500",
        bgIcon: "bg-orange-500/10"
    },
    {
        title: "Equipment Protection",
        description: "Extended warranty and protection plans to safeguard your valuable machinery investments.",
        icon: <Shield className="w-8 h-8" />,
        color: "from-blue-500/20 to-blue-500/0",
        accent: "text-blue-500",
        bgIcon: "bg-blue-500/10"
    },
    {
        title: "CNC Retrofitting",
        description: "Modernize your conventional machines with advanced CNC control systems and automation.",
        icon: <Cpu className="w-8 h-8" />,
        color: "from-purple-500/20 to-purple-500/0",
        accent: "text-purple-500",
        bgIcon: "bg-purple-500/10"
    },
    {
        title: "Precision Calibration",
        description: "ISO-certified calibration services ensuring your machines meet the highest accuracy standards.",
        icon: <Settings className="w-8 h-8" />,
        color: "from-green-500/20 to-green-500/0",
        accent: "text-green-500",
        bgIcon: "bg-green-500/10"
    },
    {
        title: "Expert Installation",
        description: "Professional installation and commissioning services for optimal machine performance from day one.",
        icon: <Target className="w-8 h-8" />,
        color: "from-red-500/20 to-red-500/0",
        accent: "text-red-500",
        bgIcon: "bg-red-500/10"
    }
];

const TimelineDot = ({ index }: { index: number }) => {
    const dotRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: dotRef,
        offset: ["start end", "end start"]
    });

    // Mechanical assembly effect: parts move into position
    const yTransform = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [180, 0, -180]);
    const ySpring = useSpring(yTransform, { stiffness: 60, damping: 20 });
    const scaleSpring = useSpring(scale, { stiffness: 80, damping: 15 });

    return (
        <motion.div
            ref={dotRef}
            style={{ y: ySpring, scale: scaleSpring, rotate }}
            className="absolute left-1/2 -translate-x-1/2 w-12 h-12 z-20 hidden md:flex items-center justify-center pointer-events-none"
        >
            {/* Metallic Bolt/Nut */}
            <div className="relative w-8 h-8">
                {/* Hexagon shape for bolt head */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] border border-slate-500/50"
                    style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                    }}>
                    {/* Center hole */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-800 rounded-full shadow-inner" />
                    </div>
                </div>
                {/* Metallic shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-sm opacity-60"
                    style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                    }} />
            </div>

            {/* Mechanical glow pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                }}
                className="absolute inset-0 bg-blue-400/30 rounded-full blur-md"
            />

            {/* Rotating gear effect */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-20"
            >
                <div className="w-full h-full" style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.3) 30deg, transparent 60deg, rgba(255,255,255,0.3) 90deg, transparent 120deg, rgba(255,255,255,0.3) 150deg, transparent 180deg, rgba(255,255,255,0.3) 210deg, transparent 240deg, rgba(255,255,255,0.3) 270deg, transparent 300deg, rgba(255,255,255,0.3) 330deg, transparent 360deg)'
                }} />
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

    return (
        <section id="services" ref={containerRef} className="py-32 relative overflow-hidden blueprint-bg">
            {/* Gradient blend overlay for smooth transition from previous section */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] via-[#0A0E27]/80 to-transparent z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-40 relative">
                    {/* Metallic Board Container */}
                    <motion.div
                        initial={{ y: 0, rotateX: 0 }}
                        whileInView={{ y: -30, rotateX: 5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative px-16 py-12 rounded-3xl"
                        style={{
                            perspective: '1000px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Metallic Board Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] border-2 border-slate-500/50" />

                        {/* Metallic shine overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-60" />

                        {/* Brushed metal texture */}
                        <div className="absolute inset-0 rounded-3xl opacity-30" style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                        }} />

                        {/* Corner Screws - Animated to fall */}
                        {[
                            { top: '12px', left: '12px', delay: 0 },
                            { top: '12px', right: '12px', delay: 0.1 },
                            { bottom: '12px', left: '12px', delay: 0.2 },
                            { bottom: '12px', right: '12px', delay: 0.3 }
                        ].map((pos, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 1, y: 0, rotate: 0 }}
                                whileInView={{
                                    opacity: 0,
                                    y: 200,
                                    rotate: 720,
                                    scale: 0.5
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 1.2,
                                    delay: pos.delay,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                                className="absolute w-6 h-6 z-20"
                                style={pos}
                            >
                                {/* Screw head */}
                                <div className="relative w-full h-full">
                                    {/* Hexagon screw head */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-700 shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)]"
                                        style={{
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                                        }}
                                    >
                                        {/* Phillips head cross */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-3 h-0.5 bg-slate-900/60 absolute" />
                                            <div className="w-0.5 h-3 bg-slate-900/60 absolute" />
                                        </div>
                                    </div>
                                    {/* Shine */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"
                                        style={{
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {/* Screw holes (remain after screws fall) */}
                        {[
                            { top: '12px', left: '12px' },
                            { top: '12px', right: '12px' },
                            { bottom: '12px', left: '12px' },
                            { bottom: '12px', right: '12px' }
                        ].map((pos, i) => (
                            <motion.div
                                key={`hole-${i}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                                className="absolute w-6 h-6 rounded-full bg-slate-900/80 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] border border-slate-800"
                                style={pos}
                            />
                        ))}

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-8xl font-black mb-8 tracking-tighter uppercase relative z-10"
                        >
                            <span className="bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(148,163,184,0.5)]">
                                Precision
                            </span>{' '}
                            <span className="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent italic drop-shadow-[0_2px_12px_rgba(59,130,246,0.6)]">
                                Capabilities
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '160px' }}
                            viewport={{ once: true }}
                            className="h-2.5 bg-gradient-to-r from-slate-400 via-blue-400 to-slate-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-10"
                        />
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Industrial Background line - metallic */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600 hidden md:block shadow-[0_0_10px_rgba(148,163,184,0.3)]" />

                    {/* Glowing Progress Line - metallic blue */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 z-10 hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.3)]"
                    />

                    <div className="space-y-48">
                        {services.map((service, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={service.title} className="relative flex items-center w-full">
                                    {/* Connection Dot with Mechanical Assembly Effect */}
                                    <TimelineDot index={index} />

                                    {/* Card Container */}
                                    <div className={`flex w-full min-h-[300px] ${isLeft ? 'justify-start pr-8 md:pr-32 md:w-1/2' : 'justify-end pl-8 md:pl-32 md:w-1/2 md:ml-auto'}`}>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: isLeft ? -120 : 120,
                                                scale: 0.85,
                                                rotateY: isLeft ? -15 : 15
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                scale: 1,
                                                rotateY: 0
                                            }}
                                            viewport={{ once: true, margin: "-150px" }}
                                            transition={{
                                                duration: 1.2,
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 15,
                                                delay: index * 0.1
                                            }}
                                            className={`w-full max-w-lg group cursor-target ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                                            style={{ perspective: '1000px' }}
                                        >
                                            <div className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.04] border-2 border-slate-400/30 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.1)] group-hover:border-blue-400/50 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]">
                                                {/* Metallic shine overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                                {/* Animated scan line effect */}
                                                <motion.div
                                                    initial={{ y: '-100%' }}
                                                    animate={{ y: '200%' }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: index * 0.5
                                                    }}
                                                    className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100"
                                                />

                                                <div className={`relative z-10 flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                                                    {/* Metallic icon container */}
                                                    <div className={`mb-8 p-6 w-fit rounded-2xl md:rounded-3xl transition-all duration-700 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 ${service.accent} group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(59,130,246,0.4)] group-hover:from-blue-400 group-hover:via-blue-500 group-hover:to-blue-600`}>
                                                        {service.icon}
                                                    </div>
                                                    <h3 className="text-2xl md:text-5xl font-black mb-6 text-slate-100 group-hover:text-blue-300 transition-colors uppercase tracking-tighter leading-[0.9]">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-lg md:text-2xl text-slate-300/70 leading-relaxed font-medium transition-colors group-hover:text-slate-100/90">
                                                        {service.description}
                                                    </p>
                                                </div>

                                                {/* Industrial corner brackets - metallic */}
                                                <div className="absolute top-6 right-6 w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-700">
                                                    <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-slate-400 to-transparent" />
                                                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-slate-400 to-transparent" />
                                                    <div className="absolute top-0 right-0 w-2 h-2 bg-slate-400 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.8)]" />
                                                </div>
                                                <div className="absolute bottom-6 left-6 w-12 h-12 opacity-60 group-hover:opacity-100 transition-all duration-700">
                                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-400 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-slate-400 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-slate-400 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.8)]" />
                                                </div>

                                                {/* Rivets in corners */}
                                                <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-inner" />
                                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-inner" />
                                                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-inner" />
                                                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-inner" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
