# Seed & Spoon - Twenty Admin Dashboard Quick Start

## What's Included

This fork of Twenty CRM includes custom objects for nonprofit operations:

| Object | Purpose | Icon |
|--------|---------|------|
| Grants | Track grant applications | Cash |
| Volunteers | Manage volunteers | Heart |
| Impact Metrics | Measure outcomes | Chart Bar |
| Programs | Track initiatives | Users |

## Quick Setup

### 1. Configure Environment

```bash
# Copy the Seed & Spoon environment template
cp .env.seed-spoon.example .env

# Edit with your credentials
nano .env  # or your preferred editor
```

### 2. Start Development

```bash
# Install dependencies
yarn install

# Start Docker services (database + Redis)
docker-compose up -d

# Start the frontend
npx nx start twenty-front

# Start the backend (separate terminal)
npx nx start twenty-server
```

### 3. Seed Custom Objects

After creating a workspace, seed the Seed & Spoon objects:

```bash
npx nx run twenty-server:command seed-spoon:seed-objects -- -w YOUR_WORKSPACE_ID
```

## Key Files

| File | Description |
|------|-------------|
| `.env.seed-spoon.example` | Environment configuration template |
| `vercel.seed-spoon.json` | Vercel deployment config |
| `docs/seed-spoon/README.md` | Full documentation |

## Custom Objects Location

```
packages/twenty-server/src/engine/workspace-manager/dev-seeder/metadata/
├── custom-objects/constants/seed-spoon/  # Object definitions
├── custom-fields/constants/seed-spoon/   # Field definitions
└── seed-spoon/                           # Seeder service
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Set environment variables from `.env.seed-spoon.example`
4. Deploy!

## Need Help?

See [docs/seed-spoon/README.md](docs/seed-spoon/README.md) for full documentation.
