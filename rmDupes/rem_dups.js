// On click function
var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  scanList(t);
  t.alert({ message: 'Duplicates test.', duration: 4 });
};

// Send card to bin
function scanList(t) {
  return t.board("all").then(function (board) {
      console.log(JSON.stringify(board, null, 2));
    });
}

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      text: 'Callback',
      callback: onBtnClick,
    }];
  }
});