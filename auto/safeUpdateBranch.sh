#!/bin/sh

git add .

git stash

git pull origin $(current_branch)

git stash apply
