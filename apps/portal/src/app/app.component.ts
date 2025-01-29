import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MylibComponent } from '@libs/mylib';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, MylibComponent],
  template: `
    <nav>
      <a routerLink="/">Home</a>
    </nav>

    <h1 class="demo:text-3xl demo:font-bold demo:underline demo:bg-red-500">
      Hello Tailwind V4!
    </h1>

    <mylib-component/>

    <router-outlet />
  `,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    nav {
      text-align: left;
      padding: 0 0 2rem 0;
    }
  `,
})
export class AppComponent {}
