public class Main {
    public static void main(String[] args) {
        Student s = new Student("Akshay", 101);

        StudentView view = new StudentView();

        StudentController controller =
                new StudentController(s, view);

        controller.updateView();
    }
}