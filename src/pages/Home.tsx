import { Building2, Zap, Users, TrendingUp, Wrench, ChevronRight, Shield, BarChart, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section with Integrated Dashboard */}
      <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-gray-50/50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline & Value Proposition */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  {t.home.hero.trustedBy}
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">{t.home.hero.titleLine1}</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    {t.home.hero.titleLine2}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mt-6 max-w-lg leading-relaxed">
                  {t.home.hero.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center">
                  {t.home.hero.cta.startTrial}
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-md"></div>
                </button>
                
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                  {t.home.hero.cta.scheduleDemo}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-500">{t.home.hero.trustIndicators.uptime}</div>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">{t.home.hero.trustIndicators.support}</div>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">30-d</div>
                  <div className="text-sm text-gray-500">{t.home.hero.trustIndicators.freeTrial}</div>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              {/* Dashboard Container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Dashboard Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="ml-4 text-lg font-semibold text-gray-900">{t.home.dashboard.overview}</span>
                    </div>
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">24</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{t.home.dashboard.properties}</p>
                    </div>
                    
                    <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center justify-between">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">156</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{t.home.dashboard.tenants}</p>
                    </div>
                    
                    <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                      <div className="flex items-center justify-between">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <span className="text-2xl font-bold text-gray-900">$42K</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{t.home.dashboard.rentDue}</p>
                    </div>
                    
                    <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                      <div className="flex items-center justify-between">
                        <Wrench className="w-5 h-5 text-orange-600" />
                        <span className="text-2xl font-bold text-gray-900">7</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{t.home.dashboard.openTickets}</p>
                    </div>
                  </div>

                  {/* Mini Revenue Chart */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{t.home.dashboard.revenueTrend}</h3>
                      <span className="text-sm text-green-600 font-medium">+12.5%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{t.home.dashboard.recentActivity}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{t.home.dashboard.rentPaidUnit("402")}</p>
                          <p className="text-xs text-gray-500">{t.home.dashboard.hoursAgo(2)}</p>
                        </div>
                        <span className="text-sm font-medium text-green-600">$2,500</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Wrench className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{t.home.dashboard.maintenanceUnit("203")}</p>
                          <p className="text-xs text-gray-500">{t.home.dashboard.daysAgo(1)}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-500">{t.home.dashboard.inProgress}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Footer */}
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{t.home.dashboard.systemOnline}</span>
                    </div>
                    <div className="text-sm text-gray-500">{t.home.dashboard.aiInsightsActive}</div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <div className="absolute -top-4 -left-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-200">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">{t.home.dashboard.aiAutomation}</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-200">
                  <BarChart className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-900">{t.home.dashboard.liveAnalytics}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Mini Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.home.dashboard.propertyManagement}</h3>
                <p className="text-sm text-gray-600">{t.home.dashboard.propertyDescription}</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.home.dashboard.tenantManagement}</h3>
                <p className="text-sm text-gray-600">{t.home.dashboard.tenantDescription}</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.home.dashboard.financialTracking}</h3>
                <p className="text-sm text-gray-600">{t.home.dashboard.financialDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};