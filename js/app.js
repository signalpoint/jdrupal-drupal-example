// Set the Drupal site path.
jDrupal.config('sitePath', 'http://example.com');

// Connect to Drupal and say hello to the current user.
jDrupal.connect().then(function() {
  var user = jDrupal.currentUser();
  var msg = user.isAuthenticated() ?
  'Hello ' + user.getAccountName() : 'Hello World';
  document.getElementById('msg').innerHTML = msg;
});