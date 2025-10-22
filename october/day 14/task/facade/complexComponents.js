class InventoryManager {
  checkStock(productId) {
    console.log(`Checking stock for product #${productId}...`);
    return true;
  }
}

class PaymentProcessor {
  makePayment(amount) {
    console.log(`Processing payment of $${amount}...`);
    return true;
  }
}

class ShippingManager {
  createShipment(productId) {
    console.log(`Creating shipment for product #${productId}...`);
    return "Shipment123";
  }
}

class NotificationService {
  sendConfirmation(email, shipmentId) {
    console.log(`Sending confirmation email to ${email} for ${shipmentId}`);
  }
}

module.exports = {
  InventoryManager,
  PaymentProcessor,
  ShippingManager,
  NotificationService,
};
