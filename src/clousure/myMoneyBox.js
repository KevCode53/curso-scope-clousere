// function moneyBox(coins) {
//   let saveCoins = 0;

//   saveCoins += coins;

//   console.log(`MyMoneyBox: Q ${saveCoins}`);
// }

// moneyBox(5)
// moneyBox(2)

function moneyBox() {
  let _saveCoins = 0;

  function countCoins(coins) {
    _saveCoins += coins;
    console.log(`MyMoneyBox: Q ${_saveCoins}`);
  }
  return countCoins;
}
const MyMoneyBox = moneyBox();
MyMoneyBox(5);
MyMoneyBox(12);
MyMoneyBox(10);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
