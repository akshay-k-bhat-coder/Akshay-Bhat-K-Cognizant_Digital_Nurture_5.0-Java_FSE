import java.util.Arrays;
import java.util.Comparator;

class Book {
    int bookId;
    String title;
    String author;

    Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    void display() {
        System.out.println("Book ID: " + bookId + ", Title: " + title + ", Author: " + author);
    }
}

public class Exercise6_LibraryManagement {

    // Linear Search by title
    public static Book linearSearch(Book[] books, String title) {
        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title)) {
                return b;
            }
        }
        return null;
    }

    // Binary Search by title (array must be sorted)
    public static Book binarySearch(Book[] books, String title) {
        int low = 0, high = books.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = books[mid].title.compareToIgnoreCase(title);

            if (cmp == 0) {
                return books[mid];
            } else if (cmp < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Book[] books = {
            new Book(1, "Java", "James Gosling"),
            new Book(2, "Python", "Guido van Rossum"),
            new Book(3, "Data Structures", "Seymour Lipschutz"),
            new Book(4, "Algorithms", "Robert Sedgewick"),
            new Book(5, "Operating Systems", "Galvin")
        };

        String searchTitle = "Python";

        System.out.println("=== Linear Search ===");
        Book result1 = linearSearch(books, searchTitle);
        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Book not found");
        }

        // Sort books by title for binary search
        Arrays.sort(books, Comparator.comparing(b -> b.title.toLowerCase()));

        System.out.println("\n=== Binary Search ===");
        Book result2 = binarySearch(books, searchTitle);
        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Book not found");
        }
    }
}
