#!/bin/sh

GIT_HASH=$(git rev-parse --short HEAD)
HTML_FILE="Chan_Yat_Fu_Jacky.html"
awk -v hash="$GIT_HASH" 'BEGIN { RS = "id=\"check-update-anchor\"" }
NR == 1 { print }
NR > 1 {
  sub("href=\"[^\"]*\"", "href=\"http://058264110432-resume-site-ap-east-1.s3-website.ap-east-1.amazonaws.com/?from=" hash "\"")
  gsub(/\n/, "")
  print "id=\"check-update-anchor\"" $0
}' "$HTML_FILE" > "$HTML_FILE.tmp" && mv "$HTML_FILE.tmp" "$HTML_FILE"
prettier --write Chan_Yat_Fu_Jacky.html
sed -i.bak "s|<div id=\"prev-commit-hash\" hidden>.*</div>|<div id=\"prev-commit-hash\" hidden>$GIT_HASH</div>|" "$HTML_FILE"


git add "$HTML_FILE"
