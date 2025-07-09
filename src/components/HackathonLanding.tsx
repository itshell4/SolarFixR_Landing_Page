
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, Trophy, Code, Zap, Rocket, Star, Github, Twitter, Linkedin } from 'lucide-react';

const HackathonLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const prizes = [
    { place: "1st", amount: "$10,000", icon: Trophy, color: "text-yellow-500" },
    { place: "2nd", amount: "$5,000", icon: Star, color: "text-gray-400" },
    { place: "3rd", amount: "$2,500", icon: Zap, color: "text-orange-500" }
  ];

  const tracks = [
    { name: "AI/ML", icon: Code, color: "bg-purple-500" },
    { name: "Web3", icon: Rocket, color: "bg-blue-500" },
    { name: "Mobile", icon: Zap, color: "bg-green-500" },
    { name: "Gaming", icon: Star, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            HackFest 2024
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
          <a href="#tracks" className="hover:text-purple-300 transition-colors">Tracks</a>
          <a href="#prizes" className="hover:text-purple-300 transition-colors">Prizes</a>
          <a href="#schedule" className="hover:text-purple-300 transition-colors">Schedule</a>
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0">
          Register Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
          48 Hours • March 15-17, 2024
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          CREATE.
          <br />
          INNOVATE.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            DISRUPT.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 500+ developers, designers, and entrepreneurs for the most exciting hackathon of the year
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3 border-0">
            <Rocket className="mr-2 h-5 w-5" />
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 text-lg px-8 py-3">
            Learn More
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Event Starts In</h3>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Participants", value: "500+", icon: Users },
            { label: "Prize Pool", value: "$50K", icon: Trophy },
            { label: "Hours", value: "48", icon: Clock },
            { label: "Projects", value: "100+", icon: Code }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Competition Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`${track.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <track.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{track.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Prizes & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <prize.icon className={`h-12 w-12 mx-auto mb-4 ${prize.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{prize.place} Place</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    {prize.amount}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <div className="space-y-6">
            {[
              { time: "6:00 PM", day: "Day 1", event: "Registration & Welcome", icon: Users },
              { time: "7:00 PM", day: "Day 1", event: "Opening Ceremony", icon: Rocket },
              { time: "8:00 PM", day: "Day 1", event: "Hacking Begins!", icon: Code },
              { time: "6:00 PM", day: "Day 3", event: "Project Presentations", icon: Star },
              { time: "8:00 PM", day: "Day 3", event: "Awards Ceremony", icon: Trophy }
            ].map((item, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="border-purple-400 text-purple-300">
                        {item.day}
                      </Badge>
                      <span className="text-purple-300">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-1">{item.event}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Location
          </h2>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold text-white mb-2">Tech Innovation Center</h3>
              <p className="text-gray-300 mb-4">123 Innovation Drive, San Francisco, CA 94105</p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline" className="border-purple-400 text-purple-300">
                  Free Parking
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-300">
                  Free WiFi
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-300">
                  24/7 Access
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                HackFest 2024
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 HackFest. All rights reserved. Made with ❤️ for the developer community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HackathonLanding;
