# Activity 3.10: GraphQL API Mastery - Challenges

## 🎯 **Objective**
Master GitLab's GraphQL API by running practical queries against real projects using GitLab's GraphQL Explorer. Learn to navigate complex data structures, optimize queries, and leverage GitLab Duo Chat for advanced GraphQL patterns.

---

## ⏱️ **Duration**: 30 minutes
- **GraphQL Explorer Setup & Orientation**: 8 minutes
- **Basic Query Challenges**: 12 minutes
- **Advanced Query Patterns**: 10 minutes

---

## 📋 **Prerequisites**
- Completed Activity 3.1-3.3 (Basic GitLab workflows)
- Access to GitLab.com or your GitLab instance
- Basic understanding of JSON and data structures
- Access to GitLab Duo Chat for query assistance

---

## 🚀 **Your Mission**

Use GitLab's GraphQL Explorer (https://gitlab.com/-/graphql-explorer) to complete a series of progressively challenging queries against real GitLab projects. Each challenge builds your understanding of GraphQL concepts while solving practical GitLab automation scenarios.

### **Training Platform Context**
The slides-gitlab training platform could benefit from GraphQL automation for content management, user progress tracking, and analytics. You'll practice queries that could power features like automated slide generation, training progress reports, and content dependency mapping.

---

## 🔧 **Setup: Access GraphQL Explorer**

1. **Navigate to GraphQL Explorer**
   - Visit: https://gitlab.com/-/graphql-explorer
   - Sign in with your GitLab.com account
   - Grant necessary permissions for API access

2. **Familiarize with Interface**
   - **Left Panel**: Query editor
   - **Middle Panel**: Query results (JSON)
   - **Right Panel**: Documentation explorer
   - **Top**: Query history and sharing options

3. **Choose Your Target Project**
   - Use a project you have access to (your own or public)
   - Recommended: `gitlab-org/gitlab` for comprehensive data
   - Alternative: Any active project with issues, merge requests, and pipelines

---

## 📝 **Challenge Series**

### **🏁 Challenge 1: Project Discovery (3 minutes)**

**Goal**: Get basic project information and understand GraphQL structure.

**Your Task**: Write a query to fetch:
- Project name and description
- Project ID and web URL
- Default branch name
- Star count and fork count

**Hints**:
- Start with the `project` root field
- Use `fullPath` parameter: `"gitlab-org/gitlab"` or your chosen project
- Explore the right panel to discover available fields
- 💡 **Duo Chat Prompt**: "How do I query basic project information using GitLab GraphQL API?"

**Success Criteria**: You should get a JSON response with project metadata.

---

### **🔍 Challenge 2: Issue Investigation (4 minutes)**

**Goal**: Query issues with specific filters and understand pagination.

**Your Task**: Write a query to find:
- First 10 open issues
- Issue title, description (first 100 characters), and web URL
- Author information (name and username)
- Created date and updated date
- Label names

**Hints**:
- Use `issues` field within the project
- Apply `state: opened` filter
- Use `first: 10` for pagination
- Truncate description with `description(limit: 100)`
- 💡 **Duo Chat Prompt**: "Show me how to query GitLab issues with author details and labels using GraphQL"

**Bonus**: Try filtering by specific labels or date ranges.

---

### **🔀 Challenge 3: Merge Request Analysis (5 minutes)**

**Goal**: Understand complex nested queries and merge request workflows.

**Your Task**: Write a query to fetch:
- Last 5 merge requests (any state)
- Title, description, source branch, target branch
- Author and assignee information
- Approval status and merge status
- Pipeline status (if available)
- Number of upvotes and downvotes

**Hints**:
- Use `mergeRequests` field with `last: 5`
- Nested fields: `author { name username }`, `assignees { nodes { name } }`
- Pipeline info: `headPipeline { status }`
- 💡 **Duo Chat Prompt**: "Help me write a GraphQL query for GitLab merge requests with pipeline and approval details"

**Bonus**: Filter for merge requests from a specific author or with specific approval status.

---

### **⚙️ Challenge 4: Pipeline Deep Dive (4 minutes)**

**Goal**: Navigate complex data relationships and understand CI/CD through GraphQL.

**Your Task**: Write a query to fetch:
- Last 3 pipelines from the default branch
- Pipeline status, duration, and created date
- Associated commit information (SHA, message, author)
- Job details: name, status, stage, and duration
- Total job count per pipeline

**Hints**:
- Use `pipelines` field with `ref: "main"` (or your default branch)
- Jobs are nested: `jobs { nodes { name status stage duration } }`
- Commit info: `commit { sha shortSha message author { name } }`
- 💡 **Duo Chat Prompt**: "Show me how to query GitLab CI/CD pipeline details including jobs and commit info via GraphQL"

**Bonus**: Calculate total pipeline duration by summing job durations.

---

### **🎯 Challenge 5: Advanced Query Optimization (6 minutes)**

**Goal**: Master query optimization, aliases, and fragments for efficient data fetching.

**Your Task**: Create an optimized query that fetches:
- Project statistics (using aliases for clarity)
- Recent activity summary (issues, MRs, pipelines from last 7 days)
- Top contributors (based on recent commits)
- Repository file tree (specific directory)

**Hints**:
- Use aliases: `openIssues: issues(state: opened)` vs `closedIssues: issues(state: closed)`
- Date filtering: `createdAfter: "2024-01-20T00:00:00Z"`
- Fragments for reusable author info: `fragment AuthorInfo on User { name username avatarUrl }`
- Repository queries: `repository { tree { nodes { name type } } }`
- 💡 **Duo Chat Prompt**: "Help me optimize a complex GitLab GraphQL query using aliases and fragments for project analytics"

**Success Criteria**: Single query that provides a comprehensive project dashboard view.

---

### **🚀 Challenge 6: Custom Analytics Query (8 minutes)**

**Goal**: Build a practical analytics query that could power real automation or reporting.

**Your Task**: Design a query for one of these scenarios:

**Option A: Release Planning Dashboard**
- Upcoming milestones with progress
- Issues by milestone and priority
- Merge request velocity metrics
- Blocker identification

**Option B: Team Productivity Report**
- Contributor activity over time
- Code review participation
- Issue resolution patterns
- Sprint/milestone completion rates

**Option C: Quality Metrics Analysis**
- Pipeline success rates over time
- Test coverage trends
- Security vulnerability tracking
- Code quality evolution

**Hints**:
- Combine multiple root queries or use nested aggregations
- Use date ranges for trend analysis
- Leverage GitLab's built-in analytics fields
- 💡 **Duo Chat Prompt**: "Help me create a comprehensive GitLab analytics query for [your chosen scenario] using GraphQL"

**Bonus**: Export results and create a simple visualization or report.

---

## 🧭 **Navigation Tips**

### **Understanding GraphQL Schema**
- **Right Panel**: Browse available fields and types
- **Ctrl+Space**: Auto-complete in query editor
- **Documentation**: Click on field names for detailed descriptions
- **Type System**: Understand scalars, objects, lists, and non-null fields

### **Query Structure Best Practices**
```graphql
query ProjectAnalysis($projectPath: ID!) {
  project(fullPath: $projectPath) {
    # Always request ID for caching
    id
    name
    description
    
    # Use fragments for repeated structures
    ...ProjectStats
    
    # Paginate large datasets
    issues(first: 10, state: opened) {
      nodes {
        id
        title
        author {
          ...UserInfo
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}

fragment ProjectStats on Project {
  starCount
  forkCount
  issuesEnabled
  mergeRequestsEnabled
}

fragment UserInfo on User {
  id
  name
  username
  avatarUrl
}
```

### **Common Pitfalls to Avoid**
- **Over-fetching**: Only request fields you need
- **Deep nesting**: Limit query depth to avoid timeouts
- **No pagination**: Always paginate lists to avoid large responses
- **Missing error handling**: Check for GraphQL errors in responses

---

## 🤝 **GitLab Duo Chat Integration**

Throughout these challenges, leverage GitLab Duo Chat for:

### **Query Construction Help**
- "How do I filter GitLab issues by creation date in GraphQL?"
- "Show me the GraphQL schema for GitLab merge request approvals"
- "What's the best way to paginate through large result sets in GitLab GraphQL?"

### **Optimization Guidance**
- "How can I optimize this GraphQL query for better performance?"
- "What are GraphQL fragments and how do I use them in GitLab queries?"
- "Help me add proper error handling to my GraphQL queries"

### **Practical Applications**
- "How would I use this GraphQL query in a CI/CD pipeline?"
- "What authentication methods work with GitLab GraphQL API?"
- "Show me how to convert this query into a reusable automation script"

---

## ✅ **Completion Checklist**

- [ ] Successfully accessed GitLab GraphQL Explorer
- [ ] Completed Challenge 1: Basic project information query
- [ ] Completed Challenge 2: Issue investigation with filters
- [ ] Completed Challenge 3: Merge request analysis with nested data
- [ ] Completed Challenge 4: Pipeline and CI/CD query exploration
- [ ] Completed Challenge 5: Query optimization with aliases and fragments
- [ ] Completed Challenge 6: Custom analytics query for real-world scenario
- [ ] Used GitLab Duo Chat for at least 3 query optimization suggestions
- [ ] Documented one query that could benefit your actual projects

---

## 🎓 **Next Steps**

After completing these challenges:

1. **Check your answers** against the provided solutions
2. **Experiment** with your own project-specific queries
3. **Automate** one of your queries using GitLab CI/CD or external scripts
4. **Share** interesting queries with your team
5. **Apply** GraphQL knowledge to other GitLab automation scenarios

**Ready for more?** Check out the companion file: `10b-graphql-api-mastery-answers.md` for detailed solutions and advanced techniques.
