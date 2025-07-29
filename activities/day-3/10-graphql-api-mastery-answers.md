# Activity 3.10: GraphQL API Mastery - Solutions & Advanced Techniques

## 🎯 **Challenge Solutions**

This document provides complete solutions for all GraphQL challenges, along with advanced techniques and optimization tips.

---

## 🏁 **Challenge 1 Solution: Project Discovery**

```graphql
query BasicProjectInfo($projectPath: ID!) {
  project(fullPath: $projectPath) {
    id
    name
    description
    webUrl
    defaultBranch
    starCount
    forkCount
    createdAt
    lastActivityAt
  }
}
```

**Variables:**
```json
{
  "projectPath": "gitlab-org/gitlab"
}
```

**Key Learning Points:**
- Always include `id` for GraphQL caching optimization
- Use variables (`$projectPath`) for reusable queries
- `fullPath` parameter accepts "namespace/project-name" format
- Repository statistics are directly available on the project object

---

## 🔍 **Challenge 2 Solution: Issue Investigation**

```graphql
query ProjectIssues($projectPath: ID!, $issueCount: Int = 10) {
  project(fullPath: $projectPath) {
    id
    name
    issues(state: opened, first: $issueCount) {
      nodes {
        id
        iid
        title
        description(limit: 100)
        webUrl
        createdAt
        updatedAt
        author {
          id
          name
          username
          avatarUrl
        }
        labels {
          nodes {
            id
            title
            color
            description
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
}
```

**Variables:**
```json
{
  "projectPath": "gitlab-org/gitlab",
  "issueCount": 10
}
```

**Advanced Filtering Example:**
```graphql
query FilteredIssues($projectPath: ID!) {
  project(fullPath: $projectPath) {
    id
    issues(
      state: opened
      first: 10
      labelName: ["bug", "critical"]
      createdAfter: "2024-01-01T00:00:00Z"
      assigneeUsername: "specific-user"
    ) {
      nodes {
        title
        labels { nodes { title } }
        assignees { nodes { username } }
      }
    }
  }
}
```

**Key Learning Points:**
- Use `pageInfo` for proper pagination implementation
- `iid` is the issue number visible to users, `id` is internal GraphQL ID
- `description(limit: 100)` prevents large text fields from bloating responses
- Nested filtering combines multiple criteria efficiently

---

## 🔀 **Challenge 3 Solution: Merge Request Analysis**

```graphql
query MergeRequestAnalysis($projectPath: ID!) {
  project(fullPath: $projectPath) {
    id
    name
    mergeRequests(last: 5) {
      nodes {
        id
        iid
        title
        description
        sourceBranch
        targetBranch
        state
        mergeStatus
        createdAt
        updatedAt
        webUrl
        upvotes
        downvotes
        author {
          ...UserDetails
        }
        assignees {
          nodes {
            ...UserDetails
          }
        }
        approvedBy {
          nodes {
            ...UserDetails
          }
        }
        headPipeline {
          id
          status
          createdAt
          duration
          coverage
        }
        diffStats {
          additions
          deletions
        }
      }
    }
  }
}

fragment UserDetails on User {
  id
  name
  username
  avatarUrl
  webUrl
}
```

**Advanced MR Query with Approval Rules:**
```graphql
query MRWithApprovals($projectPath: ID!, $mrIid: String!) {
  project(fullPath: $projectPath) {
    mergeRequest(iid: $mrIid) {
      id
      title
      approvalState {
        rules {
          nodes {
            id
            name
            approvalsRequired
            eligibleApprovers {
              nodes {
                name
                username
              }
            }
          }
        }
      }
      approvedBy {
        nodes {
          name
          username
        }
      }
    }
  }
}
```

**Key Learning Points:**
- Use fragments (`...UserDetails`) to avoid repetition
- `headPipeline` provides the most recent pipeline info
- `diffStats` shows code change metrics
- Approval information requires specific GitLab editions

---

## ⚙️ **Challenge 4 Solution: Pipeline Deep Dive**

```graphql
query PipelineAnalysis($projectPath: ID!, $branchName: String = "main") {
  project(fullPath: $projectPath) {
    id
    name
    pipelines(ref: $branchName, first: 3) {
      nodes {
        id
        iid
        status
        source
        duration
        coverage
        createdAt
        updatedAt
        webUrl
        commit {
          id
          sha
          shortSha
          title
          message
          authoredDate
          author {
            name
            username
          }
        }
        jobs {
          nodes {
            id
            name
            status
            stage
            duration
            createdAt
            finishedAt
            webUrl
            artifacts {
              nodes {
                name
                fileType
                size
              }
            }
          }
          count
        }
        stages {
          nodes {
            name
            status
            duration
          }
        }
      }
    }
  }
}
```

**Pipeline Metrics Query:**
```graphql
query PipelineMetrics($projectPath: ID!, $since: Time!) {
  project(fullPath: $projectPath) {
    id
    pipelines(createdAfter: $since, first: 50) {
      nodes {
        status
        duration
        createdAt
      }
    }
  }
}
```

**Key Learning Points:**
- `jobs.count` provides total job count without fetching all job details
- `stages` gives overview of pipeline organization
- `artifacts` information requires appropriate permissions
- Use date filtering for performance metrics analysis

---

## 🎯 **Challenge 5 Solution: Advanced Query Optimization**

```graphql
query ComprehensiveProjectDashboard($projectPath: ID!, $since: Time!) {
  project(fullPath: $projectPath) {
    id
    name
    description
    webUrl
    
    # Project Statistics (using aliases)
    openIssues: issues(state: opened) { totalCount }
    closedIssues: issues(state: closed) { totalCount }
    openMRs: mergeRequests(state: opened) { totalCount }
    mergedMRs: mergeRequests(state: merged) { totalCount }
    
    # Recent Activity
    recentIssues: issues(createdAfter: $since, first: 5) {
      nodes {
        ...IssueInfo
      }
    }
    
    recentMRs: mergeRequests(createdAfter: $since, first: 5) {
      nodes {
        ...MRInfo
      }
    }
    
    recentPipelines: pipelines(createdAfter: $since, first: 10) {
      nodes {
        id
        status
        duration
        createdAt
        commit {
          ...CommitInfo
        }
      }
    }
    
    # Repository Structure
    repository {
      tree(path: "src", recursive: false) {
        nodes {
          id
          name
          type
          path
        }
      }
      rootRef
    }
    
    # Top Contributors
    repository {
      commits: tree {
        lastCommit {
          author {
            ...AuthorInfo
          }
        }
      }
    }
  }
}

fragment IssueInfo on Issue {
  id
  iid
  title
  state
  createdAt
  author {
    ...AuthorInfo
  }
  labels {
    nodes {
      title
      color
    }
  }
}

fragment MRInfo on MergeRequest {
  id
  iid
  title
  state
  sourceBranch
  targetBranch
  createdAt
  author {
    ...AuthorInfo
  }
}

fragment CommitInfo on Commit {
  id
  sha
  shortSha
  title
  authoredDate
  author {
    ...AuthorInfo
  }
}

fragment AuthorInfo on User {
  id
  name
  username
  avatarUrl
}
```

**Variables:**
```json
{
  "projectPath": "gitlab-org/gitlab",
  "since": "2024-01-20T00:00:00Z"
}
```

**Key Learning Points:**
- Aliases (`openIssues`, `closedIssues`) make results more readable
- Fragments reduce duplication and improve maintainability
- `totalCount` gives metrics without fetching actual data
- Single query can replace multiple API calls

---

## 🚀 **Challenge 6 Solutions: Custom Analytics Queries**

### **Option A: Release Planning Dashboard**

```graphql
query ReleasePlanningDashboard($projectPath: ID!) {
  project(fullPath: $projectPath) {
    id
    name
    
    # Upcoming Milestones
    milestones(state: active, first: 5) {
      nodes {
        id
        title
        description
        dueDate
        webUrl
        stats {
          totalIssuesCount
          closedIssuesCount
        }
        issues(first: 20) {
          nodes {
            id
            title
            state
            weight
            labels {
              nodes {
                title
                color
              }
            }
            assignees {
              nodes {
                name
                username
              }
            }
          }
        }
      }
    }
    
    # Blocker Analysis
    blockerIssues: issues(
      state: opened
      labelName: ["blocker", "critical"]
      first: 10
    ) {
      nodes {
        id
        title
        createdAt
        assignees {
          nodes {
            name
            username
          }
        }
        milestone {
          title
          dueDate
        }
      }
    }
    
    # MR Velocity
    recentMRs: mergeRequests(
      state: merged
      createdAfter: "2024-01-01T00:00:00Z"
      first: 50
    ) {
      nodes {
        id
        createdAt
        mergedAt
        author {
          username
        }
      }
    }
  }
}
```

### **Option B: Team Productivity Report**

```graphql
query TeamProductivityReport($projectPath: ID!, $since: Time!) {
  project(fullPath: $projectPath) {
    id
    name
    
    # Contributor Activity
    mergeRequests(createdAfter: $since, first: 100) {
      nodes {
        id
        createdAt
        mergedAt
        state
        author {
          username
          name
        }
        diffStats {
          additions
          deletions
        }
        userNotesCount
      }
    }
    
    # Code Review Participation
    mergeRequests(updatedAfter: $since, first: 100) {
      nodes {
        id
        discussions {
          nodes {
            notes {
              nodes {
                author {
                  username
                }
                createdAt
                system
              }
            }
          }
        }
        approvedBy {
          nodes {
            username
          }
        }
      }
    }
    
    # Issue Resolution Patterns
    issues(updatedAfter: $since, first: 100) {
      nodes {
        id
        state
        createdAt
        closedAt
        assignees {
          nodes {
            username
          }
        }
        milestone {
          title
          dueDate
        }
      }
    }
  }
}
```

### **Option C: Quality Metrics Analysis**

```graphql
query QualityMetricsAnalysis($projectPath: ID!, $since: Time!) {
  project(fullPath: $projectPath) {
    id
    name
    
    # Pipeline Success Rates
    pipelines(createdAfter: $since, first: 100) {
      nodes {
        id
        status
        duration
        coverage
        createdAt
        jobs {
          nodes {
            status
            stage
            name
          }
        }
      }
    }
    
    # Security Vulnerabilities (if available)
    vulnerabilities(first: 50) {
      nodes {
        id
        title
        severity
        state
        reportType
        detectedAt
        resolvedAt
      }
    }
    
    # Recent Commits for Code Quality
    repository {
      tree {
        lastCommit {
          id
          sha
          message
          authoredDate
        }
      }
    }
  }
}
```

---

## 🔧 **Advanced Techniques & Best Practices**

### **1. Query Variables and Reusability**

```graphql
query FlexibleProjectQuery(
  $projectPath: ID!
  $issueState: IssueState = opened
  $mrState: MergeRequestState = opened
  $pageSize: Int = 20
  $since: Time
) {
  project(fullPath: $projectPath) {
    issues(state: $issueState, first: $pageSize, createdAfter: $since) {
      nodes { title }
      pageInfo { hasNextPage }
    }
    mergeRequests(state: $mrState, first: $pageSize, createdAfter: $since) {
      nodes { title }
      pageInfo { hasNextPage }
    }
  }
}
```

### **2. Error Handling Patterns**

```graphql
query RobustProjectQuery($projectPath: ID!) {
  project(fullPath: $projectPath) {
    id
    name
    
    # Handle potential null/missing data
    defaultBranch
    repository {
      exists
      empty
    }
    
    # Graceful degradation for features that might not be available
    issues(first: 1) {
      totalCount
    }
    
    mergeRequests(first: 1) {
      totalCount
    }
  }
}
```

### **3. Pagination Patterns**

```graphql
query PaginatedIssues($projectPath: ID!, $after: String) {
  project(fullPath: $projectPath) {
    issues(first: 20, after: $after) {
      nodes {
        id
        title
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
```

### **4. Performance Optimization**

```graphql
# BAD: Over-fetching
query OverFetchingExample($projectPath: ID!) {
  project(fullPath: $projectPath) {
    issues {
      nodes {
        id
        title
        description  # Large field, potentially unused
        notes {      # Expensive nested query
          nodes {
            body
            author {
              name
              bio      # Unnecessary detail
            }
          }
        }
      }
    }
  }
}

# GOOD: Optimized fetching
query OptimizedExample($projectPath: ID!) {
  project(fullPath: $projectPath) {
    issues(first: 20) {  # Always paginate
      nodes {
        id
        title
        # Only fetch what you need
      }
      totalCount  # Often more useful than all data
    }
  }
}
```

### **5. Authentication & Permissions**

```bash
# Using Personal Access Token
curl -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"query": "{ currentUser { name } }"}' \
  https://gitlab.com/api/graphql
```

---

## 🤖 **Automation Examples**

### **CI/CD Pipeline Integration**

```yaml
# .gitlab-ci.yml
graphql_report:
  stage: report
  script:
    - |
      curl -H "Authorization: Bearer $CI_JOB_TOKEN" \
           -H "Content-Type: application/json" \
           -X POST \
           -d '{
             "query": "query($projectPath: ID!) { 
               project(fullPath: $projectPath) { 
                 pipelines(first: 1) { 
                   nodes { status coverage } 
                 } 
               } 
             }",
             "variables": {"projectPath": "'$CI_PROJECT_PATH'"}
           }' \
           $CI_API_V4_URL/graphql
```

### **Python Script Example**

```python
import requests
import json

def query_gitlab_graphql(query, variables=None, token=None):
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'query': query,
        'variables': variables or {}
    }
    
    response = requests.post(
        'https://gitlab.com/api/graphql',
        headers=headers,
        json=payload
    )
    
    return response.json()

# Usage
query = """
query ProjectStats($path: ID!) {
  project(fullPath: $path) {
    name
    starCount
    issues(state: opened) { totalCount }
  }
}
"""

result = query_gitlab_graphql(
    query, 
    {'path': 'gitlab-org/gitlab'}, 
    'your-token-here'
)
print(json.dumps(result, indent=2))
```

---

## 🎓 **Further Learning Resources**

### **Official Documentation**
- [GitLab GraphQL API Docs](https://docs.gitlab.com/ee/api/graphql/)
- [GraphQL Explorer](https://gitlab.com/-/graphql-explorer)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)

### **Advanced Topics to Explore**
1. **Mutations**: Creating and updating GitLab resources
2. **Subscriptions**: Real-time updates (if supported)
3. **Custom Fields**: Extending queries with custom data
4. **Rate Limiting**: Understanding and managing API limits
5. **Batch Operations**: Efficient bulk data operations

### **Integration Opportunities**
- **Dashboard Creation**: Build custom project dashboards
- **Automated Reporting**: Generate periodic team reports
- **Workflow Automation**: Trigger actions based on GraphQL data
- **Data Analysis**: Export GitLab data for advanced analytics
- **Integration Testing**: Validate GitLab configurations

---

## ✅ **Mastery Checklist**

- [ ] Can write basic GraphQL queries without assistance
- [ ] Understand GraphQL schema and type system
- [ ] Use fragments effectively to organize queries
- [ ] Implement proper pagination for large datasets
- [ ] Handle errors and edge cases gracefully
- [ ] Optimize queries for performance
- [ ] Integrate GraphQL queries into automation scripts
- [ ] Applied GraphQL knowledge to solve real project needs

**Congratulations!** You've mastered GitLab's GraphQL API. You can now build sophisticated integrations, automate complex workflows, and extract valuable insights from your GitLab projects.
