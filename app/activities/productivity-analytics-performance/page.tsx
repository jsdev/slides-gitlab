import Link from "next/link";
import { BookOpen, Clock, Target, Users, BarChart, TrendingUp, Zap, ArrowRight, ArrowLeft, Activity, PieChart, LineChart } from "lucide-react";

export default function ProductivityAnalyticsPerformancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <BarChart className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.9: Productivity Analytics & Performance Optimization</h1>
              <p className="text-gray-600">Master analytics and insights for measuring productivity and optimizing workflows</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              30 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Advanced level
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Data-driven focus
            </span>
          </div>
          
          {/* Start Activity Button */}
          <div className="mt-6">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/09-productivity-analytics-performance-optimization.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <BarChart className="w-5 h-5" />
              Start Activity - View Instructions
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Opens the detailed step-by-step instructions in a new tab
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 What You'll Master</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Analytics & Metrics
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Team productivity measurement and KPIs</li>
                <li>• Workflow bottleneck identification</li>
                <li>• Performance trend analysis</li>
                <li>• Data-driven decision making frameworks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Optimization Strategies
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Process improvement identification</li>
                <li>• Resource allocation optimization</li>
                <li>• Workflow efficiency enhancement</li>
                <li>• Continuous improvement implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Prerequisites
          </h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>• Completed Activities 3.1-3.8 (Full Day 3 workflow implementation)</li>
            <li>• Active GitLab project with historical data (issues, merge requests, CI/CD runs)</li>
            <li>• Understanding of team productivity challenges</li>
            <li>• Access to GitLab analytics features</li>
            <li>• Basic knowledge of performance metrics and KPIs</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-emerald-800">Analytics Dashboard Setup (10 minutes)</h4>
                <p className="text-sm text-emerald-700">Configure GitLab analytics views, set up key metrics tracking, and create custom dashboards</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Performance Metrics Analysis (12 minutes)</h4>
                <p className="text-sm text-blue-700">Analyze team productivity data, identify patterns, and assess workflow efficiency</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-orange-800">Optimization Strategy Development (8 minutes)</h4>
                <p className="text-sm text-orange-700">Develop actionable improvement plans based on analytics insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Features Covered */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Analytics Features You'll Master</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Team Productivity</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Velocity tracking</li>
                <li>• Throughput analysis</li>
                <li>• Cycle time measurement</li>
                <li>• Resource utilization</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <LineChart className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Quality Metrics</h4>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Defect rates</li>
                <li>• Code review efficiency</li>
                <li>• Test coverage trends</li>
                <li>• Pipeline success rates</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Process Efficiency</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Lead time optimization</li>
                <li>• Bottleneck identification</li>
                <li>• Workflow automation</li>
                <li>• Resource allocation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Metrics & KPIs */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Key Metrics & KPIs You'll Track</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">⚡ Velocity & Throughput</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Story Points Completed:</strong> Sprint velocity tracking</li>
                <li>• <strong>Issues Closed per Sprint:</strong> Throughput measurement</li>
                <li>• <strong>Lead Time:</strong> Idea to delivery duration</li>
                <li>• <strong>Cycle Time:</strong> Development to deployment speed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🎯 Quality & Efficiency</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Defect Escape Rate:</strong> Quality measurement</li>
                <li>• <strong>Code Review Time:</strong> Review process efficiency</li>
                <li>• <strong>Pipeline Duration:</strong> CI/CD performance</li>
                <li>• <strong>Deployment Frequency:</strong> Release velocity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitLab Analytics Tools */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🛠️ GitLab Analytics Tools You'll Use</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">📊 Built-in Analytics</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Project Analytics:</strong> Overview dashboards</li>
                <li>• <strong>Issue Analytics:</strong> Issue lifecycle tracking</li>
                <li>• <strong>Merge Request Analytics:</strong> Code review metrics</li>
                <li>• <strong>CI/CD Analytics:</strong> Pipeline performance</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🎯 Advanced Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Value Stream Analytics:</strong> End-to-end flow</li>
                <li>• <strong>Productivity Analytics:</strong> Team performance</li>
                <li>• <strong>Custom Dashboards:</strong> Tailored reporting</li>
                <li>• <strong>API Integration:</strong> External analytics tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            These analytics techniques are essential for engineering managers, team leads, and DevOps professionals who need to measure and improve team performance in data-driven organizations.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                The slides-gitlab training platform uses sophisticated analytics to track content effectiveness, user engagement, and platform performance. You'll practice the same analytical approaches used to continuously improve this training program.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Professional Impact</h4>
              <p className="text-sm text-gray-600">
                Analytics skills are crucial for technical leaders, product managers, and agile coaches who need to identify bottlenecks, optimize processes, and demonstrate value to stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Optimization Strategies */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🚀 Optimization Strategies You'll Develop</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">⚡ Process Improvements</h4>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Workflow bottleneck elimination</li>
                <li>• Automation opportunity identification</li>
                <li>• Resource reallocation strategies</li>
                <li>• Communication enhancement</li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">📈 Performance Enhancement</h4>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Velocity increase techniques</li>
                <li>• Quality improvement methods</li>
                <li>• Delivery time reduction</li>
                <li>• Predictability enhancement</li>
              </ul>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">🎯 Strategic Alignment</h4>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Business value optimization</li>
                <li>• Stakeholder satisfaction</li>
                <li>• Risk mitigation strategies</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data-Driven Decision Framework */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🧠 Data-Driven Decision Framework</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">1</div>
              <div>
                <h4 className="font-medium text-gray-800">Collect & Measure</h4>
                <p className="text-sm text-gray-600">Establish baseline metrics and consistent data collection</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600">2</div>
              <div>
                <h4 className="font-medium text-gray-800">Analyze & Interpret</h4>
                <p className="text-sm text-gray-600">Identify patterns, trends, and root cause analysis</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">3</div>
              <div>
                <h4 className="font-medium text-gray-800">Plan & Implement</h4>
                <p className="text-sm text-gray-600">Develop targeted improvements and track impact</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">4</div>
              <div>
                <h4 className="font-medium text-gray-800">Monitor & Iterate</h4>
                <p className="text-sm text-gray-600">Continuous monitoring and iterative refinement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Criteria */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Success Criteria</h3>
          <p className="text-green-700 mb-4">You'll know you've mastered this activity when you can:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Set up comprehensive analytics dashboards</li>
              <li>• Identify key productivity and quality metrics</li>
              <li>• Analyze workflow bottlenecks and inefficiencies</li>
              <li>• Create data-driven improvement strategies</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Implement performance optimization initiatives</li>
              <li>• Track improvement progress over time</li>
              <li>• Communicate insights to stakeholders effectively</li>
              <li>• Establish continuous improvement processes</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/security-compliance-workflow" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Security & Compliance
          </Link>
          
          <Link 
            href="/activities/graphql-api-mastery" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Next: GraphQL API Mastery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
