@ECHO OFF
git add .
git commit -m "batchDeployMinorfixes"
git push heroku master
exit