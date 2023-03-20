# KaizenFlow ExpressJS API Starter Template

## Setup

1. Change docker-compose.yaml container_name/services names
2. Rename project name and version in `app/package.json`
3. Create docker network, if none exists. Run `docker network create {NAME}`
4. Copy `.env.example` to `.env` and update values
5. CD into `app` folder and run `npm install --save-dev`
6. Go back to project root and run `docker-compose up`