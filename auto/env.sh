#!/bin/sh
# This script create .env file if not exists.

cp .env .env.backup
cp .env.example .env
cp .env.backup .env

rm .env.backup

exit 0
