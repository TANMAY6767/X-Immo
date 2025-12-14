import { UserPlus, Building2, Settings, CheckCircle, Sparkles, ArrowRight, Clock } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: UserPlus,
      ...t.howItWorks.steps.step1
    },
    {
      icon: Building2,
      ...t.howItWorks.steps.step2
    },
    {
      icon: Settings,
      ...t.howItWorks.steps.step3
    },
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.howItWorks.header.badge}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.howItWorks.header.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.howItWorks.header.description}
          </p>
        </div>

        {/* Timeline Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold transition-all ${
                      index === activeStep
                        ? 'scale-110 shadow-lg'
                        : index < activeStep
                        ? 'opacity-90'
                        : 'opacity-70'
                    }`}
                    style={{
                      background: index <= activeStep 
                        ? `linear-gradient(135deg, ${index === 0 ? '#3B82F6' : index === 1 ? '#10B981' : '#8B5CF6'})`
                        : '#E5E7EB'
                    }}
                  >
                    {index + 1}
                  </button>
                  {index < steps.length - 1 && (
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-300"
                        style={{
                          width: index < activeStep ? '100%' : '0%',
                          background: `linear-gradient(to right, ${index === 0 ? '#3B82F6' : '#10B981'}, ${index === 1 ? '#10B981' : '#8B5CF6'})`
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="text-center mb-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              <Clock className="w-3 h-3 mr-1" />
              {t.howItWorks.timeline.totalTime}
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: isActive ? 1.02 : 1
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3
                }}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer group ${
                  isActive 
                    ? 'z-10 transform' 
                    : ''
                }`}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 h-full ${
                  isActive
                    ? 'border-blue-300 bg-white shadow-xl'
                    : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                    isActive 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                      : 'bg-gray-100 group-hover:bg-blue-50'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-600 group-hover:text-blue-600'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    {/* Time Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.time}
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100/30 rounded-2xl border border-blue-200 p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0`}>
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">
                  {t.howItWorks.activeStep.step(activeStep + 1, steps.length)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-700 max-w-2xl">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
            
            <button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow">
              <span>{t.howItWorks.activeStep.tryButton(steps[activeStep].title)}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t.howItWorks.cta.title}
            </h3>
            <p className="text-gray-600 mb-8">
              {t.howItWorks.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-shadow">
                {t.howItWorks.cta.buttons.startTrial}
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all">
                {t.howItWorks.cta.buttons.watchDemo}
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {t.howItWorks.cta.trustIndicators.noCard}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                {t.howItWorks.cta.trustIndicators.freeTrial}
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                {t.howItWorks.cta.trustIndicators.setupMinutes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};