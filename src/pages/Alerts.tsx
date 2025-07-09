
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, AlertTriangle, Clock, CheckCircle, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      panel: 'P003',
      location: 'Section B-1',
      issue: 'Major crack detected - 60% surface affected',
      timestamp: '2024-01-09 14:30',
      priority: 'urgent',
      status: 'active'
    },
    {
      id: 2,
      type: 'warning',
      panel: 'P006',
      location: 'Section C-2',
      issue: 'Significant dust buildup reducing efficiency by 15%',
      timestamp: '2024-01-09 10:15',
      priority: 'medium',
      status: 'active'
    },
    {
      id: 3,
      type: 'maintenance',
      panel: 'P002',
      location: 'Section A-2',
      issue: 'Scheduled maintenance due in 3 days',
      timestamp: '2024-01-09 08:00',
      priority: 'low',
      status: 'scheduled'
    },
    {
      id: 4,
      type: 'critical',
      panel: 'P008',
      location: 'Section D-1',
      issue: 'Hotspot detected - temperature 15°C above normal',
      timestamp: '2024-01-08 16:45',
      priority: 'urgent',
      status: 'resolved'
    },
    {
      id: 5,
      type: 'info',
      panel: 'P001',
      location: 'Section A-1',
      issue: 'Inspection completed - all systems normal',
      timestamp: '2024-01-08 12:20',
      priority: 'info',
      status: 'resolved'
    }
  ];

  const getAlertColor = (type: string, status: string) => {
    if (status === 'resolved') return 'bg-gray-100 text-gray-600 border-gray-200';
    
    switch (type) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'maintenance': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'info': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'low': return <Bell className="h-4 w-4 text-blue-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const activeAlerts = alerts.filter(alert => alert.status === 'active').length;
  const criticalAlerts = alerts.filter(alert => alert.type === 'critical' && alert.status === 'active').length;
  const resolvedToday = alerts.filter(alert => alert.status === 'resolved' && alert.timestamp.includes('2024-01-09')).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Real-Time Alerts</h1>
          <p className="text-xl text-gray-600">Monitor and manage your solar farm alerts and notifications</p>
        </div>

        {/* Alert Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Alerts</p>
                  <p className="text-3xl font-bold text-red-600">{activeAlerts}</p>
                </div>
                <Bell className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical Issues</p>
                  <p className="text-3xl font-bold text-red-700">{criticalAlerts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-700" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Resolved Today</p>
                  <p className="text-3xl font-bold text-green-600">{resolvedToday}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Options */}
        <Card className="bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Alert Integrations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>📱</span>
                <span>Setup SMS Alerts</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>📧</span>
                <span>Email Notifications</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>💬</span>
                <span>Slack Integration</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>📲</span>
                <span>Telegram Bot</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Timeline */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Alert Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border-2 ${getAlertColor(alert.type, alert.status)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {getPriorityIcon(alert.priority)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {alert.panel}
                          </Badge>
                          <span className="text-sm text-gray-600">{alert.location}</span>
                          <Badge className={`text-xs ${alert.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {alert.status}
                          </Badge>
                        </div>
                        <p className="font-medium text-gray-800 mb-1">{alert.issue}</p>
                        <p className="text-sm text-gray-600">{alert.timestamp}</p>
                      </div>
                    </div>
                    {alert.status === 'active' && (
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Mark Resolved
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alerts;
