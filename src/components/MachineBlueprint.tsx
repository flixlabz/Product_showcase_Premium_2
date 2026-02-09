import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MachineBlueprint = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform values for different parts revealing (12 parts)
    const opacity1 = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);
    const opacity5 = useTransform(scrollYProgress, [0.32, 0.40], [0, 1]);
    const opacity6 = useTransform(scrollYProgress, [0.40, 0.48], [0, 1]);
    const opacity7 = useTransform(scrollYProgress, [0.48, 0.56], [0, 1]);
    const opacity8 = useTransform(scrollYProgress, [0.56, 0.64], [0, 1]);
    const opacity9 = useTransform(scrollYProgress, [0.64, 0.72], [0, 1]);
    const opacity10 = useTransform(scrollYProgress, [0.72, 0.80], [0, 1]);
    const opacity11 = useTransform(scrollYProgress, [0.80, 0.88], [0, 1]);
    const opacity12 = useTransform(scrollYProgress, [0.88, 0.96], [0, 1]);

    // Detailed machine parts with technical specifications (12 components)
    // Arranged around the diagram in a circular pattern - no stacking
    const machineParts = [
        {
            id: 1,
            name: "Headstock Assembly",
            description: "Main spindle housing with precision bearings. Supports workpiece rotation at variable speeds (50-4000 RPM). Contains gear train and motor mount.",
            labelPos: { top: '5%', left: '1%' },
            pointFrom: { x: '18%', y: '12%' },
            pointTo: { x: '21%', y: '50%' },
            opacity: opacity1
        },
        {
            id: 2,
            name: "Spindle Nose",
            description: "Precision ground taper (MT4/MT5). Provides accurate mounting for chuck or faceplate. TIR < 0.001mm.",
            labelPos: { top: '20%', left: '0%' },
            pointFrom: { x: '17%', y: '28%' },
            pointTo: { x: '23%', y: '49%' },
            opacity: opacity2
        },
        {
            id: 3,
            name: "Three-Jaw Chuck",
            description: "Self-centering chuck mechanism. Holds cylindrical workpieces up to 250mm diameter. Hardened steel jaws with reversible gripping surfaces.",
            labelPos: { top: '38%', left: '0%' },
            pointFrom: { x: '17%', y: '46%' },
            pointTo: { x: '25%', y: '50%' },
            opacity: opacity3
        },
        {
            id: 4,
            name: "Bed Ways",
            description: "Hardened and precision-ground V-ways and flat way. Provides linear guidance for carriage. Induction hardened to HRC 55-60 for wear resistance.",
            labelPos: { top: '56%', left: '1%' },
            pointFrom: { x: '18%', y: '64%' },
            pointTo: { x: '40%', y: '68%' },
            opacity: opacity4
        },
        {
            id: 5,
            name: "Saddle",
            description: "Rides on bed ways. Houses cross-slide and compound rest. Precision scraped surfaces ensure smooth movement and accuracy.",
            labelPos: { bottom: '18%', left: '15%' },
            pointFrom: { x: '30%', y: '80%' },
            pointTo: { x: '56%', y: '60%' },
            opacity: opacity5
        },
        {
            id: 6,
            name: "Cross Slide",
            description: "Perpendicular movement to spindle axis. Graduated dial with 0.02mm resolution. Provides precise depth of cut control.",
            labelPos: { bottom: '18%', left: '38%' },
            pointFrom: { x: '50%', y: '80%' },
            pointTo: { x: '56%', y: '55%' },
            opacity: opacity6
        },
        {
            id: 7,
            name: "Compound Rest",
            description: "Swiveling tool holder base. Adjustable angle (±90°) for taper turning. Graduated scale for precise angular positioning.",
            labelPos: { bottom: '18%', right: '23%' },
            pointFrom: { x: '62%', y: '80%' },
            pointTo: { x: '58%', y: '47%' },
            opacity: opacity7
        },
        {
            id: 8,
            name: "Tool Post",
            description: "Quick-change tool holder system. Accepts standard tool bits up to 20mm square. Repeatable positioning within 0.005mm.",
            labelPos: { top: '56%', right: '1%' },
            pointFrom: { x: '82%', y: '64%' },
            pointTo: { x: '60%', y: '47%' },
            opacity: opacity8
        },
        {
            id: 9,
            name: "Apron & Feed Mechanism",
            description: "Contains power feed gearbox. Automatic longitudinal feed (0.05-0.5mm/rev). Half-nut for thread cutting operations.",
            labelPos: { bottom: '18%', right: '1%' },
            pointFrom: { x: '82%', y: '80%' },
            pointTo: { x: '56%', y: '65%' },
            opacity: opacity9
        },
        {
            id: 10,
            name: "Tailstock Assembly",
            description: "Movable support for long workpieces. Contains MT3 taper quill with 100mm travel. Lockable to bed for drilling operations.",
            labelPos: { top: '5%', right: '0%' },
            pointFrom: { x: '83%', y: '12%' },
            pointTo: { x: '81%', y: '54%' },
            opacity: opacity10
        },
        {
            id: 11,
            name: "Tailstock Quill",
            description: "Telescoping support shaft. Hand-wheel operated with graduated dial. Accepts drill chucks, centers, and boring tools.",
            labelPos: { top: '20%', right: '0%' },
            pointFrom: { x: '83%', y: '28%' },
            pointTo: { x: '72%', y: '54%' },
            opacity: opacity11
        },
        {
            id: 12,
            name: "Lead Screw",
            description: "Precision ACME thread (8TPI). Drives carriage for thread cutting. Engaged via half-nut lever for synchronized feed.",
            labelPos: { top: '38%', right: '0%' },
            pointFrom: { x: '83%', y: '46%' },
            pointTo: { x: '50%', y: '75%' },
            opacity: opacity12
        }
    ];

    return (
        <section ref={containerRef} className="py-16 relative min-h-[120vh] blueprint-bg overflow-hidden">
            {/* Gradient blend overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0E27] via-[#0A0E27]/80 to-transparent z-0 pointer-events-none" />

            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6 w-full relative">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-2">
                            <span className="bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(148,163,184,0.5)]">
                                Technical
                            </span>{' '}
                            <span className="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent italic drop-shadow-[0_2px_12px_rgba(59,130,246,0.6)]">
                                Specifications
                            </span>
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base">Precision Lathe Machine - Component Analysis</p>
                    </motion.div>

                    {/* Machine Diagram Container */}
                    <div className="relative w-full h-[80vh] flex items-center justify-center">
                        {/* Blueprint Grid Overlay */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                                    </pattern>
                                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                        <rect width="100" height="100" fill="url(#smallGrid)" />
                                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        {/* Complex Lathe Machine Diagram */}
                        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                            <svg viewBox="0 0 800 400" className="w-full h-auto max-h-full" xmlns="http://www.w3.org/2000/svg">
                                {/* Bed - Main Base */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M 30 270 L 770 270 L 770 290 L 30 290 Z"
                                    fill="rgba(71, 85, 105, 0.4)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="2"
                                />

                                {/* Bed Ways - V-shaped guides */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: 0.1, ease: "easeInOut" }}
                                    d="M 50 270 L 750 270 M 50 275 L 750 275"
                                    fill="none"
                                    stroke="rgba(59, 130, 246, 0.6)"
                                    strokeWidth="2"
                                />

                                {/* Lead Screw */}
                                <motion.line
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                                    x1="50" y1="300" x2="700" y2="300"
                                    stroke="rgba(148, 163, 184, 0.7)"
                                    strokeWidth="4"
                                />

                                {/* Lead screw threads */}
                                {[...Array(30)].map((_, i) => (
                                    <motion.line
                                        key={`thread-${i}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.4 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + i * 0.01 }}
                                        x1={50 + i * 22} y1="297"
                                        x2={55 + i * 22} y2="303"
                                        stroke="rgba(148, 163, 184, 0.5)"
                                        strokeWidth="1"
                                    />
                                ))}

                                {/* Headstock - Complex shape */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                                    d="M 50 270 L 50 140 L 180 140 L 180 270 Z"
                                    fill="rgba(71, 85, 105, 0.5)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="3"
                                />

                                {/* Headstock details */}
                                <motion.rect
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    x="60" y="160" width="40" height="80"
                                    fill="rgba(51, 65, 85, 0.6)"
                                    stroke="rgba(148, 163, 184, 0.6)"
                                    strokeWidth="1"
                                />

                                {/* Spindle extending from headstock */}
                                <motion.rect
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                                    x="180" y="195" width="20" height="10"
                                    fill="rgba(100, 116, 139, 0.7)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="2"
                                />

                                {/* Chuck - Three jaw with detail */}
                                <motion.circle
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
                                    cx="200" cy="200"
                                    r="40"
                                    fill="rgba(51, 65, 85, 0.6)"
                                    stroke="rgba(59, 130, 246, 0.9)"
                                    strokeWidth="3"
                                />

                                {/* Chuck jaws - 3 jaws */}
                                {[0, 120, 240].map((angle, i) => (
                                    <motion.g key={`jaw-${i}`}>
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: "easeOut" }}
                                            d={`M ${200 + Math.cos(angle * Math.PI / 180) * 15} ${200 + Math.sin(angle * Math.PI / 180) * 15} 
                                                L ${200 + Math.cos(angle * Math.PI / 180) * 40} ${200 + Math.sin(angle * Math.PI / 180) * 40}`}
                                            stroke="rgba(148, 163, 184, 0.9)"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                        />
                                        <motion.rect
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                                            x={200 + Math.cos(angle * Math.PI / 180) * 35 - 4}
                                            y={200 + Math.sin(angle * Math.PI / 180) * 35 - 6}
                                            width="8" height="12"
                                            fill="rgba(100, 116, 139, 0.9)"
                                            stroke="rgba(148, 163, 184, 0.7)"
                                            strokeWidth="1"
                                        />
                                    </motion.g>
                                ))}

                                {/* Chuck center detail */}
                                <motion.circle
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    cx="200" cy="200" r="8"
                                    fill="rgba(30, 41, 59, 0.9)"
                                    stroke="rgba(148, 163, 184, 0.5)"
                                    strokeWidth="1"
                                />

                                {/* Saddle/Carriage Assembly */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 1.3, ease: "easeInOut" }}
                                    d="M 400 270 L 400 210 L 500 210 L 500 270 Z"
                                    fill="rgba(71, 85, 105, 0.5)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="3"
                                />

                                {/* Apron detail */}
                                <motion.rect
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    x="410" y="240" width="80" height="30"
                                    fill="rgba(51, 65, 85, 0.6)"
                                    stroke="rgba(148, 163, 184, 0.7)"
                                    strokeWidth="2"
                                    rx="2"
                                />

                                {/* Cross slide */}
                                <motion.rect
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 1.6, ease: "easeInOut" }}
                                    x="420" y="200" width="60" height="20"
                                    fill="rgba(71, 85, 105, 0.6)"
                                    stroke="rgba(59, 130, 246, 0.8)"
                                    strokeWidth="2"
                                />

                                {/* Compound rest */}
                                <motion.polygon
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 1.7, ease: "easeInOut" }}
                                    points="440,200 460,200 470,185 450,185"
                                    fill="rgba(71, 85, 105, 0.7)"
                                    stroke="rgba(59, 130, 246, 0.9)"
                                    strokeWidth="2"
                                />

                                {/* Tool post */}
                                <motion.rect
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.8, ease: "backOut" }}
                                    x="455" y="175" width="15" height="15"
                                    fill="rgba(59, 130, 246, 0.6)"
                                    stroke="rgba(59, 130, 246, 1)"
                                    strokeWidth="2"
                                />

                                {/* Cutting tool */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
                                    d="M 470 182 L 510 182 L 520 190 L 510 198 L 470 198"
                                    fill="rgba(59, 130, 246, 0.7)"
                                    stroke="rgba(59, 130, 246, 1)"
                                    strokeWidth="2"
                                />

                                {/* Tool cutting edge */}
                                <motion.line
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 2 }}
                                    x1="520" y1="190" x2="525" y2="190"
                                    stroke="rgba(239, 68, 68, 0.9)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                {/* Tailstock assembly */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 2.1, ease: "easeInOut" }}
                                    d="M 600 270 L 600 180 L 720 180 L 720 270 Z"
                                    fill="rgba(71, 85, 105, 0.5)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="3"
                                />

                                {/* Tailstock body detail */}
                                <motion.rect
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 2.3 }}
                                    x="620" y="200" width="80" height="50"
                                    fill="rgba(51, 65, 85, 0.6)"
                                    stroke="rgba(148, 163, 184, 0.7)"
                                    strokeWidth="2"
                                    rx="3"
                                />

                                {/* Tailstock quill */}
                                <motion.rect
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
                                    x="540" y="210" width="60" height="10"
                                    fill="rgba(100, 116, 139, 0.8)"
                                    stroke="rgba(148, 163, 184, 0.9)"
                                    strokeWidth="2"
                                />

                                {/* Quill center */}
                                <motion.circle
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 2.5 }}
                                    cx="540" cy="215" r="4"
                                    fill="rgba(30, 41, 59, 0.9)"
                                    stroke="rgba(148, 163, 184, 0.6)"
                                    strokeWidth="1"
                                />

                                {/* Handwheels */}
                                <motion.circle
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 2.6 }}
                                    cx="500" cy="220" r="12"
                                    fill="none"
                                    stroke="rgba(148, 163, 184, 0.7)"
                                    strokeWidth="2"
                                />

                                <motion.circle
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 2.7 }}
                                    cx="720" cy="215" r="15"
                                    fill="none"
                                    stroke="rgba(148, 163, 184, 0.7)"
                                    strokeWidth="2"
                                />

                                {/* Handwheel spokes */}
                                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                                    <motion.line
                                        key={`spoke-${i}`}
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 2.8 + i * 0.05 }}
                                        x1={720}
                                        y1={215}
                                        x2={720 + Math.cos(angle * Math.PI / 180) * 15}
                                        y2={215 + Math.sin(angle * Math.PI / 180) * 15}
                                        stroke="rgba(148, 163, 184, 0.5)"
                                        strokeWidth="1"
                                    />
                                ))}
                            </svg>

                            {/* Technical Annotations with Leader Lines */}
                            {machineParts.map((part) => (
                                <motion.div
                                    key={part.id}
                                    style={{ opacity: part.opacity }}
                                    className="absolute w-full h-full pointer-events-none"
                                >
                                    {/* Annotation Box */}
                                    <div
                                        className="absolute w-64"
                                        style={part.labelPos}
                                    >
                                        <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border border-blue-400/40 rounded-lg p-3 shadow-[0_4px_24px_rgba(59,130,246,0.2)]">
                                            {/* Technical ID */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-400/50 flex items-center justify-center">
                                                    <span className="text-blue-300 text-xs font-black">{String(part.id).padStart(2, '0')}</span>
                                                </div>
                                                <h3 className="text-blue-300 font-black text-xs uppercase tracking-wide">
                                                    {part.name}
                                                </h3>
                                            </div>

                                            <p className="text-slate-300 text-[10px] leading-relaxed mb-2">
                                                {part.description}
                                            </p>

                                            {/* Technical corners */}
                                            <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-blue-400/30" />
                                            <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-blue-400/30" />
                                        </div>
                                    </div>

                                    {/* Leader Line to Component */}
                                    <svg
                                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                        style={{ zIndex: 1 }}
                                    >
                                        <motion.line
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            x1={part.pointFrom.x}
                                            y1={part.pointFrom.y}
                                            x2={part.pointTo.x}
                                            y2={part.pointTo.y}
                                            stroke="rgba(59, 130, 246, 0.6)"
                                            strokeWidth="2"
                                            strokeDasharray="4 4"
                                        />
                                        {/* Connection point dot at component */}
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.4 }}
                                            cx={part.pointTo.x}
                                            cy={part.pointTo.y}
                                            r="4"
                                            fill="rgba(59, 130, 246, 0.9)"
                                            stroke="rgba(59, 130, 246, 1)"
                                            strokeWidth="2"
                                        />
                                        {/* Connection point dot at label */}
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                            cx={part.pointFrom.x}
                                            cy={part.pointFrom.y}
                                            r="3"
                                            fill="rgba(59, 130, 246, 0.7)"
                                            stroke="rgba(59, 130, 246, 0.9)"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MachineBlueprint;
