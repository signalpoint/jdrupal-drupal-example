// Set the jDrupal sitePath.
jDrupal.config('sitePath', 'http://localhost/drupalgap.web/8');

// Connect to Drupal and say hello to the current user.
jDrupal.connect().then(function() {
  var user = jDrupal.currentUser();
  var msg = user.isAuthenticated() ?
  'Hello ' + user.getAccountName() : 'Hello World';
  document.getElementById('msg').innerHTML = msg;
});