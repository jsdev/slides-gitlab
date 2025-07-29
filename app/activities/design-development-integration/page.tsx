import Link from "next/link";
import { BookOpen, Clock, Target, Users, Palette, Code, Layers, ArrowRight, ArrowLeft, GitBranch, Eye } from "lucide-react";

export default function DesignDevelopmentIntegrationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Palette className="w-8 h-8 text-pink-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.7: Design-Development Integration Workflow</h1>
              <p className="text-gray-600">Establish seamless collaboration between design and development teams</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              20 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Intermediate level
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Cross-team collaboration
            </span>
          </div>
          
          {/* Start Activity Button */}
          <div className="mt-6">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/07-design-development-integration-workflow.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Palette className="w-5 h-5" />
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
                <Layers className="w-5 h-5 text-pink-600" />
                Design Asset Management
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Version control for design files and assets</li>
                <li>• Design system organization and maintenance</li>
                <li>• Asset linking and dependency management</li>
                <li>• Design token integration with code</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                Collaborative Review Processes
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Design review workflows and approvals</li>
                <li>• Visual diff comparison tools</li>
                <li>• Cross-functional feedback integration</li>
                <li>• Design-to-code handoff automation</li>
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
            <li>• Completed Activity 3.4 (Advanced Git Workflow Implementation)</li>
            <li>• Understanding of design-to-development handoff challenges</li>
            <li>• Access to design files (Figma, Sketch, Adobe XD, or similar)</li>
            <li>• Basic knowledge of GitLab's design management features</li>
            <li>• Familiarity with design systems and component libraries</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-pink-50 rounded-lg border border-pink-200">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-pink-800">Design Asset Management Setup (8 minutes)</h4>
                <p className="text-sm text-pink-700">Configure version control for design files, organize design systems, and establish asset workflows</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Review Workflow Implementation (7 minutes)</h4>
                <p className="text-sm text-blue-700">Set up design review processes, visual diff tools, and cross-functional approval workflows</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-green-800">Integration Points Configuration (5 minutes)</h4>
                <p className="text-sm text-green-700">Connect design tools with development workflows and automate handoff processes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Integration Areas */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Key Integration Areas You'll Configure</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Design Tools</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Figma/Sketch integration</li>
                <li>• Design system linking</li>
                <li>• Asset export automation</li>
                <li>• Design token sync</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Development Workflow</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Component library sync</li>
                <li>• CSS variable generation</li>
                <li>• Style guide automation</li>
                <li>• Build process integration</li>
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-800">Review Processes</h4>
              </div>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Visual approval workflows</li>
                <li>• Design diff comparisons</li>
                <li>• Stakeholder feedback loops</li>
                <li>• Implementation validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workflow Benefits */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ Workflow Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🎨 For Design Teams</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Version Control:</strong> Track design changes and iterations</li>
                <li>• <strong>Collaboration:</strong> Real-time feedback and review processes</li>
                <li>• <strong>Consistency:</strong> Maintained design system integrity</li>
                <li>• <strong>Visibility:</strong> Implementation status tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">⚡ For Development Teams</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Clarity:</strong> Clear design specifications and assets</li>
                <li>• <strong>Automation:</strong> Reduced manual asset management</li>
                <li>• <strong>Quality:</strong> Design-code consistency validation</li>
                <li>• <strong>Efficiency:</strong> Streamlined handoff processes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            This integrated approach mirrors how modern product teams collaborate at scale. You'll learn the same methodologies used by design systems teams at companies with complex multi-platform products.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                The slides-gitlab training platform uses integrated design-development workflows to maintain consistent visual design across slides, web interfaces, and documentation. You'll practice the same collaborative processes used to keep this platform's design system coherent.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Professional Impact</h4>
              <p className="text-sm text-gray-600">
                These workflows are essential for product teams, design systems engineers, and front-end developers working in environments where design consistency and rapid iteration are critical.
              </p>
            </div>
          </div>
        </div>

        {/* Tool Integration Examples */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🛠️ Tool Integration Examples</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🔗 Design Tool Connections</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Figma → GitLab Issues (design specs)</li>
                <li>• Sketch → Asset repository (automated exports)</li>
                <li>• Adobe XD → Component documentation</li>
                <li>• InVision → Prototype review workflows</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">⚙️ Development Integrations</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design tokens → CSS/SCSS variables</li>
                <li>• Component specs → Storybook documentation</li>
                <li>• Asset updates → Build pipeline triggers</li>
                <li>• Design changes → PR review requirements</li>
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
              <li>• Set up version control for design assets and systems</li>
              <li>• Configure automated design-to-code handoff processes</li>
              <li>• Implement visual review and approval workflows</li>
              <li>• Establish design system maintenance procedures</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Create cross-functional collaboration processes</li>
              <li>• Automate design token and asset synchronization</li>
              <li>• Set up design-code consistency validation</li>
              <li>• Monitor and optimize workflow efficiency</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/implementation-planning-workshop" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Implementation Planning Workshop
          </Link>
          
          <Link 
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
