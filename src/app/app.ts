import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

@Component({
  imports: [Header, Navbar, Footer, Home, About, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  messageVisible = false;

  showMessage(): void {
    this.messageVisible = true;

    setTimeout(() => {
      this.messageVisible = false;
    }, 2500);

  }
}
