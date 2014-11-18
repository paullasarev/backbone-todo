var assert = window.assert;

describe("app", function(){
  it('should show app view', function() {
    var view = new app.AppView();
    assert.ok(view);
  })
})