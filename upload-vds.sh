#!/bin/bash
PROJECT_NAME="melody"
HOST="melody-vds"
TARGET_DIR="/root/melody"

echo "Uploading"
rsync --files-from=rsync-files -r --delete . $HOST:$TARGET_DIR || exit 2

echo "Restarting process"
ssh $HOST pm2 reload server || exit 4

echo "DONE"