# Angular SSR Boilerplate Project

A boiler plate project created in Angular for Server side rendering (SSR) and was generated with [Angular CLI](https://github.com/angular/angular-cli): 16.0.6, [node](https://nodejs.org/en): 18.10.0, npm 9.8.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Add Angular Universal

Run in terminal

- `ng add @ng-toolkit/universal`

- `ng add @nguniversal/express-engine`

## Add Angular hydration

Angular Hydration is the process that restores a server-side rendered application on the client.

Without hydration, the browser would receive the server-rendered HTML, display it to the user, and then destroy and re-render the DOM when Angular initializes the client-side application. This could result in a visible UI flicker and negatively impact performance metrics like First Input Delay (FID) and Largest Contentful Paint (LCP).

in `app.module.ts` add

```</br>
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  providers: [
    provideClientHydration(),
  ],
})
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
