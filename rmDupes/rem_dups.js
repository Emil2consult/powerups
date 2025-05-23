TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Remove duplicate',
      callback: async function(t) {
        await t.popup({
          
        })
      }
    }];
  }
});