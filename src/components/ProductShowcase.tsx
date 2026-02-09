import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cog, Gauge, Zap, Wrench } from 'lucide-react';

interface MachineShowcaseProps {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    color: 'green' | 'red';
    specs: { label: string; value: string }[];
    reverse?: boolean;
}

const MachineShowcase = ({ machine }: { machine: MachineShowcaseProps }) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.3 });
    const [showBg, setShowBg] = useState(false);

    useEffect(() => {
        setShowBg(isInView);
    }, [isInView]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const machineY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
    const machineRotate = useTransform(scrollYProgress, [0, 1], machine.reverse ? [5, -5] : [-5, 5]);
    const machineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    const isGreen = machine.color === 'green';
    const bgGradient = isGreen
        ? 'linear-gradient(135deg, #0a1f1a 0%, #0d2b23 50%, #0a1f1a 100%)'
        : 'linear-gradient(135deg, #1f0a0a 0%, #2b0d0d 50%, #1f0a0a 100%)';

    const accentColor = isGreen ? 'emerald' : 'red';
    const accentRgb = isGreen ? '16, 185, 129' : '239, 68, 68';

    return (
        <>
            {/* Fixed full-screen background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showBg ? 1 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: bgGradient,
                    zIndex: -10
                }}
            />

            <section
                ref={containerRef}
                id={machine.id}
                className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
                style={{ background: bgGradient }}
            >
                {/* Smooth transition from previous section */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0A0E27] via-[#0A0E27]/60 to-transparent z-0 pointer-events-none" />

                {/* Technical Grid Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id={`tech-grid-${machine.id}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke={`rgba(${accentRgb}, 0.3)`} strokeWidth="0.5" />
                            </pattern>
                            <pattern id={`tech-grid-large-${machine.id}`} x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                                <path d="M 200 0 L 0 0 0 200" fill="none" stroke={`rgba(${accentRgb}, 0.5)`} strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#tech-grid-${machine.id})`} />
                        <rect width="100%" height="100%" fill={`url(#tech-grid-large-${machine.id})`} />
                    </svg>
                </div>

                {/* Glowing Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-20 ${machine.reverse ? 'right-20' : 'left-20'} w-96 h-96 bg-${accentColor}-500/30 rounded-full blur-[120px]`}
                    style={{ backgroundColor: `rgba(${accentRgb}, 0.3)` }}
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute bottom-20 ${machine.reverse ? 'left-20' : 'right-20'} w-[500px] h-[500px] bg-${accentColor}-400/20 rounded-full blur-[150px]`}
                    style={{ backgroundColor: `rgba(${accentRgb}, 0.2)` }}
                />

                {/* Floating Mechanical Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, rotate: 0 }}
                            animate={{ rotate: 360, y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
                            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                            className="absolute"
                        >
                            <Cog className="w-12 h-12" style={{ color: `rgba(${accentRgb}, 0.1)` }} />
                        </motion.div>
                    ))}

                    {/* Circuit Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-10">
                        <motion.path
                            d="M 0 50 L 200 50 L 200 150 L 400 150"
                            stroke={`rgba(${accentRgb}, 0.5)`}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.path
                            d="M 100% 30% L 80% 30% L 80% 70% L 60% 70%"
                            stroke={`rgba(${accentRgb}, 0.5)`}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${machine.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Machine Image */}
                        <motion.div
                            style={{ y: machineY, rotate: machineRotate, scale: machineScale }}
                            className={`relative ${machine.reverse ? 'lg:order-2' : 'lg:order-1'}`}
                        >
                            {/* Glowing backdrop */}
                            <div className="absolute inset-0 rounded-3xl blur-3xl" style={{
                                background: `linear-gradient(135deg, rgba(${accentRgb}, 0.2), rgba(${accentRgb}, 0.1), transparent)`
                            }} />

                            {/* Technical frame */}
                            <div className="relative p-8 rounded-3xl border-2 backdrop-blur-sm" style={{
                                borderColor: `rgba(${accentRgb}, 0.3)`,
                                background: `linear-gradient(135deg, rgba(${accentRgb}, 0.1), rgba(${accentRgb}, 0.05))`,
                                boxShadow: `0 0 60px rgba(${accentRgb}, 0.3)`
                            }}>
                                {/* Corner brackets */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: `rgb(${accentRgb})` }} />
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: `rgb(${accentRgb})` }} />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: `rgb(${accentRgb})` }} />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: `rgb(${accentRgb})` }} />

                                <img
                                    src={machine.image}
                                    alt={machine.title}
                                    className="w-full h-auto object-contain relative z-10"
                                    style={{ filter: `drop-shadow(0 20px 80px rgba(${accentRgb}, 0.6))` }}
                                />

                                {/* Scanning line effect */}
                                <motion.div
                                    animate={{ y: ["0%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-1 opacity-50"
                                    style={{ background: `linear-gradient(90deg, transparent, rgb(${accentRgb}), transparent)` }}
                                />
                            </div>

                            {/* Floating specs indicator */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-6 -right-6 backdrop-blur-md px-4 py-2 rounded-full border shadow-lg"
                                style={{
                                    backgroundColor: `rgba(${accentRgb}, 0.9)`,
                                    borderColor: `rgba(${accentRgb}, 0.5)`
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    {isGreen ? <Gauge className="w-4 h-4 text-white" /> : <Wrench className="w-4 h-4 text-white" />}
                                    <span className="text-white font-black text-xs">PRECISION</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: machine.reverse ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col gap-6 ${machine.reverse ? 'lg:order-1' : 'lg:order-2'}`}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="font-black tracking-[0.5em] uppercase text-xs flex items-center gap-2"
                                style={{ color: `rgb(${accentRgb})` }}
                            >
                                <Zap className="w-4 h-4" />
                                Industrial Excellence
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
                            >
                                <span className="text-white">{machine.title.split(' ')[0]}</span>
                                <br />
                                <span className="italic" style={{ color: `rgb(${accentRgb})` }}>{machine.title.split(' ')[1]}</span>
                            </motion.h2>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold"
                                style={{ color: `rgba(${accentRgb}, 0.4)` }}
                            >
                                {machine.subtitle}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl leading-relaxed max-w-md font-medium"
                                style={{ color: `rgba(${accentRgb}, 0.7)` }}
                            >
                                {machine.description}
                            </motion.p>

                            {/* Technical Specs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-2 gap-4 mt-4"
                            >
                                {machine.specs.map((spec, i) => (
                                    <div key={i} className="rounded-xl p-4 backdrop-blur-sm border" style={{
                                        backgroundColor: `rgba(${accentRgb}, 0.1)`,
                                        borderColor: `rgba(${accentRgb}, 0.3)`
                                    }}>
                                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: `rgba(${accentRgb}, 0.6)` }}>
                                            {spec.label}
                                        </div>
                                        <div className="text-white text-2xl font-black">{spec.value}</div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4 mt-8"
                            >
                                <Link
                                    to="/products"
                                    className="px-10 py-5 text-white font-black rounded-full text-sm tracking-widest uppercase shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center"
                                    style={{
                                        backgroundColor: `rgb(${accentRgb})`,
                                        boxShadow: `0 10px 40px rgba(${accentRgb}, 0.5)`
                                    }}
                                >
                                    View Specifications
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-10 py-5 border-2 text-white font-black rounded-full text-sm tracking-widest uppercase transition-all backdrop-blur-md"
                                    style={{
                                        borderColor: `rgba(${accentRgb}, 0.3)`,
                                        backgroundColor: `rgba(${accentRgb}, 0.1)`
                                    }}
                                >
                                    Request Quote
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom gradient blend */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E27] to-transparent pointer-events-none" />
            </section>
        </>
    );
};

const machines: MachineShowcaseProps[] = [
    {
        id: 'precision-lathe',
        title: 'PRECISION LATHE',
        subtitle: 'PROFESSIONAL GRADE',
        image: '/images/lathe-machine-3d.png',
        description: 'Engineered for maximum precision and reliability. Advanced CNC technology meets traditional craftsmanship for unparalleled machining excellence.',
        color: 'green',
        specs: [
            { label: 'Accuracy', value: '±0.001mm' },
            { label: 'Max RPM', value: '4000' },
            { label: 'Power', value: '5.5 kW' },
            { label: 'Capacity', value: '500mm' }
        ]
    },
    {
        id: 'semi-auto-milling',
        title: 'HYBRID MILLING',
        subtitle: 'SEMI-AUTOMATIC',
        image: '/images/milling-machine.png',
        description: 'Perfect blend of manual control and digital precision. Transitional technology combining traditional craftsmanship with modern automation capabilities.',
        color: 'red',
        reverse: true,
        specs: [
            { label: 'Control', value: 'DRO + Manual' },
            { label: 'Spindle', value: '3000 RPM' },
            { label: 'Table', value: '850x300mm' },
            { label: 'Power', value: '3.7 kW' }
        ]
    }
];

const ProductShowcase = () => {
    return (
        <div className="relative">
            {machines.map((machine) => (
                <MachineShowcase key={machine.id} machine={machine} />
            ))}
        </div>
    );
};

export default ProductShowcase;
