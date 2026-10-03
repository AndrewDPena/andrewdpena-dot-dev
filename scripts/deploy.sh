#!/usr/bin/env bash
# Runs on the Pi from cron every few minutes:
#   1. pulls the latest repo (so compose.yaml changes deploy too)
#   2. pulls any new images from GitHub Container Registry
#   3. recreates only the containers whose image or config changed
#   4. deletes old, unused images so the SD card doesn't fill up
# Prints nothing unless something was redeployed or went wrong.
set -euo pipefail

# Everything lives inside main() so that if `git pull` updates this very
# file mid-run, bash doesn't start reading the new version halfway through.
main() {
  cd "$(dirname "$0")/.."

  git pull --ff-only --quiet
  docker compose pull --quiet

  # `up -d` is a no-op for containers that are already current; only
  # report the ones it actually recreated.
  docker compose up -d --remove-orphans 2>&1 \
    | grep -E 'Recreated|Created' \
    | sed 's/^ */deployed: /' || true

  docker image prune -f > /dev/null
}

main "$@"
exit
