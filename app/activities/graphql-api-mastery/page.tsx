import Link from "next/link";
import { BookOpen, Clock, Target, Users, Database, Code, Zap, ArrowRight, ArrowLeft, Search, MessageSquare, CheckCircle } from "lucide-react";

export default function GraphQLAPIMasteryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.10: GraphQL API Mastery</h1>
              <p className="text-gray-600">Master GitLab's GraphQL API with practical challenges and real-world queries</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              30 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Intermediate to Advanced
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              API exploration focus
            </span>
          </div>
          
          {/* Start Activity Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/10-graphql-api-mastery-challenges.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              Start Challenges - View Instructions
            </a>
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/10-graphql-api-mastery-answers.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              View Solutions & Advanced Techniques
            </a>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://gitlab.com/-/graphql-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors text-sm"
            >
              <Database className="w-4 h-4" />
              Open GitLab GraphQL Explorer
            </a>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Use GitLab Duo Chat for query assistance throughout the activity
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 What You'll Master</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                GraphQL Fundamentals
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GraphQL query structure and syntax</li>
                <li>• Schema exploration and type understanding</li>
                <li>• Efficient data fetching patterns</li>
                <li>• Pagination and filtering techniques</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Advanced Query Techniques
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Query optimization with aliases and fragments</li>
                <li>• Complex nested data relationships</li>
                <li>• Analytics and reporting queries</li>
                <li>• API automation and integration patterns</li>
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
            <li>• Completed Activities 3.1-3.3 (Basic GitLab workflows)</li>
            <li>• Access to GitLab.com or your GitLab instance</li>
            <li>• Basic understanding of JSON and data structures</li>
            <li>• Access to GitLab Duo Chat for query assistance</li>
            <li>• Familiarity with API concepts and REST vs GraphQL differences</li>
          </ul>
        </div>

        {/* Activity Structure */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Structure</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-purple-800">GraphQL Explorer Setup & Orientation (8 minutes)</h4>
                <p className="text-sm text-purple-700">Access GitLab's GraphQL Explorer, understand the interface, and choose a target project</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-blue-800">Basic Query Challenges (12 minutes)</h4>
                <p className="text-sm text-blue-700">Complete 4 progressive challenges covering project info, issues, merge requests, and pipelines</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-green-800">Advanced Query Patterns (10 minutes)</h4>
                <p className="text-sm text-green-700">Master query optimization, fragments, and build comprehensive analytics queries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Overview */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 Challenge Overview</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🎯 Core Challenges (1-4)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Challenge 1:</strong> Project discovery and basic info</li>
                <li>• <strong>Challenge 2:</strong> Issue investigation with filters</li>
                <li>• <strong>Challenge 3:</strong> Merge request analysis</li>
                <li>• <strong>Challenge 4:</strong> Pipeline and CI/CD deep dive</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🚀 Advanced Challenges (5-6)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Challenge 5:</strong> Query optimization techniques</li>
                <li>• <strong>Challenge 6:</strong> Custom analytics scenarios</li>
                <li>• <strong>Bonus:</strong> Real-world automation examples</li>
                <li>• <strong>Integration:</strong> CI/CD and scripting patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitLab Duo Chat Integration */}
        <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            GitLab Duo Chat Integration
          </h3>
          <p className="text-gray-700 mb-4">
            Throughout this activity, leverage GitLab Duo Chat for real-time assistance with GraphQL queries, optimization tips, and best practices.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💡 Query Construction Help</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• "How do I filter GitLab issues by creation date?"</li>
                <li>• "Show me the GraphQL schema for merge requests"</li>
                <li>• "What's the best way to paginate large results?"</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">⚡ Optimization Guidance</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• "How can I optimize this GraphQL query?"</li>
                <li>• "Explain GraphQL fragments and aliases"</li>
                <li>• "Help me add error handling to queries"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GraphQL Explorer Features */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 GraphQL Explorer Features</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Query Editor</h4>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Syntax highlighting</li>
                <li>• Auto-completion</li>
                <li>• Query validation</li>
                <li>• Variable management</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Schema Explorer</h4>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Interactive documentation</li>
                <li>• Type definitions</li>
                <li>• Field descriptions</li>
                <li>• Query examples</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Advanced Features</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Query history</li>
                <li>• Result formatting</li>
                <li>• Performance metrics</li>
                <li>• Query sharing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Applications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📊 Analytics & Reporting</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Team Productivity:</strong> Developer activity metrics</li>
                <li>• <strong>Quality Metrics:</strong> Pipeline success rates and coverage</li>
                <li>• <strong>Project Health:</strong> Issue resolution patterns</li>
                <li>• <strong>Release Planning:</strong> Milestone progress tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🤖 Automation & Integration</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>CI/CD Integration:</strong> Pipeline status queries</li>
                <li>• <strong>Dashboard Creation:</strong> Custom project dashboards</li>
                <li>• <strong>Workflow Automation:</strong> Trigger actions based on data</li>
                <li>• <strong>Data Export:</strong> Extract GitLab data for analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Platform Context */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Training Platform Context</h3>
          <p className="text-gray-700 mb-4">
            The slides-gitlab training platform could benefit from GraphQL automation for content management, user progress tracking, and analytics. Practice queries that could power features like:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Content Management</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated slide generation from issues</li>
                <li>• Content dependency mapping</li>
                <li>• Version control for training materials</li>
                <li>• Multi-language content coordination</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📈 Training Analytics</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User progress tracking across activities</li>
                <li>• Completion rate analysis</li>
                <li>• Knowledge retention metrics</li>
                <li>• Trainer effectiveness insights</li>
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
              <li>• Navigate GitLab's GraphQL Explorer confidently</li>
              <li>• Write efficient queries for common GitLab data</li>
              <li>• Use fragments and aliases for query optimization</li>
              <li>• Implement proper pagination for large datasets</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Create complex analytics queries from scratch</li>
              <li>• Integrate GraphQL queries into automation scripts</li>
              <li>• Troubleshoot and optimize query performance</li>
              <li>• Apply GraphQL knowledge to solve real project needs</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Quick Links & Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Essential Tools</h4>
              <div className="space-y-1">
                <a href="https://gitlab.com/-/graphql-explorer" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-800">
                  • GitLab GraphQL Explorer
                </a>
                <a href="https://docs.gitlab.com/ee/api/graphql/" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-800">
                  • GitLab GraphQL API Documentation
                </a>
                <a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-800">
                  • GraphQL Learning Resources
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Activity Files</h4>
              <div className="space-y-1">
                <a href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/10-graphql-api-mastery-challenges.md" 
                   target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-purple-600 hover:text-purple-800">
                  • Challenge Instructions
                </a>
                <a href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/10-graphql-api-mastery-answers.md" 
                   target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-green-600 hover:text-green-800">
                  • Solutions & Advanced Techniques
                </a>
              </div>
            </div>
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
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
