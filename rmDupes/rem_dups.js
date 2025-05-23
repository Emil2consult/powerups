TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Remove duplicate',
      callback: async function(t) {
        await t.popup({
          title: 'Processing...',
          url: 'processing.html',
          height: 100
        });

        await new Promise(resolve => setTimeout(resolve, 10000));

        return t.popup({
          title: 'Done!',
          url: 'done.html',
          height: 150
        });
      }
    }];
  }
});