var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  t.alert({ message: 'Duplicates test.', duration: 4 });
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      text: 'Callback',
      callback: onBtnClick,
    }];
  }
});