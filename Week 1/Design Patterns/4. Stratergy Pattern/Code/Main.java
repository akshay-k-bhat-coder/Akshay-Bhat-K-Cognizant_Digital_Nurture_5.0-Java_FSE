public class Main {
    public static void main(String[] args) {
        PaymentContext p =
                new PaymentContext(new PayPalPayment());

        p.execute(500);
    }
}