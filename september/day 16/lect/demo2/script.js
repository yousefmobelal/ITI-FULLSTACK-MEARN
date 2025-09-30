let dbPromise = idb.open("Couches", 2, function (upgradeDB) {
  console.log("Create Table Couches");
  upgradeDB.createObjectStore("Orders", { keyPath: "id" });
  upgradeDB.createObjectStore("Products", { keyPath: "id" });
  let store = upgradeDB.transaction.objectStore("Products");
  store.createIndex("name", "name", { unique: true });
});

onload = function () {
  this.document.getElementById("add-order").onclick = AddOrders;
  this.document.getElementById("add-product").onclick = AddProducts;
  this.document.getElementById("searchBtn").onclick = searchProducts;
};

async function AddProducts() {
  try {
    const db = await dbPromise;
    let tx = db.transaction("Products", "readwrite");
    let store = tx.objectStore("Products");

    let items = [
      {
        name: "Couch",
        id: "cch-blk-ma",
        price: 499.99,
        color: "black",
        material: "mahogany",
        description: "A very comfy couch",
        quantity: 3,
      },
      {
        name: "Armchair",
        id: "ac-gr-pin",
        price: 299.99,
        color: "grey",
        material: "pine",
        description: "A plush recliner armchair",
        quantity: 7,
      },
      {
        name: "Stool",
        id: "st-re-pin",
        price: 59.99,
        color: "red",
        material: "pine",
        description: "A light, high-stool",
        quantity: 3,
      },
      {
        name: "Chair",
        id: "ch-blu-pin",
        price: 49.99,
        color: "blue",
        material: "pine",
        description: "A plain chair for the kitchen table",
        quantity: 1,
      },
      {
        name: "Dresser",
        id: "dr-wht-ply",
        price: 399.99,
        color: "white",
        material: "plywood",
        description: "A plain dresser with five drawers",
        quantity: 4,
      },
      {
        name: "Cabinet",
        id: "ca-brn-ma",
        price: 799.99,
        color: "brown",
        material: "mahogany",
        description: "An intricately-designed, antique cabinet",
        quantity: 11,
      },
    ];

    await Promise.all(
      items.map((item) => {
        console.log("Adding product", item);
        return store.add(item);
      })
    ).then(() => {
      console.log("Products added successfully");
    });
  } catch (err) {
    console.log(err);
  }
}

async function AddOrders() {
  try {
    const db = await dbPromise;
    let tx = db.transaction("Orders", "readwrite");
    let store = tx.objectStore("Orders");

    let items = [
      {
        name: "Cabinet",
        id: "ca-brn-ma",
        price: 799.99,
        color: "brown",
        material: "mahogany",
        description: "An intricately-designed, antique cabinet",
        quantity: 7,
      },
      {
        name: "Armchair",
        id: "ac-gr-pin",
        price: 299.99,
        color: "grey",
        material: "pine",
        description: "A plush recliner armchair",
        quantity: 3,
      },
      {
        name: "Couch",
        id: "cch-blk-ma",
        price: 499.99,
        color: "black",
        material: "mahogany",
        description: "A very comfy couch",
        quantity: 3,
      },
    ];

    await Promise.all(
      items.map((item) => {
        console.log("Adding order", item);
        return store.add(item);
      })
    ).then(() => {
      console.log("Orders added successfully");
    });
  } catch (err) {
    console.log(err);
  }
}

//1 get orders
function getOrders() {
  return dbPromise.then((db) => {
    let tx = db.transaction("Orders", "readonly");
    let store = tx.objectStore("Orders");
    store.get;
  });
}

function fulfillOrders() {
  getOrders().then((orders) => {
    return processOrders(orders).then((products) => {
      console.log(products);
    });
  });
}

function processOrders(orders) {
  return dbPromise.then((db) => {
    let tx = db.transaction("Products", "readonly");
    let store = tx.objectStore("Products");
    return Promise.all(
      orders.map(async (order) => {
        const product = await store.get(order.id);
        compareQuanitiy(product, order);
      })
    );
  });
}

function compareQuanitiy(product, order) {
  new Promise(function (resolve, reject) {
    let quantityItem = product.quantity - order.quantity;
    if (quantityItem < 0) {
      reject("out of stock");
      deleteProduct(product.id);
    } else {
      let item = product;
      item.quantity = quantityItem;
      resolve(item);
    }
  });
}

function updateProductsTable(products) {
  return dbPromise.then((db) => {
    let tx = db.transaction("Products", "readwrite");
    let store = tx.objectStore("Products");
    return Promise.all(
      products.map((product) => {
        return store.put(product);
      })
    ).catch((err) => {
      tx.abort();
      console.log(err);
    });
  });
}

function deleteProduct(productId) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction("Products", "readwrite");
      const store = tx.objectStore("Products");
      return store.delete(productId);
    })
    .catch((err) => {
      console.error("Failed to delete product:", err);
    });
}

async function searchProducts() {
  let pName = document.getElementById("pName").value;
  try {
    const db = await dbPromise;
    const tx = db.transaction("Products", "readonly");
    const store = tx.objectStore("Products");
    const index = store.index("name");
    const product = await index.get(pName);
    if (product) {
      let result = "";
      for (const elem of product) {
        result += elem + ": " + product[elem] + "<br>";
      }
      document.getElementById("div").innerText = result;
    } else {
      result = "Not Found";
    }
  } catch (err) {
    console.log(err);
  }
}

//2 process orders
//3 compare quantity
//4 update products
//5 clear orders
