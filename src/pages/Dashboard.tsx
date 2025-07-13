
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, MapPin, Calendar, Download, Filter, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import ModernNavigation from '@/components/ModernNavigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterUrgency, setFilterUrgency] = useState('all');

  // Mock data for panels
  const panelData = [
    { id: 'P001', location: 'Section A-1', healthScore: 95, lastInspection: '2024-01-08', nextMaintenance: '2024-02-15', faults: [], status: 'healthy' },
    { id: 'P002', location: 'Section A-2', healthScore: 78, lastInspection: '2024-01-07', nextMaintenance: '2024-01-20', faults: ['Dust'], status: 'warning' },
    { id: 'P003', location: 'Section B-1', healthScore: 45, lastInspection: '2024-01-06', nextMaintenance: '2024-01-12', faults: ['Crack', 'Hotspot'], status: 'critical' },
    { id: 'P004', location: 'Section B-2', healthScore: 82, lastInspection: '2024-01-08', nextMaintenance: '2024-02-10', faults: ['Minor dust'], status: 'good' },
    { id: 'P005', location: 'Section C-1', healthScore: 91, lastInspection: '2024-01-08', nextMaintenance: '2024-02-20', faults: [], status: 'healthy' },
    { id: 'P006', location: 'Section C-2', healthScore: 62, lastInspection: '2024-01-05', nextMaintenance: '2024-01-18', faults: ['Dust', 'Shading'], status: 'warning' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredPanels = panelData.filter(panel => {
    if (filterType !== 'all' && !panel.faults.some(fault => fault.toLowerCase().includes(filterType))) {
      return false;
    }
    if (filterUrgency !== 'all') {
      if (filterUrgency === 'critical' && panel.status !== 'critical') return false;
      if (filterUrgency === 'warning' && panel.status !== 'warning') return false;
      if (filterUrgency === 'healthy' && !['healthy', 'good'].includes(panel.status)) return false;
    }
    return true;
  });

  const totalPanels = panelData.length;
  const healthyPanels = panelData.filter(p => ['healthy', 'good'].includes(p.status)).length;
  const warningPanels = panelData.filter(p => p.status === 'warning').length;
  const criticalPanels = panelData.filter(p => p.status === 'critical').length;
  const avgHealthScore = Math.round(panelData.reduce((sum, p) => sum + p.healthScore, 0) / totalPanels);

  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <ModernNavigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Solar Panel Dashboard</h1>
          <p className="text-xl text-gray-300">Monitor your solar farm's health and performance</p>
        </div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Panels</p>
                  <p className="text-3xl font-bold text-white">{totalPanels}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Avg Health Score</p>
                  <p className={`text-3xl font-bold ${getHealthScoreColor(avgHealthScore)}`}>{avgHealthScore}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Healthy Panels</p>
                  <p className="text-3xl font-bold text-green-600">{healthyPanels}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Need Attention</p>
                  <p className="text-3xl font-bold text-red-600">{warningPanels + criticalPanels}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-white">
              <span className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters & Controls</span>
              </span>
              <Button variant="outline" className="flex items-center space-x-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-300 mb-1">Fault Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="crack">Crack</SelectItem>
                    <SelectItem value="dust">Dust</SelectItem>
                    <SelectItem value="hotspot">Hotspot</SelectItem>
                    <SelectItem value="shading">Shading</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-300 mb-1">Urgency</label>
                <Select value={filterUrgency} onValueChange={setFilterUrgency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="healthy">Healthy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Panel Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span>Panel Status Grid</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPanels.map((panel) => (
                <motion.div
                  key={panel.id}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-2 border-gray-700 hover:border-cyan-500/50 transition-colors bg-gray-800/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white">{panel.id}</h3>
                      <Badge className={getStatusColor(panel.status)}>
                        {panel.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Location:</span>
                        <span className="text-sm font-medium">{panel.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Health Score:</span>
                        <span className={`text-sm font-bold ${getHealthScoreColor(panel.healthScore)}`}>
                          {panel.healthScore}%
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Last Inspection:</span>
                        <span className="text-sm">{panel.lastInspection}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Next Maintenance:</span>
                        <span className="text-sm">{panel.nextMaintenance}</span>
                      </div>
                      
                      {panel.faults.length > 0 && (
                        <div className="pt-2">
                          <span className="text-sm text-gray-400">Faults:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {panel.faults.map((fault, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {fault}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
