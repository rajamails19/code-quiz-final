export const javaQuestionsData = [
  {
    category: "Set 1",
    questions: [
      {
        id: 1,
        title: "Java Variable Declaration",
        description: "Fill in the missing keyword to declare a constant variable in Java.",
        code: `class Constants {
  /* Missing keyword */ String API_KEY = "abcd1234";
}`,
        solution: "final",
        explanation: "The 'final' keyword is used to declare constants in Java. Once assigned, the value cannot be changed."
      },
      {
        id: 2,
        title: "Java Method Overriding",
        description: "Fill in the missing annotation that indicates a method is overriding a superclass method.",
        code: `class Animal {
  public void makeSound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  /* Missing annotation */
  public void makeSound() {
    System.out.println("Bark");
  }
}`,
        solution: "@Override",
        explanation: "The '@Override' annotation indicates that a method is overriding a method declared in a superclass. It helps catch errors at compile time if the method signature doesn't match any method in the superclass."
      },
      {
        id: 3,
        title: "Java ArrayList Initialization",
        description: "Fill in the missing code to create and initialize an ArrayList with three elements.",
        code: `import java.util.ArrayList;

class ListExample {
  public static void main(String[] args) {
    ArrayList<String> fruits = /* Missing code */;
    System.out.println(fruits);
  }
}`,
        solution: "new ArrayList<>(List.of(\"Apple\", \"Banana\", \"Orange\"))",
        explanation: "This initializes an ArrayList with three String elements using the List.of() method introduced in Java 9. An alternative solution could use Arrays.asList() or add elements individually."
      },
      {
        id: 4,
        title: "Java Lambda Expression",
        description: "Fill in the missing lambda expression to implement a Comparator that sorts strings by length.",
        code: `import java.util.Arrays;
import java.util.Comparator;

class SortExample {
  public static void main(String[] args) {
    String[] words = {"apple", "banana", "kiwi", "strawberry"};
    Arrays.sort(words, /* Missing lambda expression */);
    System.out.println(Arrays.toString(words));  // Should print [kiwi, apple, banana, strawberry]
  }
}`,
        solution: "(s1, s2) -> Integer.compare(s1.length(), s2.length())",
        explanation: "This lambda expression implements a Comparator that compares two strings based on their length, resulting in a sort from shortest to longest string."
      },
      {
        id: 5,
        title: "Java Stream Operations",
        description: "Fill in the missing stream operation to filter out odd numbers and keep only even numbers.",
        code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class StreamExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    List<Integer> evenNumbers = numbers.stream()
        ./* Missing stream operation */
        .collect(Collectors.toList());
    System.out.println(evenNumbers);  // Should print [2, 4, 6, 8, 10]
  }
}`,
        solution: "filter(n -> n % 2 == 0)",
        explanation: "The filter() operation with the predicate 'n -> n % 2 == 0' retains only elements where the condition is true, which in this case are the even numbers."
      },
      {
        id: 6,
        title: "Java Exception Handling",
        description: "Fill in the missing block to handle the exception thrown by the divide method.",
        code: `class ExceptionExample {
  public static double divide(int a, int b) {
    return a / b;
  }
  
  public static void main(String[] args) {
    try {
      System.out.println(divide(10, 0));
    } /* Missing block */ {
      System.out.println("Cannot divide by zero");
    }
  }
}`,
        solution: "catch (ArithmeticException e)",
        explanation: "The 'catch (ArithmeticException e)' block catches the ArithmeticException that is thrown when dividing by zero, allowing the program to continue execution."
      },
      {
        id: 7,
        title: "Java Generics",
        description: "Fill in the missing generic type declaration for a method that accepts any type of collection.",
        code: `import java.util.Collection;

class GenericsExample {
  public static /* Missing generic type declaration */ void printCollection(Collection<T> collection) {
    for (T item : collection) {
      System.out.println(item);
    }
  }
}`,
        solution: "<T>",
        explanation: "The '<T>' declaration before the return type defines a type parameter T that can be used in the method's parameter and body, making it a generic method that works with collections of any type."
      },
      {
        id: 8,
        title: "Java Inheritance",
        description: "Fill in the missing keyword to inherit from a superclass.",
        code: `class Vehicle {
  protected String brand;
  
  public Vehicle(String brand) {
    this.brand = brand;
  }
}

class Car /* Missing keyword */ Vehicle {
  private String model;
  
  public Car(String brand, String model) {
    super(brand);
    this.model = model;
  }
}`,
        solution: "extends",
        explanation: "The 'extends' keyword is used to create a subclass that inherits from a superclass, allowing it to reuse and extend the functionality of the superclass."
      },
      {
        id: 9,
        title: "Java Optional Usage",
        description: "Fill in the missing method to get a default value if the Optional is empty.",
        code: `import java.util.Optional;

class OptionalExample {
  public static void main(String[] args) {
    Optional<String> emptyOptional = Optional.empty();
    String result = emptyOptional./* Missing method */("Default Value");
    System.out.println(result);  // Should print "Default Value"
  }
}`,
        solution: "orElse",
        explanation: "The 'orElse()' method returns the value inside the Optional if present, otherwise it returns the provided default value."
      },
      {
        id: 10,
        title: "Java Enum Declaration",
        description: "Fill in the missing code to declare an enum with constants for days of the week.",
        code: `/* Missing enum declaration */
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
}`,
        solution: "enum DayOfWeek {",
        explanation: "This creates an enum named DayOfWeek with seven constants representing the days of the week. Enums are a special type used to define collections of constants."
      },
      {
        id: 11,
        title: "Java Thread Creation",
        description: "Fill in the missing code to create and start a new thread using a lambda expression.",
        code: `class ThreadExample {
  public static void main(String[] args) {
    Thread thread = new Thread(/* Missing lambda expression */);
    thread.start();
  }
}`,
        solution: "() -> System.out.println(\"Thread running\")",
        explanation: "This creates a new Thread with a Runnable implemented as a lambda expression. When the thread starts, it will execute the code within the lambda, printing 'Thread running'."
      },
      {
        id: 12,
        title: "Java Constructor Chaining",
        description: "Fill in the missing code to call another constructor in the same class.",
        code: `class Person {
  private String name;
  private int age;
  
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  
  public Person(String name) {
    /* Missing constructor call */
  }
}`,
        solution: "this(name, 0)",
        explanation: "The 'this(name, 0)' statement calls the two-parameter constructor from the one-parameter constructor, setting the default age to 0. This is called constructor chaining."
      },
      {
        id: 13,
        title: "Java Binary Operator",
        description: "Fill in the missing operator to perform a bitwise AND operation.",
        code: `class BitwiseExample {
  public static void main(String[] args) {
    int a = 12;  // 1100 in binary
    int b = 10;  // 1010 in binary
    int result = a /* Missing operator */ b;
    System.out.println(result);  // Should print 8 (1000 in binary)
  }
}`,
        solution: "&",
        explanation: "The '&' operator performs a bitwise AND operation, resulting in a bit set to 1 only if the corresponding bits in both operands are 1."
      },
      {
        id: 14,
        title: "Java Type Casting",
        description: "Fill in the missing code to safely cast an Object to a String if possible.",
        code: `class CastingExample {
  public static void main(String[] args) {
    Object obj = "Hello, World!";
    if (obj /* Missing instanceof check */) {
      String str = (String) obj;
      System.out.println(str);
    }
  }
}`,
        solution: "instanceof String",
        explanation: "The 'instanceof' operator checks if an object is an instance of a specified type. Using it before casting helps prevent ClassCastException by ensuring the object can be safely cast to the target type."
      },
      {
        id: 15,
        title: "Java String Manipulation",
        description: "Fill in the missing method to concatenate multiple strings with a delimiter.",
        code: `class StringExample {
  public static void main(String[] args) {
    String result = String./* Missing method */(",", "apple", "banana", "cherry");
    System.out.println(result);  // Should print "apple,banana,cherry"
  }
}`,
        solution: "join",
        explanation: "The String.join() method concatenates the provided strings with the specified delimiter between each string."
      },
      {
        id: 16,
        title: "Java File I/O",
        description: "Fill in the missing code to read all lines from a file using Files class.",
        code: `import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.List;

class FileExample {
  public static void main(String[] args) {
    try {
      List<String> lines = /* Missing code */("data.txt");
      lines.forEach(System.out::println);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`,
        solution: "Files.readAllLines(Paths.get(\"data.txt\"))",
        explanation: "Files.readAllLines() reads all lines from a file and returns them as a List<String>. The Paths.get() method converts a string path to a Path object that can be used with Files methods."
      },
      {
        id: 17,
        title: "Java Interface Default Method",
        description: "Fill in the missing keyword to define a default method in an interface.",
        code: `interface Drawable {
  void draw();
  
  /* Missing keyword */ double calculateArea() {
    return 0.0;  // Default implementation
  }
}`,
        solution: "default",
        explanation: "The 'default' keyword allows interfaces to provide method implementations. Classes implementing the interface can use this default implementation or override it with their own."
      },
      {
        id: 18,
        title: "Java Date-Time API",
        description: "Fill in the missing code to get the current date using the modern date-time API.",
        code: `import java.time.*;

class DateExample {
  public static void main(String[] args) {
    /* Missing code */ today = LocalDate.now();
    System.out.println("Today is: " + today);
  }
}`,
        solution: "LocalDate",
        explanation: "LocalDate is a class in the java.time package representing a date without a time component. LocalDate.now() returns the current date from the system clock."
      },
      {
        id: 19,
        title: "Java Record Class",
        description: "Fill in the missing code to declare a record class for an immutable point with x and y coordinates.",
        code: `/* Missing record declaration */ {
  // No additional code needed - record automatically provides constructor, getters, equals, hashCode, etc.
}`,
        solution: "record Point(int x, int y)",
        explanation: "Introduced in Java 16, records are a special kind of class designed for classes that are primarily data carriers. They automatically provide constructors, accessors, equals, hashCode, and toString methods based on the declared components."
      },
      {
        id: 20,
        title: "Java Assert Statement",
        description: "Fill in the missing code to verify that a value is positive using an assertion.",
        code: `class AssertExample {
  public static void main(String[] args) {
    int value = -5;
    /* Missing assert statement */;
    System.out.println("Value is: " + value);
  }
}`,
        solution: "assert value > 0 : \"Value must be positive\"",
        explanation: "The assert statement verifies that a condition is true. If the condition is false, an AssertionError is thrown with the specified message. Note that assertions must be enabled with the -ea JVM flag to take effect."
      }
    ]
  },
  {
    category: "Set 2",
    questions: [
      {
        id: 1,
        title: "Java Functional Interface",
        description: "Fill in the missing annotation to mark an interface as a functional interface.",
        code: `/* Missing annotation */
interface Calculator {
  int calculate(int a, int b);
}`,
        solution: "@FunctionalInterface",
        explanation: "The @FunctionalInterface annotation indicates that the interface is intended to be a functional interface, which means it has exactly one abstract method and can be used with lambda expressions."
      },
      {
        id: 2,
        title: "Java String Formatting",
        description: "Fill in the missing method to format a string with multiple arguments.",
        code: `class StringFormatExample {
  public static void main(String[] args) {
    String name = "John";
    int age = 30;
    double salary = 50000.50;
    
    String formatted = String./* Missing method */("Name: %s, Age: %d, Salary: $%.2f", name, age, salary);
    System.out.println(formatted);
  }
}`,
        solution: "format",
        explanation: "String.format() returns a formatted string using the specified format string and arguments. %s is for strings, %d for integers, and %.2f for floating-point numbers with 2 decimal places."
      },
      {
        id: 3,
        title: "Java Collection Sorting",
        description: "Fill in the missing code to sort a collection of strings in reverse alphabetical order.",
        code: `import java.util.*;

class SortingExample {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
    Collections.sort(names, /* Missing comparator */);
    System.out.println(names);  // Should print [David, Charlie, Bob, Alice]
  }
}`,
        solution: "Collections.reverseOrder()",
        explanation: "Collections.reverseOrder() returns a Comparator that imposes the reverse of the natural ordering on a collection of objects that implement Comparable. For strings, this results in reverse alphabetical order."
      },
      {
        id: 4,
        title: "Java Method Reference",
        description: "Fill in the missing method reference to print each element in a list.",
        code: `import java.util.Arrays;
import java.util.List;

class MethodReferenceExample {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
    names.forEach(/* Missing method reference */);
  }
}`,
        solution: "System.out::println",
        explanation: "The method reference 'System.out::println' is a shorthand for the lambda expression 'name -> System.out.println(name)'. It refers to the println method of the System.out object."
      },
      {
        id: 5,
        title: "Java Synchronization",
        description: "Fill in the missing keyword to declare a thread-safe method.",
        code: `class Counter {
  private int count = 0;
  
  /* Missing keyword */ void increment() {
    count++;
  }
  
  public int getCount() {
    return count;
  }
}`,
        solution: "synchronized",
        explanation: "The 'synchronized' keyword ensures that only one thread can execute the method at a time, preventing race conditions when multiple threads attempt to modify the count variable simultaneously."
      },
      {
        id: 6,
        title: "Java Multi-catch Exception",
        description: "Fill in the missing syntax to catch multiple exception types in a single catch block.",
        code: `import java.io.*;

class MultipleCatchExample {
  public static void main(String[] args) {
    try {
      // Code that might throw different exceptions
      int[] array = new int[5];
      array[10] = Integer.parseInt("abc");
    } catch (/* Missing multi-catch syntax */) {
      System.out.println("An error occurred: " + e.getMessage());
    }
  }
}`,
        solution: "ArrayIndexOutOfBoundsException | NumberFormatException e",
        explanation: "The multi-catch feature introduced in Java 7 allows catching multiple exception types in a single catch block, separated by the | (pipe) character. This reduces code duplication when handling different exceptions in the same way."
      },
      {
        id: 7,
        title: "Java Try-with-Resources",
        description: "Fill in the missing code to properly close a resource using try-with-resources.",
        code: `import java.io.*;

class TryWithResourcesExample {
  public static void main(String[] args) {
    /* Missing try-with-resources statement */ {
      BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
      String line = reader.readLine();
      System.out.println(line);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}`,
        solution: "try",
        explanation: "The try-with-resources statement automatically closes resources declared within the parentheses after the 'try' keyword when the try block completes. This ensures resources are properly closed even if an exception occurs."
      },
      {
        id: 8,
        title: "Java Stream Collectors",
        description: "Fill in the missing collector to convert a stream of strings to a comma-separated string.",
        code: `import java.util.*;
import java.util.stream.*;

class CollectorsExample {
  public static void main(String[] args) {
    List<String> fruits = Arrays.asList("Apple", "Banana", "Cherry");
    String result = fruits.stream()
        .collect(/* Missing collector */);
    System.out.println(result);  // Should print "Apple,Banana,Cherry"
  }
}`,
        solution: "Collectors.joining(\",\")",
        explanation: "Collectors.joining() converts a stream of strings into a single string by concatenating them with the specified delimiter (in this case, a comma)."
      },
      {
        id: 9,
        title: "Java Map Operations",
        description: "Fill in the missing method to safely get a value from a map with a default if the key is not present.",
        code: `import java.util.*;

class MapExample {
  public static void main(String[] args) {
    Map<String, Integer> scores = new HashMap<>();
    scores.put("Alice", 95);
    scores.put("Bob", 87);
    
    int charlieScore = scores./* Missing method */("Charlie", 0);
    System.out.println("Charlie's score: " + charlieScore);  // Should print "Charlie's score: 0"
  }
}`,
        solution: "getOrDefault",
        explanation: "The getOrDefault() method returns the value associated with the specified key, or the default value if the key is not found in the map."
      },
      {
        id: 10,
        title: "Java Pattern Matching",
        description: "Fill in the missing code to use instanceof with pattern matching to cast and use an object in one step.",
        code: `class PatternMatchingExample {
  public static void printLength(Object obj) {
    if (/* Missing pattern matching instanceof */) {
      System.out.println("Length: " + str.length());
    }
  }
  
  public static void main(String[] args) {
    printLength("Hello, World!");
  }
}`,
        solution: "obj instanceof String str",
        explanation: "Introduced in Java 16, pattern matching for instanceof allows declaring a variable in the instanceof check itself, which is then available for use if the check succeeds. This eliminates the need for an explicit cast."
      },
      {
        id: 11,
        title: "Java Switch Expression",
        description: "Fill in the missing switch expression to return a description based on the day of the week.",
        code: `enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }

class SwitchExample {
  public static String getTypeOfDay(Day day) {
    return /* Missing switch expression */;
  }
  
  public static void main(String[] args) {
    System.out.println(getTypeOfDay(Day.MONDAY));  // Should print "Weekday"
    System.out.println(getTypeOfDay(Day.SATURDAY));  // Should print "Weekend"
  }
}`,
        solution: "switch (day) { case SATURDAY, SUNDAY -> \"Weekend\"; default -> \"Weekday\"; }",
        explanation: "Introduced in Java 14, the switch expression uses the arrow syntax (->) and can return values directly. Multiple case labels can be combined with a comma, and the entire expression evaluates to a single value."
      },
      {
        id: 12,
        title: "Java Text Block",
        description: "Fill in the missing syntax to declare a multi-line string literal using a text block.",
        code: `class TextBlockExample {
  public static void main(String[] args) {
    String html = /* Missing text block syntax */
        <html>
          <body>
            <h1>Hello, World!</h1>
          </body>
        </html>
        """;
    System.out.println(html);
  }
}`,
        solution: "\"\"\"",
        explanation: "Introduced in Java 15, text blocks are a multi-line string literal that begins with three double quotes (\"\"\") followed by a line break. They preserve formatting and avoid the need for explicit newline characters or string concatenation."
      },
      {
        id: 13,
        title: "Java Sealed Classes",
        description: "Fill in the missing keyword to define a sealed class that restricts which classes can extend it.",
        code: `/* Missing keyword */ class Shape permits Circle, Rectangle {
  // Shape implementation
}

final class Circle extends Shape {
  // Circle implementation
}

final class Rectangle extends Shape {
  // Rectangle implementation
}`,
        solution: "sealed",
        explanation: "Introduced in Java 17, sealed classes restrict which other classes may extend them. This provides more control over inheritance hierarchies than traditional open inheritance."
      },
      {
        id: 14,
        title: "Java CompletableFuture",
        description: "Fill in the missing method to run a task asynchronously and get a CompletableFuture.",
        code: `import java.util.concurrent.*;

class AsyncExample {
  public static void main(String[] args) {
    CompletableFuture<String> future = CompletableFuture./* Missing method */(() -> {
      Thread.sleep(1000);
      return "Task completed";
    });
    
    future.thenAccept(System.out::println);
    System.out.println("Main thread continues...");
    
    // Wait for the future to complete
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}`,
        solution: "supplyAsync",
        explanation: "The supplyAsync() method runs a task on the ForkJoinPool.commonPool() and returns a CompletableFuture that will be completed with the result of the task when it completes."
      },
      {
        id: 15,
        title: "Java Resource Bundle",
        description: "Fill in the missing code to load a resource bundle for internationalization.",
        code: `import java.util.*;

class I18NExample {
  public static void main(String[] args) {
    Locale locale = new Locale("fr", "FR");
    ResourceBundle bundle = /* Missing code */("messages", locale);
    String greeting = bundle.getString("greeting");
    System.out.println(greeting);
  }
}`,
        solution: "ResourceBundle.getBundle",
        explanation: "ResourceBundle.getBundle() loads a bundle containing locale-specific resources. This is used for internationalization (i18n) to provide translated messages for different locales."
      },
      {
        id: 16,
        title: "Java Atomic Operations",
        description: "Fill in the missing atomic class to safely increment a counter in a multi-threaded environment.",
        code: `import java.util.concurrent.atomic.*;

class AtomicExample {
  private static /* Missing atomic class */ counter = new AtomicInteger(0);
  
  public static void increment() {
    counter.incrementAndGet();
  }
  
  public static int getCount() {
    return counter.get();
  }
}`,
        solution: "AtomicInteger",
        explanation: "AtomicInteger is a class that provides atomic operations on an integer value, ensuring thread-safety without using explicit synchronization. The incrementAndGet() method atomically increments the value and returns the updated value."
      },
      {
        id: 17,
        title: "Java Reflection",
        description: "Fill in the missing code to get an array of all declared methods in a class using reflection.",
        code: `import java.lang.reflect.*;

class ReflectionExample {
  public static void main(String[] args) {
    Class<?> clazz = String.class;
    Method[] methods = /* Missing code */;
    
    for (Method method : methods) {
      System.out.println(method.getName());
    }
  }
}`,
        solution: "clazz.getDeclaredMethods()",
        explanation: "The getDeclaredMethods() method returns an array of Method objects reflecting all the methods declared by the class, including public, protected, default access, and private methods, but excluding inherited methods."
      },
      {
        id: 18,
        title: "Java NIO Path",
        description: "Fill in the missing code to create a Path object representing a file path.",
        code: `import java.nio.file.*;

class PathExample {
  public static void main(String[] args) {
    Path path = /* Missing code */;
    System.out.println("File name: " + path.getFileName());
  }
}`,
        solution: "Path.of(\"users/documents/file.txt\")",
        explanation: "Path.of() (introduced in Java 11) creates a Path object representing the specified path. It's a convenient factory method for creating paths and an alternative to Paths.get()."
      },
      {
        id: 19,
        title: "Java Records with Custom Methods",
        description: "Fill in the missing code to add a custom method to a record class.",
        code: `record Person(String name, int age) {
  /* Missing method */
  public boolean isAdult() {
    return age >= 18;
  }
}`,
        solution: "// No code needed here",
        explanation: "Records can have custom methods in addition to the automatically generated ones. No extra code is needed before the method declaration; custom methods are defined directly within the record body just like in regular classes."
      },
      {
        id: 20,
        title: "Java Module System",
        description: "Fill in the missing directive to declare a module that requires the java.sql module.",
        code: `/* Missing module declaration */ {
  requires java.base;
  requires java.sql;
  
  exports com.example.app;
}`,
        solution: "module com.example.app",
        explanation: "Introduced in Java 9, the module system groups related packages into modules. A module declaration starts with the 'module' keyword followed by the name of the module. The 'requires' directive specifies other modules that this module depends on."
      }
    ]
  },
  {
    category: "Set 3",
    questions: [
      {
        id: 1,
        title: "Java Stream Reduction",
        description: "Fill in the missing method to find the sum of all elements in a stream of integers.",
        code: `import java.util.*;
import java.util.stream.*;

class StreamReduceExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    int sum = numbers.stream()./* Missing method */();
    System.out.println("Sum: " + sum);  // Should print "Sum: 15"
  }
}`,
        solution: "mapToInt(Integer::intValue).sum()",
        explanation: "The mapToInt() method converts a Stream<Integer> to an IntStream, which has specialized methods like sum(). The Integer::intValue method reference is used for the mapping operation."
      },
      {
        id: 2,
        title: "Java Concurrent Collections",
        description: "Fill in the missing code to create a thread-safe map implementation.",
        code: `import java.util.*;
import java.util.concurrent.*;

class ConcurrentCollectionExample {
  public static void main(String[] args) {
    Map<String, Integer> scores = /* Missing code */();
    
    // Multiple threads can safely modify this map
    scores.put("Alice", 95);
    scores.put("Bob", 87);
    
    System.out.println(scores);
  }
}`,
        solution: "new ConcurrentHashMap<>()",
        explanation: "ConcurrentHashMap is a thread-safe implementation of the Map interface. Unlike the synchronized Collections.synchronizedMap(), it allows concurrent reads and some concurrent updates, offering better performance in multi-threaded environments."
      },
      {
        id: 3,
        title: "Java Varargs Parameter",
        description: "Fill in the missing parameter declaration to accept a variable number of integer arguments.",
        code: `class VarargsExample {
  public static int sum(/* Missing varargs parameter */) {
    int total = 0;
    for (int num : numbers) {
      total += num;
    }
    return total;
  }
  
  public static void main(String[] args) {
    System.out.println(sum(1, 2, 3));  // Should print 6
    System.out.println(sum(10, 20));  // Should print 30
    System.out.println(sum());  // Should print 0
  }
}`,
        solution: "int... numbers",
        explanation: "The '...' syntax in a parameter declaration indicates a varargs parameter, which allows a method to accept zero or more arguments of the specified type. Inside the method, the parameter is treated as an array."
      }
    ]
  }
]