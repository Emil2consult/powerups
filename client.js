TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [
      {
        text: "Hello world",
        callback: function (t) {
          return t.card().then(card => alert("Hello world"))
        }
      }
    ]
  }
});

//* function findDates(text) {
//  const dateRegex = /(\d{4}-\d{2}-\d{2})|(\d{2}\/\d{2}\/\d{4})/g;
//  const matches = text.match(dateRegex);
//  return matches || [];
//}