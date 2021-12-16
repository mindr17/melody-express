#!/bin/bash
PROJECT_NAME="melody-backend.na4u.ru"
HOST="melody-netangels"
TARGET_DIR="/home/c50036/$PROJECT_NAME/app"

echo "Uploading"
rsync --files-from=rsync-files -r --delete . $HOST:$TARGET_DIR || exit 2

echo "DONE"