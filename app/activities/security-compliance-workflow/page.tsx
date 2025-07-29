import Link from "next/link";
import { BookOpen, Clock, Target, Users, Shield, Lock, Eye, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";

export default function SecurityComplianceWorkflowPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-red-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Activity 3.8: Security & Compliance Workflow</h1>
              <p className="text-gray-600">Implement comprehensive security scanning and compliance monitoring</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              25 minutes total
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Advanced level
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Security-focused
            </span>
          </div>
          
          {/* Start Activity Button */}
          <div className="mt-6">
            <a 
              href="https://github.com/jsdev/slides-gitlab/blob/main/activities/day-3/08-security-compliance-workflow.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Shield className="w-5 h-5" />
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
                <Shield className="w-5 h-5 text-red-600" />
                Security Scanning & Monitoring
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated vulnerability scanning setup</li>
                <li>• Code quality and security analysis</li>
                <li>• Container and dependency scanning</li>
                <li>• Real-time security monitoring dashboards</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Compliance & Policy Enforcement
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Compliance policy automation</li>
                <li>• Audit trail maintenance</li>
                <li>• Regulatory requirement tracking</li>
                <li>• Security policy enforcement workflows</li>
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
            <li>• Completed Activity 3.2 (Create First CI/CD Pipeline)</li>
            <li>• Understanding of basic security concepts and compliance requirements</li>
            <li>• Access to GitLab Security features (Ultimate tier for advanced features)</li>
            <li>• Knowledge of your organization's security and compliance requirements</li>
            <li>• Familiarity with vulnerability scanning concepts</li>
          </ul>
        </div>

        {/* Activity Phases */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Activity Phases</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-red-800">Security Scanning Setup (10 minutes)</h4>
                <p className="text-sm text-red-700">Configure automated vulnerability scanning, code analysis, and security monitoring tools</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-orange-800">Compliance Workflow Implementation (10 minutes)</h4>
                <p className="text-sm text-orange-700">Set up compliance monitoring, audit trails, and regulatory requirement tracking</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-green-800">Security Policy Enforcement (5 minutes)</h4>
                <p className="text-sm text-green-700">Configure automated policy enforcement and security gate implementations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Covered */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔒 Security Features You'll Implement</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Vulnerability Management</h4>
              </div>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• SAST (Static Analysis)</li>
                <li>• DAST (Dynamic Analysis)</li>
                <li>• Dependency scanning</li>
                <li>• Container image scanning</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Monitoring & Analytics</h4>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Security dashboards</li>
                <li>• Vulnerability trends</li>
                <li>• Compliance reporting</li>
                <li>• Risk assessment metrics</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Policy Enforcement</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Security gates</li>
                <li>• Approval workflows</li>
                <li>• Automated remediation</li>
                <li>• Compliance validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📜 Compliance Standards Addressed</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🏛️ Regulatory Frameworks</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>SOC 2:</strong> Security and availability controls</li>
                <li>• <strong>GDPR:</strong> Data protection and privacy compliance</li>
                <li>• <strong>HIPAA:</strong> Healthcare data security requirements</li>
                <li>• <strong>PCI DSS:</strong> Payment card industry standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🛡️ Security Standards</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>OWASP Top 10:</strong> Web application security risks</li>
                <li>• <strong>CIS Controls:</strong> Critical security controls</li>
                <li>• <strong>NIST Framework:</strong> Cybersecurity framework</li>
                <li>• <strong>ISO 27001:</strong> Information security management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Application */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏢 Real-World Application</h3>
          <p className="text-gray-700 mb-4">
            These security workflows are essential for any organization handling sensitive data or operating in regulated industries. You'll learn the same methodologies used by enterprise security teams to maintain compliance and protect against threats.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Training Platform Context</h4>
              <p className="text-sm text-gray-600">
                The slides-gitlab training platform implements enterprise security practices to protect training content and user data. You'll practice the same security workflows used to maintain this platform's security posture and compliance requirements.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">💼 Professional Impact</h4>
              <p className="text-sm text-gray-600">
                Security and compliance skills are critical for DevOps engineers, security professionals, and development teams working with sensitive data or in regulated environments.
              </p>
            </div>
          </div>
        </div>

        {/* Security Workflow Examples */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 Security Workflow Examples</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">🔍 Automated Scanning</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pre-commit hooks for security checks</li>
                <li>• Pipeline-integrated vulnerability scanning</li>
                <li>• Automated dependency updates</li>
                <li>• Container security validation</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">📊 Compliance Automation</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Audit log collection and analysis</li>
                <li>• Compliance report generation</li>
                <li>• Policy violation notifications</li>
                <li>• Remediation workflow triggers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Metrics & KPIs */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Security Metrics You'll Track</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">🚨 Vulnerability Metrics</h4>
              <ul className="text-xs text-red-600 space-y-1">
                <li>• Critical/High severity count</li>
                <li>• Mean time to detection (MTTD)</li>
                <li>• Mean time to remediation (MTTR)</li>
                <li>• Vulnerability density trends</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">📋 Compliance Metrics</h4>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Policy compliance percentage</li>
                <li>• Audit finding resolution rate</li>
                <li>• Control effectiveness scores</li>
                <li>• Compliance gap analysis</li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">⚡ Process Metrics</h4>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Security gate pass rate</li>
                <li>• False positive reduction</li>
                <li>• Developer security training</li>
                <li>• Incident response time</li>
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
              <li>• Configure comprehensive security scanning pipelines</li>
              <li>• Implement automated compliance monitoring</li>
              <li>• Set up security policy enforcement gates</li>
              <li>• Create security dashboards and reports</li>
            </ul>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Establish vulnerability remediation workflows</li>
              <li>• Configure audit trail collection</li>
              <li>• Implement regulatory compliance validation</li>
              <li>• Monitor and optimize security metrics</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link 
            href="/activities/design-development-integration" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Design-Development Integration
          </Link>
          
          <Link 
            href="/activities" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Back to Activities Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
