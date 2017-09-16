#!/bin/bash

DATE=$(date +"%Y-%m-%d_%H%M")
DIR_PICS="/var/www/html/pics"
raspistill -vf -hf -o $DIR_PICS/$DATE.jpg
cp $DIR_PICS/$DATE.jpg $DIR_PICS/latestHQ.jpg
convert $DIR_PICS/latestHQ.jpg -resize 1024 $DIR_PICS/latestLQ.jpg
