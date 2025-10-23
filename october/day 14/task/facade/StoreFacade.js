const {
  InventoryManager,
  PaymentProcessor,
  ShippingManager,
  NotificationService,
} = require("./complexComponents");

class StoreFacade {
  constructor() {
    this.inventory = new InventoryManager();
    this.payment = new PaymentProcessor();
    this.shipping = new ShippingManager();
    this.notification = new NotificationService();
  }

  placeOrder(productId, amount, customerEmail) {
    console.log("\n=== Order Process Started ===");

    if (!this.inventory.checkStock(productId)) {
      console.log("Product is out of stock.");
      return;
    }

    if (!this.payment.makePayment(amount)) {
      console.log("Payment failed.");
      return;
    }

    const shipmentId = this.shipping.createShipment(productId);
    this.notification.sendConfirmation(customerEmail, shipmentId);

    console.log("Order completed successfully!");
  }
}

module.exports = StoreFacade;
