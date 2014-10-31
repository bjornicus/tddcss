var quixote = require("../node_modules/quixote/dist/quixote.js");
var expect = require('../node_modules/expect.js');

// based on the example in the quixote docs
describe("my page", function() {
    var srcPage = "/base/html/mypage.html";
    var frame;

    function setupFrame(width, done) {
        var options = {
            src: srcPage,
            width: width
        };
        frame = quixote.createFrame(options, done);
    }

    describe('at narrow widths', function() {
        before(function(done) {
            setupFrame(600, done);
        });

        after(function() {
            frame.remove();
        });

        it('should just be the name', function(done) {
            verifyFirstEmailLineIs("Chris Coyier", done)
        });
    });

    describe('at medium widths', function() {
        before(function(done) {
            setupFrame(800, done);
        });
        after(function() {
            frame.remove();
        });

        it('should have "Email: " before the name ', function(done) {
            verifyFirstEmailLineIs("Email: Chris Coyier", done)
        });
    });

    describe('at wide widths', function() {
        before(function(done) {
            setupFrame(1200, done);
        });
        after(function() {
            frame.remove();
        });

        it('should have the email address after the name', function(done) {
            verifyFirstEmailLineIs("Chris Coyier (chriscoyier@gmail.com)", done)
        });
    });

    function verifyFirstEmailLineIs(expectedString, done) {
        var firstLink = frame.get("li:first-child a");
        var textContent = fullStyledTextContent(firstLink);
        expect(textContent).to.be(expectedString);
        done();
    }
});

function fullStyledTextContent(q_element) {
    var domElement = q_element.toDomElement();
    return window.getComputedStyle(domElement, ":before").content.replace(/^\'|\'$/g, "") + domElement.textContent + window.getComputedStyle(domElement, ":after").content.replace(/^\'|\'$/g, "");
}
