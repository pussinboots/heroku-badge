heroku-badge
==================
[![Build Status](https://travis-ci.org/pussinboots/heroku-badge.svg?branch=master)](https://travis-ci.org/pussinboots/heroku-badge)
[![Dependencies](https://david-dm.org/pussinboots/heroku-badge.png)](https://david-dm.org/pussinboots/heroku-badge)
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://heroku-badge.herokuapp.com/projects.html)

Can be used to display heroku based badge that show heroku running when heroku app response otherwise heroku failed.
This project is build in near 2 hours so it is still pre alpha.

##Usage

add the following link https://heroku-badge.herokuapp.com/?app=heroku-badge
and specify with the app parameter the name of your app. Than the heroku badge server
tries to call
https://[app].herokuapp.com/images/heroku-badge.png if this failed than the failed badge will return 
otherwise the called badge will return


##Todo

* no nedd to upload the heroku-badge.png into your heroku app
* configurable heroku check url

##Copyright

The badges are made by me but feel free to use and copy it of course you have to copy it into your heroku app.

License
--------------

heroku-badge is released under the [MIT License](http://opensource.org/licenses/MIT).
