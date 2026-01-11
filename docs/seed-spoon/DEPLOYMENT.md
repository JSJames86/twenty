# Twenty CRM Deployment Guide for Seed & Spoon

## Important: Deployment Platform Compatibility

Twenty CRM is a full-stack application with native dependencies that requires specific deployment environments. **Vercel's serverless architecture is NOT compatible** with Twenty because:

1. Native dependencies (`canvas`, `sharp`, `bcrypt`) require system libraries
2. Twenty's NestJS backend needs a persistent server, not serverless functions
3. Background workers require long-running processes

## Recommended Deployment Options

### Option 1: Railway (Recommended for Startups)

Railway provides one-click deployment with native dependency support.

**Pros:**
- Simple deployment from GitHub
- PostgreSQL and Redis included
- Native dependencies work out of the box
- Free tier available

**Setup:**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add PostgreSQL and Redis services
4. Set environment variables from `.env.seed-spoon.example`
5. Deploy

### Option 2: Render

Render supports Docker deployments with native dependencies.

**Setup:**
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect GitHub repository
4. Use Docker deployment
5. Add PostgreSQL and Redis services
6. Configure environment variables

### Option 3: Docker Self-Hosted

Deploy on any VPS (DigitalOcean, AWS EC2, etc.) using Docker.

```bash
# Clone repository
git clone https://github.com/JSJames86/twenty.git
cd twenty

# Copy environment file
cp .env.seed-spoon.example .env.production

# Start with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

### Option 4: Twenty Cloud (Official)

Use Twenty's official managed hosting at [twenty.com](https://twenty.com).

**Pros:**
- Fully managed
- Always up-to-date
- No DevOps required

## Docker Compose Production Configuration

Use the `docker-compose.prod.yml` file for self-hosted deployments.

## Environment Variables

Copy `.env.seed-spoon.example` and configure:

**Required:**
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `ACCESS_TOKEN_SECRET` - Generate with `openssl rand -hex 32`
- `LOGIN_TOKEN_SECRET` - Generate with `openssl rand -hex 32`
- `REFRESH_TOKEN_SECRET` - Generate with `openssl rand -hex 32`
- `FILE_TOKEN_SECRET` - Generate with `openssl rand -hex 32`

**Optional:**
- `SEED_SPOON_API_URL` - Your backend API
- `ADMIN_SERVICE_TOKEN` - Service token for API auth

## After Deployment

Once deployed, seed the Seed & Spoon custom objects:

```bash
# SSH into your server or use the dashboard terminal
npx nx run twenty-server:command seed-spoon:seed-objects -- -w YOUR_WORKSPACE_ID
```

## Why Not Vercel?

Vercel excels at:
- Static sites
- Next.js apps with serverless functions
- JAMstack applications

Twenty requires:
- Persistent Node.js server (NestJS)
- Native C++ dependencies (canvas, bcrypt)
- Background job processing (BullMQ)
- WebSocket connections (GraphQL subscriptions)

These requirements are incompatible with Vercel's serverless model.
