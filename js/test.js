//require("../node_modules/quixote/dist/quixote.js")
quixote = require("../node_modules/quixote/dist/quixote.js")

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var frame = quixote.createFrame(600, 400, {
                src: "/base/html/mypage.html"
            },
            function(frame) {
                var position = frame.getElement("[foo]").getRawPosition();
                expect(position.left).toBe(0);
            });
    });
});
