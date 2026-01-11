# Twenty CRM - Seed & Spoon Configuration

A customized version of Twenty CRM optimized for Seed & Spoon nonprofit operations.

## Overview

This configuration extends Twenty CRM with custom objects specifically designed for nonprofit management:

- **Grants**: Track grant applications from prospect to close
- **Volunteers**: Manage volunteer information, skills, and hours
- **Impact Metrics**: Measure and report program outcomes
- **Programs**: Track youth programs and initiatives

## Custom Objects

### 1. Grants

Track grant applications through their lifecycle.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Funder Name | Text | Name of the funding organization |
| Amount Requested | Currency | Grant amount applied for |
| Amount Awarded | Currency | Actual amount awarded |
| Stage | Select | Pipeline stage (Prospect, LOI, Submitted, Awarded, etc.) |
| Grant Type | Select | Type of grant (General Operating, Program Specific, etc.) |
| Deadline | Date | Application deadline |
| Award Date | Date | Date grant was awarded |
| Report Due Date | Date | When reports are due |
| Description | Rich Text | Grant description |
| Requirements | Rich Text | Application requirements |
| Program Area | Text | Associated program area |
| Is Restricted | Boolean | Whether funds are restricted |
| Renewable | Boolean | Whether grant is renewable |
| Priority | Rating | Priority level |

**Grant Stages:**
1. Prospect - Initial research
2. Letter of Intent - LOI submitted
3. Application Submitted - Full application sent
4. Under Review - Being evaluated
5. Awarded - Grant received
6. Reporting - Active with reporting requirements
7. Closed - Grant period ended
8. Declined - Not awarded

### 2. Volunteers

Manage volunteer information and engagement.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Full Name | Full Name | Volunteer's name |
| Email | Emails | Contact email |
| Phone | Phones | Contact phone |
| Address | Address | Home address |
| Status | Select | Active, Inactive, Pending, On Leave |
| Skills | Multi-Select | Cooking, Teaching, Mentoring, etc. |
| Availability | Multi-Select | Available time slots |
| Start Date | Date | When they started |
| Background Check Date | Date | Date of background check |
| Background Check Passed | Boolean | Whether check passed |
| Total Hours | Number | Cumulative hours volunteered |
| Emergency Contact Name | Text | Emergency contact |
| Emergency Contact Phone | Phones | Emergency phone |
| Notes | Rich Text | Additional notes |
| Engagement Level | Rating | Level of engagement |

### 3. Impact Metrics

Track and measure program outcomes.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Metric Name | Text | Name of the metric |
| Category | Select | Youth Served, Meals Provided, etc. |
| Value | Number | Measured value |
| Target | Number | Target value |
| Unit | Text | Unit of measurement |
| Measurement Date | Date | When measured |
| Period | Select | Daily, Weekly, Monthly, etc. |
| Program | Text | Associated program |
| Data Source | Text | Where data came from |
| Notes | Rich Text | Additional notes |
| Verified | Boolean | Whether verified |
| Breakdown Data | JSON | Detailed breakdown |

### 4. Programs

Track youth programs and initiatives.

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| Program Name | Text | Name of the program |
| Description | Rich Text | Program description |
| Status | Select | Planning, Active, Paused, etc. |
| Program Type | Select | Youth Development, Culinary Training, etc. |
| Age Groups | Multi-Select | Target age groups |
| Start Date | Date | Program start |
| End Date | Date | Program end |
| Capacity | Number | Max participants |
| Current Enrollment | Number | Current count |
| Budget | Currency | Allocated budget |
| Actual Cost | Currency | Actual spending |
| Location | Text | Where it runs |
| Lead Staff | Text | Staff lead |
| Days of Week | Multi-Select | Which days it runs |
| Goals | Rich Text | Program goals |
| Key Outcomes | Array | Expected outcomes |
| Priority | Rating | Priority level |

## Setup Instructions

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Yarn 4+ (package manager)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/twentyhq/twenty.git
   cd twenty
   yarn install
   ```

2. **Configure environment:**
   ```bash
   cp .env.seed-spoon.example .env
   # Edit .env with your database and service credentials
   ```

3. **Start Docker services:**
   ```bash
   docker-compose up -d
   ```

4. **Run migrations:**
   ```bash
   npx nx run twenty-server:database:migrate:prod
   ```

5. **Seed Seed & Spoon objects:**
   ```bash
   npx nx run twenty-server:command seed-spoon:seed-objects -- -w YOUR_WORKSPACE_ID
   ```

6. **Start development servers:**
   ```bash
   npx nx start twenty-front
   npx nx start twenty-server
   ```

### Vercel Deployment

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Import repository in Vercel dashboard
   - Use `vercel.seed-spoon.json` as configuration

3. **Set environment variables:**
   Copy all variables from `.env.seed-spoon.example` to Vercel dashboard.

4. **Deploy:**
   ```bash
   vercel --prod
   ```

## Entity Mappings

Twenty's standard objects map to nonprofit concepts:

| Twenty Object | Seed & Spoon Use |
|---------------|------------------|
| Companies | Partner Organizations / Funders |
| People | Contacts / Program Participants |
| Opportunities | (Use custom Grants object instead) |
| Tasks | Action items / To-dos |
| Notes | Meeting notes / Documentation |

## API Integration

### Connecting to Seed & Spoon Backend

The admin dashboard can connect to your Seed & Spoon backend API for data synchronization.

**Configuration:**
```env
SEED_SPOON_API_URL=https://api.seedandspoon.org
ADMIN_SERVICE_TOKEN=your-service-token
```

**Authentication Flow:**
1. Admin users authenticate through Twenty
2. Twenty uses `ADMIN_SERVICE_TOKEN` to call backend API
3. Backend validates token and returns/accepts data

### GraphQL API

Twenty exposes a GraphQL API for all objects:

```graphql
# Query grants
query GetGrants {
  grants(first: 10) {
    edges {
      node {
        id
        name
        funderName
        amountRequested
        stage
        deadline
      }
    }
  }
}

# Create a new volunteer
mutation CreateVolunteer {
  createVolunteer(data: {
    fullName: { firstName: "John", lastName: "Doe" }
    email: { primaryEmail: "john@example.com" }
    status: "ACTIVE"
    skills: ["COOKING", "MENTORING"]
  }) {
    id
    fullName
    status
  }
}
```

### REST API

Twenty also provides REST endpoints:

```bash
# Get grants
curl -X GET https://your-domain/rest/grants \
  -H "Authorization: Bearer YOUR_TOKEN"

# Create impact metric
curl -X POST https://your-domain/rest/impactMetrics \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "metricName": "Youth Served",
    "category": "YOUTH_SERVED",
    "value": 150,
    "target": 200,
    "period": "MONTHLY"
  }'
```

## Directory Structure

```
packages/
├── twenty-server/
│   └── src/
│       └── engine/
│           └── workspace-manager/
│               └── dev-seeder/
│                   └── metadata/
│                       ├── custom-objects/
│                       │   └── constants/
│                       │       └── seed-spoon/
│                       │           ├── grant-custom-object-seed.constant.ts
│                       │           ├── volunteer-custom-object-seed.constant.ts
│                       │           ├── impact-metric-custom-object-seed.constant.ts
│                       │           └── program-custom-object-seed.constant.ts
│                       ├── custom-fields/
│                       │   └── constants/
│                       │       └── seed-spoon/
│                       │           ├── grant-custom-field-seeds.constant.ts
│                       │           ├── volunteer-custom-field-seeds.constant.ts
│                       │           ├── impact-metric-custom-field-seeds.constant.ts
│                       │           └── program-custom-field-seeds.constant.ts
│                       └── seed-spoon/
│                           ├── seed-spoon-metadata.service.ts
│                           ├── seed-spoon-metadata.module.ts
│                           └── seed-spoon-metadata.command.ts
└── twenty-front/
    └── ... (React frontend)
```

## Configuration Files

| File | Purpose |
|------|---------|
| `.env.seed-spoon.example` | Environment template for Seed & Spoon |
| `vercel.seed-spoon.json` | Vercel deployment configuration |
| `docs/seed-spoon/README.md` | This documentation |

## Feature Flags

Enable nonprofit-specific features via environment variables:

```env
FEATURE_GRANTS_PIPELINE=true
FEATURE_VOLUNTEER_MANAGEMENT=true
FEATURE_PARTNER_TRACKING=true
FEATURE_IMPACT_METRICS=true
```

## Recommended Infrastructure

### Database (Supabase)
- Free tier: 500MB storage
- Managed PostgreSQL
- Built-in auth and storage

### Redis (Upstash)
- Free tier: 10,000 commands/day
- Serverless Redis
- No configuration needed

### Hosting (Vercel)
- Free tier: 100GB bandwidth
- Automatic deployments
- Edge network

## Support

For questions about this configuration:
- GitHub Issues: [twentyhq/twenty](https://github.com/twentyhq/twenty/issues)
- Seed & Spoon Team: Contact your development team

## License

This configuration is based on Twenty CRM, which is licensed under AGPL-3.0.
