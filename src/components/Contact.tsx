import { motion } from 'framer-motion';
import { Send, Mail, Phone, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative blueprint-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-2 border-slate-400/30 bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-xl">
                    {/* Info Side */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden border-r-2 border-slate-600/50">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">LET'S START <br />THE TALK.</h2>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Email Us</p>
                                        <p className="font-bold">info@adarshworld.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Call Us</p>
                                        <p className="font-bold">+1 (888) 555-MACH</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Service Area</p>
                                        <p className="font-bold">Nationwide Coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 flex gap-6">
                            {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                                <a key={social} href="#" className="text-sm font-black uppercase tracking-tighter hover:text-accent transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-3/5 p-12 md:p-16 bg-gradient-to-br from-slate-800/50 via-slate-900/60 to-slate-800/50 backdrop-blur-sm">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-foreground/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-foreground/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-foreground"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Inquiry Type</label>
                                <select className="w-full bg-foreground/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-all text-foreground/60 appearance-none">
                                    <option className="bg-background text-foreground">Machine Maintenance</option>
                                    <option className="bg-background text-foreground">Equipment Purchase</option>
                                    <option className="bg-background text-foreground">Repair Service</option>
                                    <option className="bg-background text-foreground">Training Program</option>
                                    <option className="bg-background text-foreground">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us what's on your mind..."
                                    className="w-full bg-foreground/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-foreground resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-black rounded-2xl shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 hover:shadow-[0_12px_32px_rgba(59,130,246,0.6)]"
                            >
                                SEND MESSAGE <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
