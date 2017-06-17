# React JS  + WP Rest API 

The startup kit to use React JS with Wordpress REST API.
Clone the project and install node packages:

```
npm i
```

Run the project with
```
webpack-dev-server
```
This will start app on localhost:8080:

Install webpack and webpack-dev-server globally:
```
npm install -g webpack
npm install -g webpack-dev-server
```

Change the URL in Globals.js file with your own wordpress URL.for example,if domain is mywp.dev
```
this.WP_URL  = 'http://mywp.dev/';
this.WP_API_URL = 'http://mywp.dev/wp-json/';
		
```