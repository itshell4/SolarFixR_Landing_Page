
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Zap, Camera, TrendingUp, Shield, AlertTriangle, BarChart3 } from 'lucide-react';
import Navigation from './Navigation';

const HomePage = () => {
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Analysis",
      description: "Upload drone or thermal images for instant fault detection using advanced computer vision"
    },
    {
      icon: BarChart3,
      title: "Health Scoring",
      description: "Get real-time health scores (0-100) for each solar panel with detailed analytics"
    },
    {
      icon: AlertTriangle,
      title: "Fault Detection",
      description: "Detect cracks, dust buildup, hotspots, and other critical issues automatically"
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description: "Receive alerts and recommendations for preventive maintenance actions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            AI-Powered Solar Diagnostics
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            AI-Driven Drone Diagnostics for Smarter Solar Maintenance
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Detect faults, monitor health, and predict maintenance needs for your solar panels using cutting-edge AI and drone technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3">
              <Link to="/upload">
                <Camera className="mr-2 h-5 w-5" />
                Try Demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
            </Button>
          </div>

          {/* Demo Video Placeholder */}
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-blue-200">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Live Fault Detection Demo</h3>
                  <p className="text-gray-600">Upload your solar panel images to see AI analysis in action</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Powerful Features for Solar Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 border-0 text-white">
            <CardContent className="p-12">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Solar Farm?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Start detecting faults and preventing costly downtime with our AI-powered platform
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/upload">
                  Get Started Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
