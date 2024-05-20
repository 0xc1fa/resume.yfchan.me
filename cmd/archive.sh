#!/bin/bash
FILE="Chan_Yat_Fu_Jacky"
mkdir -p archives && cp -r ${FILE}.pdf archives/${FILE}_$(date +"%Y_%m_%d").pdf && git add archives/${FILE}_$(date +"%Y_%m_%d").pdf
