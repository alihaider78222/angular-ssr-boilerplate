# Angular SSR Boilerplate Project

Angular 16 boilerplate project example for Server side rendering (SSR) and was generated with [Angular CLI](https://github.com/angular/angular-cli): 16.0.6, [node](https://nodejs.org/en): 18.10.0, npm 9.8.1

## Demo

<p style="text-align: center">
  <img src="./gif/angular-ssr-example.gif" alt="Angular 16 Boilerplate Project example - Server Side Rendering (SSR) "  >
</p>

## How to Use

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/alihaider78222/angular-ssr-boilerplate.git
```

**Step 2:**

Go to project root and execute the following command in console to get the required dependencies:

```
npm install
```

## Development server

To to start a node.js Development server with Server Side Rendering (SSR) run

```
npm run dev:ssr
```

now navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## Build and Serve

Run below command to build the project. The build artifacts will be stored in the `dist/` directory.

```
npm run build:ssr
```

Now run

```
npm run serve:ssr
```

and your production build form `dist` folder will be served on node.js server and you can navigate to `http://localhost:4200` OR `http://localhost:4000` (or your custom PORT) to view the app.

## Boilerplate features

* Home
* Routing
* HTTP
* Bootstrap 4
* Server Side Rendering (SSR) / Angular Universal
* Dependency Injection
* Angular hydration
* SEO service to update Meta Tags

### Up-Coming Features

* Connectivity Support (No internet available)
* Dark Theme Support
* Multilingual Support

### Folder Structure

Here is the core folder structure which flutter provides.

```
angular-app/
|- node_modules
|- src
|- ...
```

Here is the folder structure we have been using in this project

```
src/app/
|- pages/
|- services/
|- app.component.html
|- app.component.ts
|- app.module.ts
|- app-routing.module.ts
|- app-server.module.ts
```

### Pages

This directory contains all the application top level Pages. A separate folder is created for each page as shown in example below:

```
pages/
|- home/
    |- home.component.html
    |- home.component.scss
    |- home.component.ts

```

### Services

This directory contains all the Services. A separate folder is created for each services as shown in example below:

```
services/
|- api/
    |- api.service.ts

|- seo/
    |- seo.service.ts

```

### Routes

`app-routing.module.ts` file contains all the routes for your application.

```
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":id",
    component: HomeComponent,
  },
]
```

### API used in this project?

Puplic API used to fetch dummy blogs and its details and images are from

```
https://api.slingacademy.com/v1/sample-data/blog-posts
```


### What is Angular hydration?

Angular Hydration is the process that restores a server-side rendered application on the client.

Without hydration, the browser would receive the server-rendered HTML, display it to the user, and then destroy and re-render the DOM when Angular initializes the client-side application. This could result in a visible UI flicker and negatively impact performance metrics like First Input Delay (FID) and Largest Contentful Paint (LCP).

## Wiki

Checkout [wiki](https://github.com/alihaider78222/angular-ssr-boilerplate/wiki) for more info

## Conclusion

I will be happy to answer any questions that you may have on this approach, and if you want to lend a hand with the boilerplate then please feel free to submit an issue and/or pull request 🙂

Again to note, this is is an example only. If you liked my work, don’t forget to ⭐ star the repo to show your support.
