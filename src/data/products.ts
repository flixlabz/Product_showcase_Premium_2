export interface Product {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    accentColor: string;
    reverse?: boolean;
    specs: { label: string; value: string }[];
    longDescription: string;
    gallery: string[];
    price: string;
    category: string;
}

export const products: Product[] = [
    {
        id: "lathe-machine",
        title: "PRECISION LATHE",
        subtitle: "CNC TECHNOLOGY",
        image: "/images/lathe-machine.png",
        description: "High-precision CNC lathe machines for superior metalworking and manufacturing excellence.",
        accentColor: "#64748B",
        specs: [
            { label: "Spindle Speed", value: "4000 RPM Max" },
            { label: "Accuracy", value: "±0.001mm Tolerance" },
            { label: "Bed Length", value: "2000mm Capacity" },
            { label: "Control System", value: "Advanced CNC" }
        ],
        longDescription: "Our precision lathe machines represent the pinnacle of metalworking technology. Engineered with advanced CNC control systems, these machines deliver unparalleled accuracy and repeatability. Perfect for high-volume production or intricate custom work, they feature hardened steel construction and precision-ground ways for long-lasting performance.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/partner-7.png", "/images/gallery/partner-8.png"],
        price: "Contact for Quote",
        category: "Machinery"
    },
    {
        id: "milling-machine",
        title: "VERTICAL MILL",
        subtitle: "MULTI-AXIS PRECISION",
        image: "/images/lathe-machine.png",
        description: "Advanced vertical milling machines with multi-axis capabilities for complex machining operations.",
        accentColor: "#3B82F6",
        reverse: true,
        specs: [
            { label: "Axis Travel", value: "X:1000 Y:500 Z:600mm" },
            { label: "Spindle Power", value: "7.5 kW Motor" },
            { label: "Tool Capacity", value: "24 Tool ATC" },
            { label: "Precision", value: "±0.002mm" }
        ],
        longDescription: "Our vertical milling machines combine power with precision. Featuring automatic tool changers and advanced multi-axis capabilities, these mills can handle the most complex machining tasks. The rigid construction and precision ballscrews ensure consistent accuracy across long production runs.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/partner-6.png", "/images/gallery/partner-9.jpg"],
        price: "Contact for Quote",
        category: "Machinery"
    },
    {
        id: "maintenance-service",
        title: "PREVENTIVE MAINTENANCE",
        subtitle: "EXPERT CARE",
        image: "/images/lathe-machine.png",
        description: "Comprehensive preventive maintenance programs to keep your industrial machines running at peak performance.",
        accentColor: "#F59E0B",
        specs: [
            { label: "Response Time", value: "24/7 Emergency" },
            { label: "Coverage", value: "All Major Brands" },
            { label: "Technicians", value: "Certified Experts" },
            { label: "Warranty", value: "Extended Protection" }
        ],
        longDescription: "Our preventive maintenance service ensures your equipment operates at peak efficiency. Our certified technicians perform thorough inspections, lubrication, calibration, and component replacement on schedule. We help you avoid costly downtime and extend the life of your valuable machinery investments.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/gallery-7.png"],
        price: "Custom Plans Available",
        category: "Services"
    },
    {
        id: "repair-service",
        title: "MACHINE REPAIR",
        subtitle: "RAPID RESTORATION",
        image: "/images/lathe-machine.png",
        description: "Expert repair services for all types of industrial machinery with guaranteed quality workmanship.",
        accentColor: "#10B981",
        specs: [
            { label: "Turnaround", value: "Fast Service" },
            { label: "Diagnostics", value: "Advanced Testing" },
            { label: "Parts", value: "OEM Quality" },
            { label: "Guarantee", value: "90-Day Warranty" }
        ],
        longDescription: "When your machines break down, every minute counts. Our expert repair team provides rapid diagnostics and efficient repairs using OEM-quality parts. We service all major brands of lathes, mills, grinders, and other industrial equipment. Our mobile service units can perform many repairs on-site to minimize downtime.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/gallery-8.png"],
        price: "Diagnostic Fee: $150",
        category: "Services"
    },
    {
        id: "grinding-machine",
        title: "SURFACE GRINDER",
        subtitle: "ULTRA PRECISION",
        image: "/images/lathe-machine.png",
        description: "High-precision surface grinding machines for achieving mirror-finish surfaces and tight tolerances.",
        accentColor: "#111827",
        specs: [
            { label: "Table Size", value: "600x300mm" },
            { label: "Grinding Wheel", value: "300mm Diameter" },
            { label: "Accuracy", value: "±0.0005mm" },
            { label: "Surface Finish", value: "Ra 0.2μm" }
        ],
        longDescription: "Our surface grinders deliver exceptional precision and surface finish quality. Featuring electromagnetic chucks and precision-ground ways, these machines can achieve tolerances measured in microns. Ideal for tool and die work, gauge making, and any application requiring superior flatness and finish.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/gallery-9.png"],
        price: "Contact for Quote",
        category: "Machinery"
    },
    {
        id: "installation-service",
        title: "MACHINE INSTALLATION",
        subtitle: "PROFESSIONAL SETUP",
        image: "/images/lathe-machine.png",
        description: "Professional installation and commissioning services ensuring optimal machine performance from day one.",
        accentColor: "#8B5CF6",
        specs: [
            { label: "Site Preparation", value: "Full Assessment" },
            { label: "Leveling", value: "Precision Alignment" },
            { label: "Training", value: "Operator Certification" },
            { label: "Documentation", value: "Complete Records" }
        ],
        longDescription: "Proper installation is critical for machine performance and longevity. Our installation team handles everything from site preparation and foundation work to precision leveling and alignment. We provide comprehensive operator training and complete documentation to ensure your team can maximize productivity from day one.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/gallery-10.png"],
        price: "Starting at $2,500",
        category: "Services"
    },
    {
        id: "calibration-service",
        title: "PRECISION CALIBRATION",
        subtitle: "ISO CERTIFIED",
        image: "/images/lathe-machine.png",
        description: "ISO-certified calibration services to ensure your machines meet the highest accuracy standards.",
        accentColor: "#64748B",
        specs: [
            { label: "Standards", value: "ISO 9001 Certified" },
            { label: "Equipment", value: "Laser Interferometer" },
            { label: "Reporting", value: "Full Documentation" },
            { label: "Frequency", value: "Annual/Semi-Annual" }
        ],
        longDescription: "Maintain your competitive edge with our ISO-certified calibration services. Using state-of-the-art laser interferometers and precision measuring equipment, we verify and adjust your machines to factory specifications. Complete documentation ensures compliance with quality management systems and customer requirements.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/br-1.png"],
        price: "Starting at $800",
        category: "Services"
    },
    {
        id: "cnc-retrofit",
        title: "CNC RETROFIT",
        subtitle: "MODERNIZATION",
        image: "/images/lathe-machine.png",
        description: "Transform your conventional machines into modern CNC equipment with our retrofit solutions.",
        accentColor: "#F8FAFC",
        specs: [
            { label: "Control Systems", value: "Latest Technology" },
            { label: "Servo Motors", value: "High Performance" },
            { label: "Software", value: "CAD/CAM Integration" },
            { label: "ROI", value: "Rapid Payback" }
        ],
        longDescription: "Extend the life of your existing machines with our CNC retrofit service. We replace outdated controls with modern CNC systems, install precision servo motors, and integrate the latest software. This cost-effective solution provides the benefits of new CNC equipment at a fraction of the cost.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/br-2.png"],
        price: "Contact for Quote",
        category: "Services"
    },
    {
        id: "drilling-machine",
        title: "RADIAL DRILL",
        subtitle: "HEAVY DUTY",
        image: "/images/lathe-machine.png",
        description: "Robust radial drilling machines for large workpieces and heavy-duty manufacturing applications.",
        accentColor: "#F59E0B",
        specs: [
            { label: "Drilling Capacity", value: "50mm Max" },
            { label: "Arm Length", value: "1500mm Reach" },
            { label: "Column Diameter", value: "300mm" },
            { label: "Motor Power", value: "4 kW" }
        ],
        longDescription: "Our radial drilling machines are built for heavy-duty applications. The robust construction and long arm reach make them ideal for drilling large castings, structural steel, and other oversized workpieces. Multiple spindle speeds and feeds provide versatility for various materials and hole sizes.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/br-3.png"],
        price: "Contact for Quote",
        category: "Machinery"
    },
    {
        id: "training-service",
        title: "OPERATOR TRAINING",
        subtitle: "SKILL DEVELOPMENT",
        image: "/images/lathe-machine.png",
        description: "Comprehensive training programs to maximize operator skills and machine productivity.",
        accentColor: "#06B6D4",
        specs: [
            { label: "Duration", value: "1-5 Day Programs" },
            { label: "Certification", value: "Industry Recognized" },
            { label: "Format", value: "Hands-On Practice" },
            { label: "Materials", value: "Complete Manuals" }
        ],
        longDescription: "Invest in your team with our professional training programs. Our experienced instructors provide hands-on training covering machine operation, programming, maintenance, and safety. Courses are tailored to your specific equipment and skill levels. Participants receive certification and comprehensive reference materials.",
        gallery: ["/images/lathe-machine.png", "/images/gallery/br-4.png"],
        price: "$500 per person",
        category: "Services"
    }
];
