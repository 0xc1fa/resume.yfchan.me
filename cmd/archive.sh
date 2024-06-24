#!/bin/bash
node html2pdf.js
FILE="Chan_Yat_Fu_Jacky"
mkdir -p archives && cp -r out/${FILE}.pdf archives/${FILE}_$(date +"%Y_%m_%d").pdf && git add archives/${FILE}_$(date +"%Y_%m_%d").pdf
