class Order:
    def __init__(self):
        self.items = []
        self.prices = []
        self.status = "not_paid"

    def add_online_class(self, name, price):
        self.items.append(name)
        self.prices.append(price)

    def total_price(self):
        total = 0
        for i in range(len(self.prices)):
            total += self.prices[i]
        return total

    def pay(self, payment_type, security_code):
        if payment_type == "debit":
            print("Processing debit payment type")
            print(f"Verifying security code: {security_code}")
            self.status = "paid"

        elif payment_type == "credit":
            print("Processing credit payment type")
            print(f"Verifying security code: {security_code}")
            self.status = "paid"

        else:
            raise Exception(f"Unknown payment type: {payment_type}")


order = Order()
order.add_online_class("Ray's udemy class", 50000)
order.add_online_class("Willy's codecademy class", 50000)
order.add_online_class("Prof. Hsieh's DataCamp class", 99999)

print(order.total_price())
order.pay("debit", "123456")
