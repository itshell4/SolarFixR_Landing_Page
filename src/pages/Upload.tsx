import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload as UploadIcon, Camera, Thermometer, Plane, Zap, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageType, setImageType] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile || !imageType) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with mock results
    setTimeout(() => {
      setAnalysisResult({
        healthScore: Math.floor(Math.random() * 40) + 60, // 60-100
        faults: ['Dust buildup', 'Minor hotspot'],
        confidence: 92,
        recommendations: ['Clean panel surface', 'Monitor temperature']
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upload Solar Panel Images</h1>
          <p className="text-xl text-gray-600">Get instant AI-powered fault detection and health analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UploadIcon className="h-5 w-5" />
                <span>Image Upload</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Drag & Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
              >
                <Camera className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Drag & drop your image here
                </p>
                <p className="text-gray-500 mb-4">or</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button asChild variant="outline">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Browse Files
                  </label>
                </Button>
              </div>

              {selectedFile && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Selected: {selectedFile.name}</p>
                  <p className="text-sm text-blue-600">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              )}

              {/* Image Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Image Type
                </label>
                <Select value={imageType} onValueChange={setImageType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose image type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rgb">
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4" />
                        <span>RGB (Regular Camera)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="thermal">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-4 w-4" />
                        <span>Thermal</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="drone">
                      <div className="flex items-center space-x-2">
                        <Plane className="h-4 w-4" />
                        <span>Drone Sequence</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                disabled={!selectedFile || !imageType || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Analyze Now
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!analysisResult ? (
                <div className="text-center py-8">
                  <Camera className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">Upload an image and select type to see analysis results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Health Score */}
                  <div className="text-center">
                    <Badge className={`text-2xl py-2 px-4 ${getHealthScoreColor(analysisResult.healthScore)}`}>
                      Health Score: {analysisResult.healthScore}%
                    </Badge>
                  </div>

                  {/* Faults Detected */}
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                      Faults Detected
                    </h3>
                    <div className="space-y-2">
                      {analysisResult.faults.map((fault: string, index: number) => (
                        <Badge key={index} variant="outline" className="mr-2">
                          {fault}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Confidence */}
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Confidence
                    </h3>
                    <Badge className="bg-green-100 text-green-800">
                      {analysisResult.confidence}%
                    </Badge>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Recommendations</h3>
                    <ul className="space-y-1">
                      {analysisResult.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
