Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.route("/", {
  name: 'home',
  layoutTemplate: 'mainLayout',
  template: 'home'
});

Router.route("/dashboard", {
  name: 'dashboard',
  layoutTemplate: 'mainLayout',
  template: 'dashboard'
});

// Protect all Routes
//Router.plugin('ensureSignedIn');

// Protect some Routes
Router.plugin('ensureSignedIn', {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
})
