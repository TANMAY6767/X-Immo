import { Building2, Users, TrendingUp, Wrench, FileText, LayoutDashboard, Zap, Shield, CheckCircle, ChevronRight, Sparkles, BarChart3 } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Building2,
      ...t.features.featuresList.propertyManagement,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/50"
    },
    {
      icon: Users,
      ...t.features.featuresList.tenantManagement,
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-gradient-to-br from-emerald-50/90 to-emerald-100/50"
    },
    {
      icon: TrendingUp,
      ...t.features.featuresList.rentTracker,
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-gradient-to-br from-purple-50/90 to-purple-100/50"
    },
    {
      icon: Wrench,
      ...t.features.featuresList.maintenance,
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-gradient-to-br from-amber-50/90 to-amber-100/50"
    },
    {
      icon: FileText,
      ...t.features.featuresList.documents,
      color: "from-rose-600 to-rose-800",
      bgColor: "bg-gradient-to-br from-rose-50/90 to-rose-100/50"
    },
    {
      icon: LayoutDashboard,
      ...t.features.featuresList.smartDashboard,
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-gradient-to-br from-indigo-50/90 to-indigo-100/50"
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section - Compact & Premium */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-gray-900">{t.features.header.badge}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              {t.features.header.titleLine2}
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.features.header.description}
          </p>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Feature Cards (3x2 Grid) */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'border-blue-200 bg-white shadow-xl transform scale-[1.02]' 
                        : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
                    }`}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                          {isActive && <ChevronRight className="w-4 h-4 text-blue-600" />}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                        <div className="text-xs font-medium text-gray-700 px-2 py-1 rounded-full bg-gray-100 inline-block">
                          {feature.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* AI Badges Bar - Under Grid */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-800">{t.features.badges.aiAutomation}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <BarChart3 className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-800">{t.features.badges.liveAnalytics}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-gray-800">{t.features.badges.bankGradeSecurity}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Details Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              {/* Feature Detail Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50/80 border border-gray-200 shadow-xl">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-2xl"></div>
                
                <div className="relative p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}>
                      {React.createElement(features[activeFeature].icon, { className: "w-7 h-7 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                      <div className="text-sm text-gray-500 mt-1">{features[activeFeature].stats}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {features[activeFeature].description}
                  </p>

                  {/* Feature Details List */}
                  <div className="space-y-3 mb-8">
                    {features[activeFeature].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-medium hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="flex items-center justify-center">
                      <span>{t.features.detailCard.exploreButton(features[activeFeature].title)}</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="text-center p-4 rounded-xl bg-white/80 border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500 mt-1">{t.features.stats.properties}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/80 border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-500 mt-1">{t.features.stats.uptime}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/80 border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-500 mt-1">{t.features.stats.support}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Integrated with Design */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600/5 via-blue-50 to-purple-600/5 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.features.cta.title}</h3>
              <p className="text-gray-600">{t.features.cta.subtitle}</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all">
                {t.features.cta.buttons.startTrial}
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all">
                {t.features.cta.buttons.scheduleDemo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add to global CSS
const globalCSS = `
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}
`;