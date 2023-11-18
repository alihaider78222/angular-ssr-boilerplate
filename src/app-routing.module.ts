import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      initialNavigation : 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}