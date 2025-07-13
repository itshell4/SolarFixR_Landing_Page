
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Cpu, Camera, TrendingUp, Github, Users, Code, Database } from 'lucide-react';
import ModernNavigation from '@/components/ModernNavigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { name: 'React + TypeScript', category: 'Frontend', icon: Code },
    { name: 'Tailwind CSS', category: 'Styling', icon: Code },
    { name: 'YOLOv8', category: 'AI Model', icon: Cpu },
    { name: 'OpenCV', category: 'Computer Vision', icon: Camera },
    { name: 'FastAPI', category: 'Backend', icon: Database },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
  ];

  const features = [
    {
      title: 'Advanced Computer Vision',
      description: 'YOLOv8-powered fault detection with 95%+ accuracy for identifying cracks, dust, hotspots, and shading issues',
      icon: Camera
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI algorithms analyze historical data to predict maintenance needs and prevent costly downtime',
      icon: TrendingUp
    },
    {
      title: 'Drone Integration',
      description: 'Seamless integration with drone imagery for large-scale solar farm monitoring and inspection',
      icon: Zap
    },
    {
      title: 'Real-time Processing',
      description: 'Instant analysis and alerts with cloud-based processing infrastructure for immediate action',
      icon: Cpu
    }
  ];

  const teamMembers = [
    { name: 'Alex Chen', role: 'AI/ML Engineer', expertise: 'Computer Vision, Deep Learning' },
    { name: 'Sarah Kim', role: 'Full Stack Developer', expertise: 'React, Python, APIs' },
    { name: 'Michael Rodriguez', role: 'Data Scientist', expertise: 'Predictive Analytics, IoT' },
    { name: 'Emily Watson', role: 'Product Manager', expertise: 'Solar Industry, UX Design' }
  ];

  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <ModernNavigation />
      
      <div className="max-w-6xl mx-auto px-6 py-8 pt-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            SolarFixR
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionizing solar maintenance with AI-powered drone diagnostics for smarter, more efficient renewable energy operations
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <a href="https://github.com/solarfixr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
          </Button>
        </div>
        </motion.div>

        {/* Technology Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Cutting-Edge Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Technical Stack
          </h2>
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <tech.icon className="h-8 w-8 text-cyan-400" />
                    <div>
                      <h4 className="font-semibold text-white">{tech.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            How SolarFixR Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Data Collection", desc: "Drones capture high-resolution RGB and thermal images of solar panels across your farm", color: "blue" },
              { step: 2, title: "AI Analysis", desc: "YOLOv8 computer vision model analyzes images to detect faults and calculate health scores", color: "green" },
              { step: 3, title: "Actionable Insights", desc: "Receive real-time alerts, maintenance recommendations, and performance analytics", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 text-center h-full">
              <CardContent className="p-6">
                <div className={`bg-${item.color}-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-${item.color}-500/30`}>
                  <span className={`text-2xl font-bold text-${item.color}-400`}>{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Meet the Team
          </h2>
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{member.name}</h4>
                      <p className="text-cyan-400 font-medium text-sm">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.expertise}</p>
                    </div>
                  </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-cyan-500/30 backdrop-blur-sm text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Solar Operations?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Join the future of renewable energy maintenance with AI-powered diagnostics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <a href="/upload">Start Free Trial</a>
              </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/20">
                <a href="mailto:contact@solarfixr.com">Contact Sales</a>
              </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
