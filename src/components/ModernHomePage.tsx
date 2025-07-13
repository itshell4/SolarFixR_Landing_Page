import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Zap, Camera, TrendingUp, Shield, AlertTriangle, BarChart3, Cpu, Brain, Rocket, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ModernNavigation from './ModernNavigation';
import AnimatedBackground from './AnimatedBackground';

const ModernHomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced neural networks detect faults with 99.2% accuracy using computer vision",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live health scoring and performance metrics with predictive maintenance alerts",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Drone Integration",
      description: "Seamless integration with thermal and RGB drone imagery for comprehensive analysis",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Instant Processing",
      description: "Cloud-based processing delivers results in seconds, not hours",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "99.2%", label: "Detection Accuracy", icon: Cpu },
    { value: "< 30s", label: "Analysis Time", icon: Zap },
    { value: "500+", label: "Panels Monitored", icon: Camera },
    { value: "24/7", label: "Monitoring", icon: Shield }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <AnimatedBackground />
      <ModernNavigation />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 text-lg px-6 py-2">
              Next-Generation Solar Diagnostics
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              SOLAR
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              REVOLUTION
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Harness the power of AI-driven diagnostics to maximize your solar farm's efficiency and prevent costly downtime
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 rounded-full shadow-lg shadow-cyan-500/25">
                <Link to="/upload" className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Start Analysis</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 text-lg px-8 py-4 rounded-full">
                <Link to="/dashboard" className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>View Dashboard</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
        />
      </motion.section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI and computer vision technology designed for the future of solar maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-16">
                <Globe className="h-20 w-20 mx-auto mb-8 text-cyan-400" />
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Ready to Transform Your Solar Operations?
                </h2>
                <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                  Join the future of renewable energy maintenance with AI-powered diagnostics that prevent downtime and maximize efficiency
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 rounded-full">
                      <Link to="/upload">Get Started Now</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 text-lg px-8 py-4 rounded-full">
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomePage;