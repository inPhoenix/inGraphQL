# inCyberPunk 2022 Deployed Site

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/inPhoenix/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

    cybersocial
   

https://cybersocial.herokuapp.com/

run locally:

    cd client: yarn start
    cd nodeapi: yarn dev

# Heroku debug

heroku login
heroku apps
heroku logs --tail
heroku git:remote -a cybersocial
git push heroku master

Remember to update the variables on heroku as well
Trying to work deploy

Debugging:
There is this error:
https://stackoverflow.com/questions/41804507/h14-error-in-heroku-no-web-processes-running

The command to solve that:
heroku ps:scale web=1

Improvements:

    Add validation on user edit
    Add strategy: https://reacttraining.com/react-router/web/example/auth-workflow
    Fix the download user picture for the first time on Edit Profile
    https://css-tricks.com/gradient-borders-in-css/
