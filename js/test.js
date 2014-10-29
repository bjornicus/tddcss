var quixote = require("../node_modules/quixote/dist/quixote.js");
var expect = require('../node_modules/expect.js');

// based on the example in the quixote docs
describe("My page", function() {

  var frame;        // Quixote test frame
  var sectionOne;         // the sectionOne element on the page
  var sectionTwo;         // the sectionTwo element

  // Create the test frame once for all your tests.
  // Here we load mypage.html. You can also create elements programmatically.
  before(function(done) {
    var options = { src: "/base/html/mypage.html" };
    frame = quixote.createFrame(options, done);
  });

  // Destroy the test frame after your tests are done.
  after(function() {
    frame.remove();
  });

  // Reset the test frame before (or after) each test. This is
  // faster than re-creating the frame for every test.
  beforeEach(function() {
    frame.reset();

    // Get the elements we want to test
    sectionOne = frame.get("#foo");       // you can use any CSS selector
    sectionTwo = frame.get("[data-section~='two']");
  });

  // Here's our test.
  it("positions section two below section one", function() {
    // The 'assert()' method checks multiple properties at once.
    // You can also use 'diff()' with your favorite assertion library.
    sectionTwo.assert({
      // We can check a hard-coded value
      left: 15,    // sectionTwo is 15px from left side of page

      // Or, better yet, check the relationship between elements
      top: sectionOne.bottom.plus(10)   // sectionTwo is 10px below logo
    });
  });

  it("uses big font for section two", function() {
    // Sometimes, 'assert()' doesn't support what you need.
    // But you can check any CSS style you want by using 'getRawStyle()'.

    // Get the font size actually displayed in the browser
    var fontSize = sectionTwo.getRawStyle("font-size");  

    // Use your preferred assertion library (such as Chai) to make assertions.
    expect(fontSize).to.be("18px");
  });

});