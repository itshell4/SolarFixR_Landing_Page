
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, MapPin, Calendar, Download, Filter, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Solar Panel Dashboard</h1>
          <p className="text-xl text-gray-600">Monitor your solar farm's health and performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Panels</p>
                  <p className="text-3xl font-bold text-gray-800">{totalPanels}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Health Score</p>
                  <p className={`text-3xl font-bold ${getHealthScoreColor(avgHealthScore)}`}>{avgHealthScore}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Healthy Panels</p>
                  <p className="text-3xl font-bold text-green-600">{healthyPanels}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Need Attention</p>
                  <p className="text-3xl font-bold text-red-600">{warningPanels + criticalPanels}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Controls */}
        <Card className="bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters & Controls</span>
              </span>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium text-gray-700 mb-1">Fault Type</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
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

        {/* Panel Grid */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Panel Status Grid</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPanels.map((panel) => (
                <Card key={panel.id} className="border-2 hover:border-blue-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{panel.id}</h3>
                      <Badge className={getStatusColor(panel.status)}>
                        {panel.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Location:</span>
                        <span className="text-sm font-medium">{panel.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Health Score:</span>
                        <span className={`text-sm font-bold ${getHealthScoreColor(panel.healthScore)}`}>
                          {panel.healthScore}%
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Last Inspection:</span>
                        <span className="text-sm">{panel.lastInspection}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Next Maintenance:</span>
                        <span className="text-sm">{panel.nextMaintenance}</span>
                      </div>
                      
                      {panel.faults.length > 0 && (
                        <div className="pt-2">
                          <span className="text-sm text-gray-600">Faults:</span>
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
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
