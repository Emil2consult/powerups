TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://yourdomain.com/icons/calendar-white.png',
      text: 'Remove duplicate',
      callback: function(t) {
        return t.popup({
          title: 'Remove duplicates',
          url: 'Running script to remove duplicates',
        });
      }
    }];
  }
});