class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid using Credit Card: " + amount);
    }
}