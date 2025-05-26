// Move duplicate to bin


// Duplicate detectionm


// Scan all cards and return a list of all cards


// Scan all lists and display a list 
function scanBoardForList(t) {
  return t.lists('name').then(function(lists) {
    console.log(JSON.stringify(lists, null, 2));
  });
}

// On click function
var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
  scanBoardForList(t);
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