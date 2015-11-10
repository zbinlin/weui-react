#!/usr/bin/env bash

# TODO build 时，将文件时 import *.scss 改成成 *.css
jsSourceMaps=""
cssSourceMaps=""
if [[ "$NODE_ENV" == development ]]; then
    jsSourceMaps="--source-maps inline"
    cssSourceMaps="--source-map true --source-map-contents --source-map-embed"
fi

cd ./src

# build js,jsx
babel $jsSourceMaps --no-babelrc --presets react,es2015 \
    --ignore __tests__/**/*
    -d ../lib **/*.js*

# build sass,scss,css
node-sass $cssSourceMaps -o ../lib ./
