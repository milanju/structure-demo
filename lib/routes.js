Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'home',
  action: function() {
    this.render('home');
  }
});

Router.route('/ghetto', function() {
  name: 'ghetto',
  this.render('ghettoLordTemplate');
});
