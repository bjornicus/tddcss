var quixote = require("../node_modules/quixote/dist/quixote.js");
var expect = require('../node_modules/expect.js');

// based on the example in the quixote docs
describe("My page", function() {

  var frame;

  before(function(done) {
    var options = { src: "/base/html/mypage.html" };
    frame = quixote.createFrame(options, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();
    // Get the elements we want to test
  });

  it('has a test', function (done) {
      // nothing
      done();
  });

});