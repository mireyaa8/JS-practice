function towns(input) {
  let obj = {};
  input.forEach((element) => {
    let array = element.split("|");
    let town = array[0];
    let lattitude = array[1];
    let longtitude = [2];
    obj.town = town;
    obj.lattitude = Number(lattitude).toFixed(2);
    obj.longtitude = Number(longtitude).toFixed(2);
    console.log(obj);
  });
}

function storeProvision(storageArray, deliveryArray) {
  let store = {};
  for (let i = 0; i < storageArray.length; i += 2) {
    let product = storageArray[i];
    let quantity = Number(storageArray[i + 1]);
    store[product] = quantity;
  }
  for (let i = 0; i < deliveryArray.length; i += 2) {
    let product = deliveryArray[i];
    let quantity = Number(deliveryArray[i + 1]);
    if (store.contains(product)) {
      store[product] += quantity;
    } else {
      store[product] = quantity;
    }
  }

  for (let product in store) {
    console.log(`${product} -> ${store[product]}`);
  }
}

function movies(input){
    let obj = {};
}