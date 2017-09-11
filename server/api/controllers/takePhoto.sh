#!/bin/bash

DATE=$(date +"%Y-%m-%d_%H%M")

raspistill -vf -hf -o /var/www/html/pics/$DATE.jpg
cp /var/www/html/pics/$DATE.jpg /var/www/html/pics/latest.jpg
