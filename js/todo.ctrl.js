// Controller
myApp.controller('TodoCtrl', function (
                 $firebaseArray, FIREBASE_URL) {

  // Sync to Firebase as Array
  this.todos = $firebaseArray(new Firebase(FIREBASE_URL));

  // Add TODO
  this.addTodo = function () {

    this.todos.$add({
      name: this.title,
      date: new Date().valueOf()
    });

    this.title = null;
  }.bind(this);

  // Remove TODO
  this.removeItem = function (item) {
    this.todos.$remove(item);
  };

});
