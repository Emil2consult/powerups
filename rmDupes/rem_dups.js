// Move duplicate to bin


// Find all duplicates based on name and desc
function findDuplicateCard(cards) {


  // loop over all cards
  


  return;
}

// On click function
var onBtnClick = async function (t, opts) {
  // Indicate button press
  console.log('Someone clicked the button');

  // Find all lists
  const lists = await t.lists('name', 'id');
  console.log('Lists on board:', lists);

  // Alert user
  t.alert({
    message: 'Duplicate.',
    duration: 4 });
};

window.TrelloPowerUp.initialize(
  {
    'board-buttons': function (t, opts) {
      return [{
        text: 'Callback',
        callback: onBtnClick,
      }];
    }
  },
  {
    appKey: "my-trello-key",
    appName: "My Power-Up",
    appAuthor: "My Company",
  }
);