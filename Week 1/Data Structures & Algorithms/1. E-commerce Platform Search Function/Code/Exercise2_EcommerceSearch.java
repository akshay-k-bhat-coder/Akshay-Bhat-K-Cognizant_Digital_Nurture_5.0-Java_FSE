import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("ID: " + productId + ", Name: " + productName + ", Category: " + category);
    }
}

public class Exercise2_EcommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, String key) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(key)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search (array must be sorted by productName)
    public static Product binarySearch(Product[] products, String key) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(key);

            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        String searchKey = "Phone";

        System.out.println("=== Linear Search ===");
        Product result1 = linearSearch(products, searchKey);
        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Product not found");
        }

        // Sort array for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("\n=== Binary Search ===");
        Product result2 = binarySearch(products, searchKey);
        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product not found");
        }
    }
}