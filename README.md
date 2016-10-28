heroku-deployment-badges
==================
[![Build Status](https://travis-ci.org/pussinboots/heroku-badge.svg?branch=master)](https://travis-ci.org/pussinboots/heroku-badge)
[![Dependencies](https://david-dm.org/pussinboots/heroku-badge.png)](https://david-dm.org/pussinboots/heroku-badge)
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge&style=flat)](https://heroku-badge.herokuapp.com/projects.html)

##Usage

Create an `img` with src `https://heroku-badge.herokuapp.com/?app={app-name}`. E.g.,

HTML:
    <img src="https://heroku-badge.herokuapp.com/?app=heroku-badge" />
    
Markdown:

    [![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]


If the heroku app has no index.html than use the root query parameter to specify the url to check if heroku response with http status 200.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=heroku-badge&root=projects.html" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=heroku-badge&root=projects.html)]

Failed Example

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=notfound.html" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=notfound.html)]    

Support now flat badge design.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat)]

Support now svg images.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1)]
    
Support use custom page

The query parameter root is used to specify a different url to perform the check get request.
The following example will check if the the url 'https://angularjs-crypto.herokuapp.com/index.html' 
return response status code 200 or 401 and display the proper badge image for it.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=index.html" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=index.html)]


##Copyright

The badges are made by me but feel free to use and copy it of course you have to copy it into your heroku app.

License
--------------

heroku-deployment-badges is released under the [MIT License](http://opensource.org/licenses/MIT).
