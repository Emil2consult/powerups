var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-detail-badges': function(t, options) {
    return t.card('desc')
      .then(function(card) {
        const description = card.desc || '';
        const dates = findDates(description);

        if (dates.length > 0) {
          return [{
            title: 'Found Date',
            text: dates[0],
            color: 'yellow',
            refresh: 10
          }];
        } else {
          return [];
        }
      });
  }
});

function findDates(text) {
  const dateRegex = /(\d{4}-\d{2}-\d{2})|(\d{2}\/\d{2}\/\d{4})/g;
  const matches = text.match(dateRegex);
  return matches || [];
}