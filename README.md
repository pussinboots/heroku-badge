heroku-deployment-badges
==================
[![Build Status](https://travis-ci.org/welcoMattic/heroku-deployment-badges.svg?branch=master)](https://travis-ci.org/welcoMattic/heroku-deployment-badges)
[![Dependencies](https://david-dm.org/welcoMattic/heroku-deployment-badges.png)](https://david-dm.org/welcoMattic/heroku-deployment-badges)
[![Heroku](http://heroku-deployment-badges.herokuapp.com/?app=heroku-deployment-badges)](http://heroku-deployment-badges.herokuapp.com/projects.html)

Can be used to display heroku based badge that show heroku running when heroku app response otherwise heroku failed.
This project is build in near 2 hours so it is still pre alpha.

##Usage

Create an `img` with src `https://heroku-deployment-badges.herokuapp.com/?app={app-name}`. E.g.,

HTML:

    <img src="https://heroku-deployment-badges.herokuapp.com/?app=heroku-deployment-badges" />

Markdown:

    [![Heroku](https://heroku-deployment-badges.herokuapp.com/?app=heroku-deployment-badges)]


If the heroku app has no index.html than use the root query parameter to specify the url to check if heroku response with http status 200.

HTML:

    <img src="http://heroku-deployment-badges.herokuapp.com/?app=angularjs-crypto&root=products-e2e.html" />

Markdown:

    [![Heroku](http://heroku-deployment-badges.herokuapp.com/?app=angularjs-crypto&root=products-e2e.html)]

##Todo

* configurable heroku check url

##Copyright

The badges are made by me but feel free to use and copy it of course you have to copy it into your heroku app.

License
--------------

heroku-deployment-badges is released under the [MIT License](http://opensource.org/licenses/MIT).
