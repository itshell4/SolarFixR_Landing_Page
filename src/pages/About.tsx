
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Cpu, Camera, TrendingUp, Github, Users, Code, Database } from 'lucide-react';
import Navigation from '@/components/Navigation';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            SolarFixR
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionizing solar maintenance with AI-powered drone diagnostics for smarter, more efficient renewable energy operations
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
            <a href="https://github.com/solarfixr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
          </Button>
        </div>

        {/* Technology Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Cutting-Edge Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Technical Stack
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <tech.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How SolarFixR Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Collection</h3>
                <p className="text-gray-600">Drones capture high-resolution RGB and thermal images of solar panels across your farm</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Analysis</h3>
                <p className="text-gray-600">YOLOv8 computer vision model analyzes images to detect faults and calculate health scores</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Actionable Insights</h3>
                <p className="text-gray-600">Receive real-time alerts, maintenance recommendations, and performance analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet the Team
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{member.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.expertise}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Solar Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the future of renewable energy maintenance with AI-powered diagnostics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="/upload">Start Free Trial</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="mailto:contact@solarfixr.com">Contact Sales</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
