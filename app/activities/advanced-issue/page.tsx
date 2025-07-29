import Link from "next/link";
import { ArrowLeft, Clock, Target, FileText, CheckSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AdvancedIssuePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/activities" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Activities Dashboard
          </Link>
        </div>

        {/* Activity Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-orange-600 font-medium">Day 1 • Activity 1.2</div>
                <CardTitle className="text-2xl font-bold text-gray-900">Create Your First Advanced Issue</CardTitle>
              </div>
            </div>
            <p className="text-gray-600">
              Master professional issue creation with user stories, acceptance criteria, and GitLab features
            </p>
          </CardHeader>
        </Card>

        {/* Activity Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Duration</div>
                  <div className="text-sm text-gray-600">20 minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Skill Level</div>
                  <div className="text-sm text-gray-600">Beginner+</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Work Style</div>
                  <div className="text-sm text-gray-600">Individual Practice</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Start Activity Button */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-1/02-create-advanced-issue.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Start Activity - View Instructions
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Opens the detailed step-by-step instructions in a new tab
            </p>
          </CardContent>
        </Card>

        {/* Learning Objectives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎯 What You&apos;ll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Professional Issue Writing</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• User story formatting and structure</li>
                  <li>• Writing specific, testable acceptance criteria</li>
                  <li>• GitLab markdown features and formatting</li>
                  <li>• Issue metadata and organization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Training Platform Enhancement</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 4 enhancement options to choose from</li>
                  <li>• Real-world issue templates</li>
                  <li>• Technical consideration documentation</li>
                  <li>• Quality validation techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prerequisites */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📋 Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Access to the slides-gitlab repository with Developer permissions</li>
              <li>• Completed Activity 1.1 (GitLab Navigation Practice)</li>
              <li>• Basic understanding of user stories (will be reviewed)</li>
              <li>• Familiarity with GitLab interface from navigation practice</li>
            </ul>
          </CardContent>
        </Card>

        {/* Enhancement Options */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🚀 Choose Your Enhancement Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Select one training platform improvement to create a comprehensive issue:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border">
                <h4 className="font-medium text-blue-800 mb-2">Option 1: Learner Experience</h4>
                <p className="text-sm text-gray-600">Progress tracking, interactive exercises, accessibility improvements</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border">
                <h4 className="font-medium text-green-800 mb-2">Option 2: Trainer Productivity</h4>
                <p className="text-sm text-gray-600">Presentation tools, audience engagement, session management</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border">
                <h4 className="font-medium text-purple-800 mb-2">Option 3: Content Creation</h4>
                <p className="text-sm text-gray-600">Content templates, collaboration tools, preview capabilities</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border">
                <h4 className="font-medium text-orange-800 mb-2">Option 4: Platform Performance</h4>
                <p className="text-sm text-gray-600">Loading speed, mobile responsiveness, error handling</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Learning Outcomes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📝 Activity Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">User Story Mastery</h4>
                  <p className="text-sm text-gray-600">Learn to write compelling user stories that drive development decisions</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Acceptance Criteria Development</h4>
                  <p className="text-sm text-gray-600">Create specific, testable requirements that guide development and QA</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">GitLab Feature Integration</h4>
                  <p className="text-sm text-gray-600">Leverage labels, metadata, and formatting for professional issue management</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-1/02-create-advanced-issue.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
            >
              Start Advanced Issue Creation
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </CardContent>
        </Card>

        {/* Navigation Footer */}
        <div className="flex justify-between">
          <Link 
            href="/activities/gitlab-navigation" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: GitLab Navigation
          </Link>
          
          <Link 
            href="/activities/time-tracking" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            Next: Time Tracking Practice
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
