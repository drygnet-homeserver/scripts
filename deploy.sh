#!/bin/sh

rm -r-f $1
git clone $2
cd $1
npm run deploy


