import Link from "next/link";
import { BookOpen, Clock, Target, Users, Calendar, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, PlaneTakeoff, Building } from "lucide-react";

export default function ImplementationPlanningWorkshopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <PlaneTakeoff className="w-8 h-8 text-indigo-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.6: Implementation Planning Workshop</h1>
              <p className="text-gray-600">Create comprehensive GitLab implementation plans for organizational success</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              30 minutes total
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
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/06-implementation-planning-workshop.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <PlaneTakeoff className="w-5 h-5" />
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
                <Calendar className="w-5 h-5 text-indigo-600" />
                Strategic Planning
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comprehensive implementation timeline creation</li>
                <li>• Resource allocation and capacity planning</li>
                <li>• Risk assessment and mitigation strategies</li>
                <li>• Success metrics and measurement frameworks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Organizational Change
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Change management strategy development</li>
                <li>• Training program design and delivery</li>
                <li>• Stakeholder communication planning</li>
                <li>• Adoption monitoring and optimization</li>
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
            <li>• Completed Activities 3.1-3.5 (Advanced GitLab workflows and integrations)</li>
            <li>• Understanding of your organization's current development processes</li>
            <li>• Knowledge of team structure and technical capabilities</li>
            <li>• Awareness of organizational change management processes</li>
            <li>• Familiarity with project planning methodologies</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-indigo-800">Current State Assessment (5 minutes)</h4>
                <p className="text-sm text-indigo-700">Evaluate existing processes, tools, and organizational readiness for GitLab implementation</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Implementation Strategy Design (15 minutes)</h4>
                <p className="text-sm text-blue-700">Create phased rollout plan with timelines, milestones, and success criteria</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-green-800">Resource Planning & Risk Management (10 minutes)</h4>
                <p className="text-sm text-green-700">Define resource requirements, identify risks, and develop contingency plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Planning Areas */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🗺️ Key Planning Areas You'll Cover</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Timeline & Phases</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Pilot program planning</li>
                <li>• Gradual rollout strategy</li>
                <li>• Milestone definition</li>
                <li>• Critical path identification</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Training & Adoption</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Training curriculum design</li>
                <li>• Champion identification</li>
                <li>• Support structure setup</li>
                <li>• Adoption metrics tracking</li>
              </ul>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Risk Management</h4>
              </div>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Risk identification</li>
                <li>• Impact assessment</li>
                <li>• Mitigation strategies</li>
                <li>• Contingency planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Framework */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏗️ Implementation Framework</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📊 Assessment Dimensions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Technical Readiness:</strong> Infrastructure, skills, tools</li>
                <li>• <strong>Process Maturity:</strong> Current workflows, documentation</li>
                <li>• <strong>Cultural Factors:</strong> Change readiness, collaboration</li>
                <li>• <strong>Resource Availability:</strong> Time, budget, personnel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🎯 Success Metrics</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Adoption Rates:</strong> User engagement, feature usage</li>
                <li>• <strong>Productivity Gains:</strong> Velocity, efficiency improvements</li>
                <li>• <strong>Quality Metrics:</strong> Defect rates, security posture</li>
                <li>• <strong>Satisfaction Scores:</strong> User feedback, team morale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            This comprehensive planning approach reflects how successful organizations implement GitLab at scale. You'll learn the same strategic methodology used by enterprise teams worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                This slides-gitlab platform itself represents a successful GitLab implementation for training delivery. You'll practice the same strategic planning that went into creating this comprehensive training system.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Enterprise Leadership</h4>
              <p className="text-sm text-gray-600">
                These planning skills are essential for engineering managers, DevOps leaders, and IT directors responsible for driving successful technology transformations.
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Deliverables */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Workshop Deliverables</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">📄 Planning Documents</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Implementation timeline and milestones</li>
                <li>• Resource allocation matrix</li>
                <li>• Risk register with mitigation plans</li>
                <li>• Training curriculum outline</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🎯 Strategic Frameworks</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Change management strategy</li>
                <li>• Communication plan template</li>
                <li>• Success metrics dashboard</li>
                <li>• Stakeholder engagement matrix</li>
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
              <li>• Assess organizational readiness for GitLab implementation</li>
              <li>• Design phased rollout strategies with realistic timelines</li>
              <li>• Identify and plan for potential implementation risks</li>
              <li>• Create comprehensive training and support programs</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Develop measurable success criteria and KPIs</li>
              <li>• Plan resource allocation and budget requirements</li>
              <li>• Design change management and communication strategies</li>
              <li>• Create sustainable adoption and optimization plans</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/gitlab-ecosystem-integration" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: GitLab Ecosystem Integration
          </Link>
          
          <Link 
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
