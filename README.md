heroku-deployment-badges
==================
[![Build Status](https://travis-ci.org/pussinboots/heroku-badge.svg?branch=master)](https://travis-ci.org/pussinboots/heroku-badge)
[![Dependencies](https://david-dm.org/pussinboots/heroku-badge.png)](https://david-dm.org/pussinboots/heroku-badge)
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://heroku-badge.herokuapp.com/projects.html)

##Usage

Create an `img` with src `https://heroku-deployment-badges.herokuapp.com/?app={app-name}`. E.g.,

HTML:
    <img src="https://heroku-badge.herokuapp.com/?app=heroku-badge" />
    
Markdown:

    [![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]


If the heroku app has no index.html than use the root query parameter to specify the url to check if heroku response with http status 200.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&root=products-e2e.html" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&root=products-e2e.html)]
    
Support now flat badge design.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat)]

##Todo

##Copyright

The badges are made by me but feel free to use and copy it of course you have to copy it into your heroku app.

License
--------------

heroku-deployment-badges is released under the [MIT License](http://opensource.org/licenses/MIT).
