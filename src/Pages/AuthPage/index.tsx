import { LoginForm } from '@/components/auth/login';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useState } from 'react';
const AuthPage = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                {/* Mobile Logo */}
                <a href="/" className="flex items-center gap-2 mb-8 lg:hidden">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-display text-2xl font-bold text-foreground">TrustNest</span>
                </a>

                {/* Tab Switcher */}
                <div className="bg-muted p-1 rounded-xl flex mb-8">
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'login'
                            ? 'bg-card text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setActiveTab('signup')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'signup'
                            ? 'bg-card text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Forms */}
                <AnimatePresence mode="wait">
                    {activeTab === 'login' ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <LoginForm onSwitchToSignUp={() => setActiveTab('signup')} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* <SignUpForm onSwitchToLogin={() => setActiveTab('login')} /> */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default AuthPage