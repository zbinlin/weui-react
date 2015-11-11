#!/usr/bin/env bash

if [[ "$1" == dist ]]; then
    rm -rf dist/
elif [[ "$1" == lib ]]; then
    rm -rf lib/
fi
