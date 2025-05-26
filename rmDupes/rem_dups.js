// Move duplicate to bin


// Duplicate detectionm


// Scan all cards and return a list of all cards


// Scan all lists and display a list 
function scanBoardForList(t) {
  return t.lists('name', 'id').then(function(lists) {  });
}

// On click function
var onBtnClick = async function (t, opts) {
  // Indicate button press
  console.log('Someone clicked the button');

  // Find all lists
  const lists = await t.lists('name', 'id');
  console.log('Lists on board:', lists);

  // Alert user
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