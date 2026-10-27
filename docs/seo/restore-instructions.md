# Restore reference — 20 October 2026 baseline

The pre-change repository state is recoverable from Git:

- Branch: `main`
- Commit: `8bb41b463d9702225e3afe37fa6bad2a9bcf8840`
- Initial worktree: clean

To inspect this exact source version without changing the current branch, create a detached worktree or check out the commit in a separate clone. To restore a future branch after review, use the team's normal reviewed revert/rollback process and this commit as the source reference. Do not reset or clean a working directory that contains work that has not been preserved.

The current deployment was not changed and no deployment rollback was performed. Live observations correspond to `https://osdapparels.com` on 20 October 2026; the Vercel response confirms hosting but does not expose a deployment ID. A production rollback requires authorized hosting access and selection of the deployment/release that corresponds to the commit above.

Internal raw Search Console exports are stored in the ignored `docs/seo/private/search-console-2026-10-20/` directory. They are local comparison artifacts, not a replacement for a production backup.
