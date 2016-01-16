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
