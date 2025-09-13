"use client";

import { User, Map, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: <User className="w-8 h-8 text-primary" />,
        title: "Create Your Account",
        description: "Sign up in seconds and tell us a little about your wellness goals."
    },
    {
        icon: <Map className="w-8 h-8 text-primary" />,
        title: "Get Your Personal Plan",
        description: "Receive daily exercises, guided meditations, and mood-tracking tools tailored for you."
    },
    {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: "Track Your Progress",
        description: "Watch your personal growth over time and celebrate your milestones."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div 
                    className="text-center space-y-3 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                        A Simple, Guided Path
                    </h2>
                    <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                        Getting started on your path to wellness is easy.
                    </p>
                </motion.div>
                <motion.div 
                    className="relative grid md:grid-cols-3 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2 hidden md:block"></div>
                    {steps.map((step, index) => (
                        <motion.div key={index} className="relative flex flex-col items-center text-center p-4" variants={itemVariants}>
                            <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
