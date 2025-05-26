var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  return t.alert({ message: 'Då', duration: 4 });
};

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', // Change to your icon
      text: 'My Button',
      callback: onBtnClick
    }];
  }
});