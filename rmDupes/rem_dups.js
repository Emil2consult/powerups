TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', // Change to your icon
      text: 'My Button',
      callback: function(t) {
        // Empty callback
        return t.alert({ message: 'Då', duration: 4 });;
      }
    }];
  }
});