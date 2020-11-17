# AVERIS-FULLSTACK-API
PRODUCTION DEMO LINK https://averis-dashboard.vercel.app/
<img src="https://github.com/gispatial/averis-fullstack-api/blob/main/averis-filters/public/sos.png" width="100%">
Test assessment for Averis Sdn. Bhd. - Averis is a world-class provider of global business services, dedicated to meeting the technological, market and business challenges worldwide.

## AVERIS-UI-DESIGNS
<table data-v-7b6b9330="">
<thead data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<th data-v-7b6b9330="">Name</th>
<th data-v-7b6b9330="">Type</th>
<th data-v-7b6b9330="">Parameters</th>
<th data-v-7b6b9330="">Description</th>
<th data-v-7b6b9330="">default</th>
</tr>
</thead>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableCustomizer</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of theme customizer</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableThemeTour</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable app tour in Vuexy Admin</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">footerType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how footer is displayed</td>
<td data-v-7b6b9330="">static</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">hideScrollToTop</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of scroll to top button</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">mainLayoutType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">horizontal/ vertical</td>
<td data-v-7b6b9330="">Layout Type</td>
<td data-v-7b6b9330="">vertical</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarColor</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">Hex, rgb, rgba or valid HTML Color</td>
<td data-v-7b6b9330="">Change color of navbar using this property</td>
<td data-v-7b6b9330="">&nbsp;</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">floating, static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how navbar is displayed</td>
<td data-v-7b6b9330="">floating</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">routerTransition</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none</td>
<td data-v-7b6b9330="">This property is used to change the router animation.</td>
<td data-v-7b6b9330="">zoom-fade</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">sidebarCollapsed</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Create collapsed sidebar by setting this property to true.</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">theme</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">light, dark, semi-dark</td>
<td data-v-7b6b9330="">Set between light theme, dark theme &amp; semi-dark theme.</td>
<td data-v-7b6b9330="">light</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">rtl</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable RTL</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
 
# Project setup

CD FIRST TO FRONTEND REACTJS  > $ cd ./averis-filters
```
CD $ cd ..
for starting the express node > $ node server.js (backend)
```

$ npm install or $ yarn

Compiles and hot-reloads for development:

- npm run start

  Note that the development build is not optimized.
  To create a production build, run $ npm run build -or $ yarn build.

# Steps to build it

## Prerequisites

You will need to have Node.js or Yarn installed in your machine. 
[[NodeJs](https://nodejs.org/en)] [[YarnPkg](https://yarnpkg.com/)]


### mkdir ./server

```var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://averis-filters.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://rizq.com.my/api',
    issuer: 'https://averis-filters.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

GRANT ID FOR ALL AUTH-O PERMISSIONS
cgr_xPM8ZPzjmnd1WXs4
```
- Execute cli to deploy as staging production or localhost development:

```
$ npm run start 
then for staging build production with serverless method using https://vercel.com/ run first cli below:
$ npm run build or $ yarn build

- App running at:
- Local:   http://localhost:3000/ 
```

```
To logout and login back please use below credentials

- Email Username: admin@admin.com
- Password: adminadmin
- or
- Email Username: demo@demo.com
- Password: demodemo
```

