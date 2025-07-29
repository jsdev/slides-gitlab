import Link from "next/link";
import { BookOpen, Clock, Target, Users, GitBranch, GitMerge, Shield, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

export default function AdvancedGitWorkflowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <GitMerge className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.4: Advanced Git Workflow Implementation</h1>
              <p className="text-gray-600">Master advanced Git branching strategies, merge request workflows, and conflict resolution</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              35 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Advanced level
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Professional practice
            </span>
          </div>
          
          {/* Start Activity Button */}
          <div className="mt-6">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/04-advanced-git-workflow-implementation.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <GitMerge className="w-5 h-5" />
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
                <GitBranch className="w-5 h-5 text-green-600" />
                Advanced Branching Strategies
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Feature branch workflows and GitFlow implementation</li>
                <li>• Branch protection rules and merge policies</li>
                <li>• Hotfix and release branch management</li>
                <li>• Branch cleanup and maintenance strategies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-blue-600" />
                Merge Request Mastery
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Professional merge request creation and templates</li>
                <li>• Code review processes and approval workflows</li>
                <li>• Merge strategies (merge, squash, rebase)</li>
                <li>• Automated testing integration and status checks</li>
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
            <li>• Completed Activity 3.1 (Branch Naming Challenge)</li>
            <li>• Completed Activity 3.2 (Create First CI/CD Pipeline)</li>
            <li>• Access to slides-gitlab repository with Developer permissions</li>
            <li>• Understanding of basic Git operations (clone, add, commit, push)</li>
            <li>• Familiarity with GitLab's merge request interface</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-green-800">Branching Strategy Setup (10 minutes)</h4>
                <p className="text-sm text-green-700">Configure branch protection rules, establish naming conventions, and set up merge policies</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Merge Request Workflow (15 minutes)</h4>
                <p className="text-sm text-blue-700">Create feature branches, implement changes, and practice professional merge request processes</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-orange-800">Conflict Resolution Practice (10 minutes)</h4>
                <p className="text-sm text-orange-700">Handle merge conflicts, practice resolution strategies, and ensure clean integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔑 Key Concepts You'll Apply</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Branch Protection</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Required status checks</li>
                <li>• Review requirements</li>
                <li>• Push restrictions</li>
                <li>• Force push prevention</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <GitMerge className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Merge Strategies</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Merge commits</li>
                <li>• Squash and merge</li>
                <li>• Rebase and merge</li>
                <li>• Fast-forward merges</li>
              </ul>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Conflict Resolution</h4>
              </div>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Merge conflict detection</li>
                <li>• Manual resolution strategies</li>
                <li>• Testing after resolution</li>
                <li>• Prevention techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            This activity mirrors the advanced Git workflows used in professional development environments. You'll practice the same strategies used by teams at companies like GitLab, GitHub, and major tech organizations.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                The slides-gitlab platform uses sophisticated Git workflows to manage contributions from multiple trainers, content updates, and feature development. You'll practice the same workflows used to maintain this training platform.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Professional Skills</h4>
              <p className="text-sm text-gray-600">
                These workflows are essential for any development team working on production applications, ensuring code quality, preventing conflicts, and maintaining stable releases.
              </p>
            </div>
          </div>
        </div>

        {/* Success Criteria */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Success Criteria</h3>
          <p className="text-green-700 mb-4">You'll know you've mastered this activity when you can:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Configure branch protection rules for different environments</li>
              <li>• Create professional merge requests with proper templates</li>
              <li>• Navigate code review processes efficiently</li>
              <li>• Choose appropriate merge strategies for different scenarios</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Resolve merge conflicts using GitLab's interface</li>
              <li>• Implement GitFlow or similar branching strategies</li>
              <li>• Set up automated checks and status requirements</li>
              <li>• Maintain clean commit history and project organization</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/brainstorm-ideal-integration" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Brainstorm Ideal Integration
          </Link>
          
          <Link 
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
