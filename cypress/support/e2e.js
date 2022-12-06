import './commands';
import '@shelex/cypress-allure-plugin';
import "cypress-real-events";

// Hide fetch/XHR requests
const app = window.top;

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.on("window:before:load", window => {
  window.document.cookie = 'cookie-policy-accepted=true';
});