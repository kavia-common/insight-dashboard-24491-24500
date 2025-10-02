#!/bin/bash
cd /home/kavia/workspace/code-generation/insight-dashboard-24491-24500/dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

