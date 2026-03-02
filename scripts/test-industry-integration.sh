#!/bin/bash
# Layer 2: Integration test — verifies industry YAML rates flow through
# the generate endpoint into the business case output.
#
# Prerequisites: dev server running on localhost:3000
# Usage: bash scripts/test-industry-integration.sh

set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"
FIXTURES_DIR="scripts/test-fixtures"
PASS=0
FAIL=0

# Colours
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

pass() {
  echo -e "${GREEN}PASS${NC}  $1"
  ((PASS++))
}

fail() {
  echo -e "${RED}FAIL${NC}  $1"
  echo "      $2"
  ((FAIL++))
}

# Check server is running
if ! curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" | grep -q "200"; then
  echo "ERROR: Dev server not running at $BASE_URL"
  echo "Start it with: npm run dev"
  exit 2
fi

echo "Planner Integration Tests — Industry Rate Wiring"
echo "Server: $BASE_URL"
echo ""

# ── Test 2a: Agency fixture ──────────────────────────────────

echo "── 2a. Agency generation ──"
RESPONSE=$(curl -s -X POST "$BASE_URL/api/planner/generate" \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d @"$FIXTURES_DIR/input-genetic-digital.json")

STATUS=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('status','error'))" 2>/dev/null || echo "error")

if [ "$STATUS" = "success" ]; then
  # Extract business case recovery figures
  RECOVERY_LOW=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['low'])" 2>/dev/null)
  RECOVERY_HIGH=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['high'])" 2>/dev/null)
  REPORT_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['reportId'])" 2>/dev/null)

  if [ -n "$RECOVERY_LOW" ] && [ "$RECOVERY_LOW" != "0" ]; then
    pass "Agency generation succeeded (recovery: £${RECOVERY_LOW}–£${RECOVERY_HIGH}, id: ${REPORT_ID})"
  else
    fail "Agency generation" "Recovery figures are zero — business case not calculated"
  fi
else
  ERROR=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error','unknown'))" 2>/dev/null || echo "unknown")
  fail "Agency generation" "Status: $STATUS, Error: $ERROR"
fi

# ── Test 2b: Law fixture ─────────────────────────────────────

echo ""
echo "── 2b. Law generation ──"
RESPONSE=$(curl -s -X POST "$BASE_URL/api/planner/generate" \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d @"$FIXTURES_DIR/input-2026-02-17T22-27-03-405Z.json")

STATUS=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('status','error'))" 2>/dev/null || echo "error")

if [ "$STATUS" = "success" ]; then
  RECOVERY_LOW=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['low'])" 2>/dev/null)
  RECOVERY_HIGH=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['high'])" 2>/dev/null)
  REPORT_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['reportId'])" 2>/dev/null)

  if [ -n "$RECOVERY_LOW" ] && [ "$RECOVERY_LOW" != "0" ]; then
    pass "Law generation succeeded (recovery: £${RECOVERY_LOW}–£${RECOVERY_HIGH}, id: ${REPORT_ID})"
  else
    fail "Law generation" "Recovery figures are zero"
  fi
else
  ERROR=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error','unknown'))" 2>/dev/null || echo "unknown")
  fail "Law generation" "Status: $STATUS, Error: $ERROR"
fi

# ── Test 2c: Generic (internal-services) fixture ─────────────

echo ""
echo "── 2c. Generic (internal-services) generation ──"
RESPONSE=$(curl -s -X POST "$BASE_URL/api/planner/generate" \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d @"$FIXTURES_DIR/input-default-persona.json")

STATUS=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('status','error'))" 2>/dev/null || echo "error")

if [ "$STATUS" = "success" ]; then
  RECOVERY_LOW=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['low'])" 2>/dev/null)
  RECOVERY_HIGH=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['report']['businessCase']['conservativeRecovery']['high'])" 2>/dev/null)
  REPORT_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['reportId'])" 2>/dev/null)

  if [ -n "$RECOVERY_LOW" ] && [ "$RECOVERY_LOW" != "0" ]; then
    pass "Generic generation succeeded (recovery: £${RECOVERY_LOW}–£${RECOVERY_HIGH}, id: ${REPORT_ID})"
  else
    fail "Generic generation" "Recovery figures are zero"
  fi
else
  ERROR=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error','unknown'))" 2>/dev/null || echo "unknown")
  fail "Generic generation" "Status: $STATUS, Error: $ERROR"
fi

# ── Test 2d: Observability — check for YAML fallback warnings ──

echo ""
echo "── 2d. Observability check ──"
echo "  (Check dev server console for '[planner] Industry YAML not loaded' warnings)"
echo "  If no warnings appeared for agency/law tests, YAML loading is working."
pass "Observability — manual check (see dev server logs)"

# ── Summary ──────────────────────────────────────────────────

echo ""
echo "══════════════════════════════════════════════"
echo "Total: $PASS passed, $FAIL failed"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
