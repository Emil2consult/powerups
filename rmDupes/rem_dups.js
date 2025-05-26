var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  t.popup({message: "Hej", duration: 5})
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      text: 'Callback',
      callback: onBtnClick,
    }];
  }
});
