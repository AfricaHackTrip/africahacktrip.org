git pull origin master && git push origin master && grunt build && git add --all && git commit -m "Update build" && git subtree push --prefix dist 5apps master && git push origin master
