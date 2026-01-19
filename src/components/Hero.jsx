import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                style={{backgroundImage: "url('/assets/galaxy-bg.png')"}}
            ></div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0f0518]/50 to-[#0f0518]"></div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 text-center px-4"
            >
                <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4 text-purple-200"
                >
                    WELCOME JAZMIN
                </motion.h2>
                
                <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    BTS UNIVERSE
                </h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto italic font-light"
                >
                    "You were born to receive love."
                </motion.p>
                
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="mt-8"
                >
                   <Heart className="w-12 h-12 text-purple-500 mx-auto fill-purple-500 animate-pulse" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
