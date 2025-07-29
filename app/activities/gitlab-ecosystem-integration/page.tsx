import Link from "next/link";
import { BookOpen, Clock, Target, Users, Settings, Zap, Network, ArrowRight, ArrowLeft, Puzzle, Workflow } from "lucide-react";

export default function GitLabEcosystemIntegrationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Network className="w-8 h-8 text-yellow-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.5: GitLab Ecosystem Integration Planning</h1>
              <p className="text-gray-600">Design comprehensive integration strategies for your team's workflow optimization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              25 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Strategic level
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Planning workshop
            </span>
          </div>
          
          {/* Start Activity Button */}
          <div className="mt-6">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/05-gitlab-ecosystem-integration-planning.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <Network className="w-5 h-5" />
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
                <Puzzle className="w-5 h-5 text-yellow-600" />
                Integration Strategy Development
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Current state tool ecosystem analysis</li>
                <li>• Integration opportunity identification and prioritization</li>
                <li>• API and webhook strategy planning</li>
                <li>• Cross-platform workflow design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-blue-600" />
                Implementation Planning
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technical requirements documentation</li>
                <li>• Phased rollout strategy creation</li>
                <li>• Risk assessment and mitigation planning</li>
                <li>• Success metrics and measurement frameworks</li>
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
            <li>• Completed Activity 3.3 (Brainstorm Ideal Integration)</li>
            <li>• Understanding of your team's current tool ecosystem</li>
            <li>• Access to GitLab integration documentation</li>
            <li>• Basic knowledge of API concepts and webhook functionality</li>
            <li>• Familiarity with your organization's existing workflows</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-yellow-800">Current State Analysis (8 minutes)</h4>
                <p className="text-sm text-yellow-700">Map existing tools, identify pain points, and document current workflow inefficiencies</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Integration Opportunity Mapping (12 minutes)</h4>
                <p className="text-sm text-blue-700">Identify high-impact integration possibilities and evaluate technical feasibility</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-green-800">Implementation Planning (5 minutes)</h4>
                <p className="text-sm text-green-700">Create actionable roadmap with timelines, resources, and success metrics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Integration Areas */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Key Integration Areas You'll Explore</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Development Tools</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• IDE integrations</li>
                <li>• Code quality tools</li>
                <li>• Testing frameworks</li>
                <li>• Deployment platforms</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Business Systems</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Project management</li>
                <li>• Communication platforms</li>
                <li>• Documentation systems</li>
                <li>• Analytics tools</li>
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-800">External Services</h4>
              </div>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Cloud providers</li>
                <li>• Monitoring services</li>
                <li>• Security scanners</li>
                <li>• Third-party APIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            This strategic planning approach mirrors how enterprise organizations design their development ecosystems. You'll learn the same methodology used by platform teams at major tech companies.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                The slides-gitlab training platform integrates with multiple tools for content management, deployment, and user tracking. You'll practice the same strategic thinking used to design this platform's integration architecture.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Enterprise Skills</h4>
              <p className="text-sm text-gray-600">
                These planning skills are essential for DevOps engineers, platform architects, and team leads responsible for optimizing development workflows and tool ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Examples */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">⚡ Common Integration Patterns</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🔄 Automated Workflows</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Issue creation from external systems</li>
                <li>• Automated testing and quality gates</li>
                <li>• Deployment pipeline triggers</li>
                <li>• Notification and reporting automation</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">📊 Data Synchronization</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Project status updates across tools</li>
                <li>• Metrics aggregation and dashboards</li>
                <li>• User authentication and provisioning</li>
                <li>• Cross-platform search and discovery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Criteria */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Success Criteria</h3>
          <p className="text-green-700 mb-4">You'll know you've mastered this activity when you can:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Map your current tool ecosystem comprehensively</li>
              <li>• Identify high-impact integration opportunities</li>
              <li>• Evaluate technical feasibility and resource requirements</li>
              <li>• Design phased implementation strategies</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Document integration requirements clearly</li>
              <li>• Create realistic timelines and milestones</li>
              <li>• Define measurable success metrics</li>
              <li>• Plan for change management and adoption</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/advanced-git-workflow" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Advanced Git Workflow
          </Link>
          
          <Link 
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
