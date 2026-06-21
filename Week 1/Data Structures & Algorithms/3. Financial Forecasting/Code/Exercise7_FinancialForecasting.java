import java.util.Scanner;

public class Exercise7_FinancialForecasting {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter present value: ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (in %): ");
        double growthRate = sc.nextDouble() / 100.0;

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double result = futureValue(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f\n", years, result);

        sc.close();
    }
}