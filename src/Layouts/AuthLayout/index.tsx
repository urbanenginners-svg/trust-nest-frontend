import { motion } from 'framer-motion';
import { Shield, Users, FlaskConical, CheckCircle } from 'lucide-react';
import { Outlet } from 'react-router-dom';


const features = [
    { icon: Shield, text: 'Secure & Verified Results' },
    { icon: Users, text: 'Community-Powered Testing' },
    { icon: FlaskConical, text: 'Accredited Lab Partners' },
    { icon: CheckCircle, text: 'Transparent Pricing' },
];

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-hero flex">
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 mb-12">
                        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                            <Shield className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="font-display text-2xl font-bold text-foreground">TrustNest</span>
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Join the Community of
                            <span className="gradient-text block">Collective Testing</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-md">
                            Access transparent, community-funded lab tests. Contribute what you can, vote on priorities, and trust the results.
                        </p>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-foreground font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Floating Cards */}
                    <div className="absolute bottom-32 right-12 hidden xl:block">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-card p-4 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-trust-teal/20 flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-trust-teal" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">1,000+ Tests Funded</p>
                                    <p className="text-xs text-muted-foreground">By our community</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout