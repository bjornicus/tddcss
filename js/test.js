//require("../node_modules/quixote/dist/quixote.js")
quixote = require("../node_modules/quixote/dist/quixote.js")
var expect = require('../node_modules/expect.js');

describe("A suite", function() {
    it("contains spec with an expectation", function(done) {
        var frame = quixote.createFrame(600, 400, {
                src: "/base/html/mypage.html"
            },
            function(err, frame) {
                var element = frame.getElement("[foo]");
                var position = element.getRawPosition();
                expect(position.top).to.be(25);
                done();
            });
    });
});
