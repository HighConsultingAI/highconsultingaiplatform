# HCAI Starter (High Consulting AI)

Minimal Next.js scaffold pre-wired for Supabase auth and n8n integration.
Replace environment variables in Render or Vercel settings before deploying.

Files of interest:
- lib/supabaseClient.js
- pages/index.js
- pages/login.js
- pages/dashboard.js
- pages/api/workflows/create.js
- pages/api/executions/webhook.js
- public/logo.svg

Environment variables (set these in Render):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- N8N_BASE_URL
- N8N_BASIC_AUTH_USER (optional)
- N8N_BASIC_AUTH_PASSWORD (optional)
