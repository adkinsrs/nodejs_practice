var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){

    setup(function() {
        browser = new Browser();
    });

    // Simulates visiting this page, clicking Request Group Rate through the terminal via the Mocha executable
    test('requesting a group rate quote from the Hood River tour page - should populate the referrer field', function(done) {
        var referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, function() {
            browser.clickLink('.requestGroupRate', function() {
                browser.assert.element('form input[name=referrer]', referrer);
                // Known bug (https://github.com/EthanRBrown/web-development-with-node-and-express/issues/64)
//                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('requesting a group rate quote from the Oregon Coast tour page - should populate the referrer field', function(done) {
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function() {
            browser.clickLink('.requestGroupRate', function() {
                browser.assert.element('form input[name=referrer]', referrer);
//                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visiting the Request Group Rate page directly should result in an empty referrer field', function(done) {
        browser.visit('http://localhost:3000/tours/request-group-rate', function() {
            assert(browser.field('referrer').value === '');
            done();
        });
    });

});
