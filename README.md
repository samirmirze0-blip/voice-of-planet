# Voice of Planet

Dark, English-language technology editorial website starter built with Next.js App Router and TypeScript.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Included in this foundation
- Responsive dark homepage
- English navigation and editorial sections
- Global metadata and Open Graph defaults
- `robots.txt` and `sitemap.xml` routes
- Baseline security response headers
- Environment-variable example and Git ignore rules

## Important next steps
1. Confirm the production domain and replace `voiceofplanet.com` in metadata, robots and sitemap.
2. Connect a database and migrations.
3. Implement admin authentication, roles and audit logs before exposing `/admin`.
4. Add article/category CRUD, media uploads and editorial workflow.
5. Add real newsletter provider integration; the homepage form is currently a visual placeholder.
6. Integrate a maintained malware/file-integrity scanner and scheduled backups. This starter does not claim to provide antivirus protection.
7. Add structured data to individual article pages once the article model exists.

## Security notes
Do not put secrets in client components or commit `.env` files. Use server-side authorization for every admin mutation. Run backups before destructive cleanup actions.
