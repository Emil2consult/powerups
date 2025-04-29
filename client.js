TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: 'Find All Dates',
      callback: function(t) {
        return t.card('desc')
          .then(function(card) {
            const description = card.desc;
            const dates = findDates(description);

            if (dates.length === 0) {
              return t.alert({ message: 'No dates found.', duration: 4 });
            }

            const formatted = dates.map(d => d.toDateString()).join('\n');
            return t.alert({ message: formatted, duration: 10 });
          });
      }
    }];
  }
});

function findDates(text) {
  const dateRegex = /(\d{4}-\d{2}-\d{2})|(\d{2}\/\d{2}\/\d{4})/g;
  const matches = text.match(dateRegex);
  return matches || [];
}