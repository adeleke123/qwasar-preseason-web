## My First Backend
Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under `submit directory` and specific file names for each exercise are also provided at the beginning of each exercise under `submit file(s)`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| My First Backend |      |
| ---------------- | ---- |
| Submit directory	| .   |
| `Submit file` |	`app.js`|

## Description
Create a backend app with light web framework (javascript you will use `express`, ruby you will use `sinatra`, python you will use `flask`)

You don't need to create a database, just store the information `hard coded` inside your file.

In order to find all the information needed, you will have to search online. Wikipedia, Google and Fan's website will have all the information you need for this project! :)

## Part I
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

It will have a route GET on /. This action will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra.
[Wikipedia Page](https://en.wikipedia.org/wiki/List_of_songs_recorded_by_Frank_Sinatra)

## Example00
```
$>curl -i http://web-XXXXXXXXX.docode.YYYY.qwasar.io
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 19

New York, New York
$>
```
## Example01
```
$>curl http://web-XXXXXXXXX.docode.YYYY.qwasar.io
My Way
$>
```
## Part II
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Continue to build your backend `app.js`
This time we will add multiple `pages` or `routes`:

`GET` on `/`. This action will give randomly (in a pool of at least 20) a name of a song from `Frank Sinatra`.
[Wikipedia Page](https://en.wikipedia.org/wiki/List_of_songs_recorded_by_Frank_Sinatra)

`GET` on `/birth_date`. This action will give `Frank Sinatra` birth date.

`GET` on `/birth_city`. This action will give `Frank Sinatra` birth city.

`GET` on `/wives`. This action will give all the name of `Frank Sinatra` wife.

## Format:
wife1, wife2, wife3, wife4

`GET` on `/picture`. This action will `redirect to` Frank Sinatra's picture.

(https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg)

## Example00
```
$>curl -i http://web-XXXXXXXXX.docode.YYYY.qwasar.io
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 19

New York, New York
$>
```
## Example01
```
$>curl http://web-XXXXXXXXX.docode.YYYY.qwasar.io
My Way
$>
```
## Part III
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Continue to build your backend `app.js`, in this last part we will add two more routes:

`GET` on `/public`. This action will print "`Everybody can see this page`"

`GET` on `/protected`. This action will be protected by a HTTP Basic access authentication and print `"Welcome, authenticated client"` if you are authorized with the login `admin` and password `admin` otherwise it will provide a `401 Not authorized`.

## Example00
```
$>curl -i http://web-XXXXXXXXX.docode.YYYY.qwasar.io/protected
HTTP/1.1 401 Unauthorized
Content-Type: text/html;charset=utf-8
WWW-Authenticate: Basic realm="Restricted Area"
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 15

Not authorized
$>
```
## Example01
```
$>curl -i http://admin:admin@web-XXXXXXXXX.docode.YYYY.qwasar.io/protected
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 29

Welcome, authenticated client
$>
```
## Example02
```
$>curl -i http://web-XXXXXXXXX.docode.YYYY.qwasar.io/public
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Length: 27

Everybody can see this page
$>
```
How can I access my docode server from the browser?

1 -- Open your server
Make your server `listening` on 0.0.0.0
And make sure the listening port is `8080`

2 -- Your server will be accessible at this URL:
XXXXXXXXX is your docode ID
http://web-XXXXXXXXX.docode.YYYY.qwasar.io

## Example:
```
If your docode url is:
abc123.docode.us.qwasar.io
then your url will be:
http://abc123.docode.us.qwasar.io
```
## Technical specifications
Your repository must be clean of any libraries. (by library we are refering to gems / node_modules).

### How to prevent yourself to commit and push those extra files?
You have two ways:

+ Easy, don't git add them.
+ Even better, use a [gitignore](https://git-scm.com/docs/gitignore)

You can also write a section inside your README.md on `how-to install your app`

+ Google Sinatra
+ Google HTTP Code (200, 204, 400, 401, 500)
+ Google HTTP Basic access authentication
+ Google curl (-i, -I, -X GET, etc)

Tip

## TIPS for docode:
You can access your server on port 8080 but you must listen on `0.0.0.0`
```
set :bind, '0.0.0.0'
set :port, 8080 (or port = 8080)
```
