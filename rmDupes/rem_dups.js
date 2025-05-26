TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Remove duplicate',
      callback: async function(t) {
        await t.alert({ message: 'Hej.', duration: 4 });

        return t.alert({ message: 'Då', duration: 4 });
      }
    }];
  }
});