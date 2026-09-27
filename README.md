# frontend-ci-test

Temporary repo to prove `frontend-ci.yml` and `static-site-release.yml` before the Backstage template.

Callers pin `ci-cd-templates` `@feat/frontend-ci-cd` until that work is tagged. Switch the pin to the release tag when it exists.

```bash
npm ci
npm run verify
npm run build
npm run test:e2e
```

First Release stays green without `STATIC_SITE_BUCKET` or `TECHDOCS_S3_BUCKET`. Open a pull request to run SonarQube, the production build, and the team-owned Cypress job.
