angularjs-crypto
==================
[![Build Status](https://travis-ci.org/pussinboots/angularjs-crypto.svg?branch=master)](https://travis-ci.org/pussinboots/angularjs-crypto)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/angularjs-crypto.svg)](https://coveralls.io/r/pussinboots/angularjs-crypto?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/angularjs-crypto.png)](https://david-dm.org/pussinboots/angularjs-crypto)
[![heroku failed](https://angularjs-crypto.herokuapp.com/images/heroku-badge.png "heroku failed")](https://angularjs-crypto.herokuapp.com/products-e2e.html)

AngularJS Module that integrate cryptography functionality offers from the [crypto-js](https://code.google.com/p/crypto-js/) project for all http requests and response.

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4)
- [Crypto-js 3.1.2 AES modul](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js)
- [Crypto-js 3.1.2 ecb mode](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js)

##Usage

* download [js file](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/angularjs-crypto.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="angularjs-crypto.js"></script>
```
* configure the http request for automatic decryption/encryption detection by setting property crypt:true

* add modul dependency ('angularjs-crypto') to angular
```js
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto']);
```

Example Service Definition

```js
'use strict';

angular.module('services', ['ngResource'], function ($provide) {
    $provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {method: 'GET', isArray: false, crypt: true},
            queryNoCrypt: {method: 'GET'},
            save: {method: 'POST', params: {}, crypt: true},
            saveNoCrypt: {method: 'POST', params: {}}
        });
    });
});
```

* configure base64Key aes key for decryption/encryption

```js
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
    cfCryptoHttpInterceptor.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
}])
```

That's done now all json fields that end with the pattern (default: '_enc') will be encoded in requests and decoded in responses.

Issues
-------------
- Report at the github [issue tracker](https://github.com/pussinboots/angularjs-crypto/issues)

Todos
-------------
* configurable error handling strict or elegant mode 
* support for http ajax calls missing only ng resource calls are supported
* aggressive console logging is active for development maybe make it configurable
* configuration the cipher algorithm to use (aes hard coded at the momment)
* configuration of the keys to used for the configured cipher (at the moment hard coded key)
* implements missing ciphers offered by the [crypto-js](https://code.google.com/p/crypto-js/) project
 * DES
 * riple DES
 * Rabbit
 * RC4, RC4Drop

Features
-------------
* encoding of query parameter fields that end with the pattern
* configuration of encode/decode function so that you can plugin in your own implementation
* configuration of the aes secret key to use for encryption/decryption
* configuration of the field name pattern which determinate which fields will be encrypted/decrypted
* aes encryption/decryption of http json requests and responses
  * only with mode [ECB](http://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_.28ECB.29)
  * only with padding [Pkcs7](http://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS7)
* automatic detection of encryption/decryption for json fields based on the naming rule all fields end with pattern (default: :enc) as it comes 
  * reponse then decrypt 
  * request then encrypt
* only requests / responses of Content-Type: 'application/json;charset=utf-8' will be processed other types will skip crypt processing include auto detection

Configuration
-------------

#### Set the base64Key for aes encryption/decryption

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
}])
```

#### Set the field name pattern

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.pattern = "_enc"; //that is the default value
}])
```

#### Set own encode function to use

```js
function encode(plainValue /*plain value to encode*/, base64Key /*the configured base64 string*/) {
    // encoding here
    return //return encoded;
}
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.encodeFunc = encode; //that is the default value
}])
```

#### Set own decode function to use

```js
function decode(encryptedValue/* encrypted value as string*/, base64Key /*the configured base64 string*/) {
    return  //decoded plain value as string;
}
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.decodeFunc = decode; //that is the default value
}])
```

##Example

#### Key Example

Change the base64Key locally by read it from the rootScope.

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;//every time the base64Key is changed in the rootscope it affects the encryption/decryption also
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
})
```

With this html snippet you can edit the key to use only locally.

```html
<input type="text" ng-model="$root.base64Key" />
```

Demo
-------------

live
------

The http calls are mocked with angular-mock.

[Http Get Example](http://angularjs-crypto.herokuapp.com/products-e2e.html#/get)

[Http Post Example](http://angularjs-crypto.herokuapp.com/products-e2e.html#/post)

[Http Get query parameters encoding ](http://angularjs-crypto.herokuapp.com/products-e2e.html#/query)

[Change base64Key Example](http://angularjs-crypto.herokuapp.com/products-e2e.html#/key)

local
------

Two ways to run the demo app local one with play or second with nodejs.

Dependencies
* play 2.2.3 (optional)
* nodejs 0.10.28
* (karma-test runner)[http://karma-runner.github.io/0.12/intro/installation.html]

Start it with play

    play run
    
Then go to
* [Get Example](http://localhost:9000/products-e2e.html#/get)
* [Post Example](http://localhost:9000/products-e2e.html#/post)
* [Http Get query parameters encoding ](http://localhost:9000/products-e2e.html#/query)
* [Change base64Key Example](http://localhost:9000/products-e2e.html#/key)

Start it with nodejs

    node server.js
    

Then go to
* [Get Example](http://localhost:9000/products-e2e.html#/get)
* [Post Example](http://localhost:9000/products-e2e.html#/post)
* [Http Get query parameters encoding ](http://localhost:9000/products-e2e.html#/query)
* [Change base64Key Example](http://localhost:9000/products-e2e.html#/key)

Or run the karma test local with 

  npm test

Description
-------------

This angularjs module is part of the [bankapp](https://github.com/pussinboots/bankapp).
The idea is to store encrypted data in a backend and decode it on the client side so that the backend 
doesn't know what kind of data it stores only the angularjs client and the storage process know the 
plain data.

If you have question or want to take of the development than write me a mail at pussinboots666@googlemail.com.

It is a very young project but with the support of wide open source tools like karma and travis it
will flow soon i hope.

License
--------------

angularjs-crypto is released under the [MIT License](http://opensource.org/licenses/MIT).
