this.module('Blog', function() {
  this.Posts = {};
  (function() {

    this.test = "Hello World!";

  }).bind(this.Posts)();
});
