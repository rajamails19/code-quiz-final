export const pythonQuestionsData = [
  {
    category: "Set 1",
    questions: [
      {
        id: 1,
        title: "List Comprehension",
        description: "Fill in the missing list comprehension to create a list of squares for numbers 0-9.",
        code: `# Create a list of squares for numbers 0-9
squares = /* Missing list comprehension */

print(squares)  # Should output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`,
        solution: "[x**2 for x in range(10)]",
        explanation: "List comprehensions provide a concise way to create lists. The expression [x**2 for x in range(10)] creates a list containing the square of each number from 0 to 9."
      },
      {
        id: 2,
        title: "String Formatting",
        description: "Fill in the missing f-string to display the person's name and age.",
        code: `name = "Alice"
age = 30

# Create a formatted string
message = /* Missing f-string */

print(message)  # Should output: "Hello, my name is Alice and I am 30 years old."`,
        solution: 'f"Hello, my name is {name} and I am {age} years old."',
        explanation: "F-strings (formatted string literals) are a way to embed expressions inside string literals. The expressions are replaced with their values at runtime."
      },
      {
        id: 3,
        title: "Dictionary Comprehension",
        description: "Fill in the missing dictionary comprehension to create a dictionary mapping numbers to their cubes.",
        code: `# Create a dictionary where keys are numbers 1-5 and values are their cubes
cubes = /* Missing dictionary comprehension */

print(cubes)  # Should output: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}`,
        solution: "{x: x**3 for x in range(1, 6)}",
        explanation: "Dictionary comprehensions are similar to list comprehensions but create dictionaries. The expression {x: x**3 for x in range(1, 6)} creates a dictionary where each key is a number from 1 to 5, and each value is the cube of that number."
      },
      {
        id: 4,
        title: "Lambda Function",
        description: "Fill in the missing lambda function to sort the list of tuples by the second element.",
        code: `pairs = [(1, 'one'), (3, 'three'), (2, 'two'), (4, 'four')]

# Sort the list by the second element of each tuple
sorted_pairs = sorted(pairs, key=/* Missing lambda function */)

print(sorted_pairs)  # Should output: [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]`,
        solution: "lambda x: x[1]",
        explanation: "Lambda functions are small anonymous functions defined with the lambda keyword. Here, lambda x: x[1] creates a function that returns the second element (index 1) of its argument, which is used as the sorting key."
      },
      {
        id: 5,
        title: "Exception Handling",
        description: "Fill in the missing code to handle the exception when dividing by zero.",
        code: `def divide(a, b):
    try:
        return a / b
    /* Missing exception handler */
        return "Division by zero is not allowed"

print(divide(10, 2))  # Should output: 5.0
print(divide(10, 0))  # Should output: "Division by zero is not allowed"`,
        solution: "except ZeroDivisionError:",
        explanation: "The except clause in a try/except block specifies the exception type to catch. ZeroDivisionError is raised when the second argument of a division or modulo operation is zero."
      },
      {
        id: 6,
        title: "List Slicing",
        description: "Fill in the missing slice notation to extract the middle three elements.",
        code: `numbers = [0, 1, 2, 3, 4, 5, 6]

# Extract the middle three elements
middle = numbers[/* Missing slice notation */]

print(middle)  # Should output: [2, 3, 4]`,
        solution: "2:5",
        explanation: "Slice notation [start:end] extracts elements from start to end-1. With [2:5], we extract elements at indices 2, 3, and 4, which are the middle three elements of the list."
      },
      {
        id: 7,
        title: "Generator Function",
        description: "Fill in the missing yield statement to create a generator of Fibonacci numbers.",
        code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        /* Missing yield statement */
        a, b = b, a + b

# Print the first 8 Fibonacci numbers
print(list(fibonacci(8)))  # Should output: [0, 1, 1, 2, 3, 5, 8, 13]`,
        solution: "yield a",
        explanation: "Generator functions use yield to return a value and then resume execution from where they left off. In this case, yield a returns the current Fibonacci number before calculating the next one."
      },
      {
        id: 8,
        title: "Default Parameters",
        description: "Fill in the missing default parameter to make the greeting function work.",
        code: `def greet(name, greeting/* Missing default parameter */):
    return f"{greeting}, {name}!"

print(greet("Alice", "Hello"))  # Should output: "Hello, Alice!"
print(greet("Bob"))  # Should output: "Hi, Bob!"`,
        solution: "='Hi'",
        explanation: "Default parameters provide default values for function parameters if no value is passed. In this case, greeting='Hi' makes 'Hi' the default value for the greeting parameter."
      },
      {
        id: 9,
        title: "String Methods",
        description: "Fill in the missing string method to capitalize the first letter of each word.",
        code: `sentence = "python is awesome"

# Capitalize the first letter of each word
title_case = sentence./* Missing string method */()

print(title_case)  # Should output: "Python Is Awesome"`,
        solution: "title",
        explanation: "The title() method returns a string where the first character of each word is uppercase and the remaining characters are lowercase."
      },
      {
        id: 10,
        title: "List Methods",
        description: "Fill in the missing list method to remove the last element and return it.",
        code: `fruits = ['apple', 'banana', 'cherry', 'date']

# Remove and return the last element
last_fruit = fruits./* Missing list method */()

print(last_fruit)  # Should output: "date"
print(fruits)  # Should output: ['apple', 'banana', 'cherry']`,
        solution: "pop",
        explanation: "The pop() method removes and returns the last item from a list. If an index is provided, it removes and returns the item at that index."
      }
    ]
  },
  {
    category: "Set 2",
    questions: [
      {
        id: 11,
        title: "Set Operations",
        description: "Fill in the missing set operation to find elements common to both sets.",
        code: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Find elements common to both sets
common = set1 /* Missing set operation */ set2

print(common)  # Should output: {4, 5}`,
        solution: "&",
        explanation: "The & operator (or the intersection() method) returns a set containing elements common to both sets. In this case, the numbers 4 and 5 are in both set1 and set2."
      },
      {
        id: 12,
        title: "Dictionary Methods",
        description: "Fill in the missing dictionary method to retrieve a value with a default if the key doesn't exist.",
        code: `student_scores = {'Alice': 90, 'Bob': 85, 'Charlie': 92}

# Get David's score, or 'Not found' if David is not in the dictionary
david_score = student_scores./* Missing dictionary method */('David', 'Not found')

print(david_score)  # Should output: "Not found"`,
        solution: "get",
        explanation: "The get() method returns the value for a specified key if it exists in the dictionary. If the key does not exist, it returns a specified default value."
      },
      {
        id: 13,
        title: "String Slicing with Step",
        description: "Fill in the missing slice notation to reverse the string.",
        code: `text = "Python Programming"

# Reverse the string using slice notation
reversed_text = text[/* Missing slice notation */]

print(reversed_text)  # Should output: "gnimmargorP nohtyP"`,
        solution: "::-1",
        explanation: "The slice notation [start:end:step] can be used to reverse a string with [::-1]. This means start from the beginning, go to the end, and move backwards one step at a time."
      },
      {
        id: 14,
        title: "List Unpacking",
        description: "Fill in the missing variable names to correctly unpack the list.",
        code: `coordinates = [10, 20, 30]

# Unpack the list into variables x, y, and z
/* Missing variable names */ = coordinates

print(f"x={x}, y={y}, z={z}")  # Should output: "x=10, y=20, z=30"`,
        solution: "x, y, z",
        explanation: "List unpacking allows you to assign values from a list to multiple variables in a single statement. The number of variables must match the number of items in the list."
      },
      {
        id: 15,
        title: "Conditional Expression",
        description: "Fill in the missing conditional expression (ternary operator) to check if the number is even.",
        code: `number = 15

# Check if the number is even
result = /* Missing conditional expression */

print(result)  # Should output: "Odd" (because 15 is odd)`,
        solution: '"Even" if number % 2 == 0 else "Odd"',
        explanation: "A conditional expression (or ternary operator) in Python has the form value_if_true if condition else value_if_false. It evaluates to one of two values depending on the condition."
      },
      {
        id: 16,
        title: "Enumerate Function",
        description: "Fill in the missing enumerate function call to get both indices and values.",
        code: `fruits = ['apple', 'banana', 'cherry']

# Use enumerate to get both indices and values
for /* Missing enumerate call */:
    print(f"{index}: {fruit}")

# Should output:
# 0: apple
# 1: banana
# 2: cherry`,
        solution: "index, fruit in enumerate(fruits)",
        explanation: "The enumerate() function adds a counter to an iterable and returns it as an enumerate object. This is useful when you need both the index and value of each item."
      },
      {
        id: 17,
        title: "File Handling",
        description: "Fill in the missing code to open a file for reading using a context manager.",
        code: `# Read the contents of a file using a context manager
/* Missing context manager */ as file:
    content = file.read()
    print(content)`,
        solution: "with open('filename.txt', 'r')",
        explanation: "The with statement (context manager) is used with open() to ensure the file is properly closed after its suite finishes. The 'r' mode opens the file for reading."
      },
      {
        id: 18,
        title: "Tuple Packing",
        description: "Fill in the missing code to create a tuple containing multiple values.",
        code: `# Create a tuple with name, age, and occupation
person = /* Missing tuple packing */

name, age, occupation = person  # Unpack the tuple

print(f"{name} is {age} years old and works as a {occupation}.")
# Should output: "Alice is 30 years old and works as a developer."`,
        solution: "('Alice', 30, 'developer')",
        explanation: "A tuple is an ordered collection of values. Tuple packing is the process of putting multiple values into a tuple, while tuple unpacking extracts values from a tuple into variables."
      },
      {
        id: 19,
        title: "Map Function",
        description: "Fill in the missing map function call to convert a list of strings to integers.",
        code: `string_numbers = ['1', '2', '3', '4', '5']

# Convert all strings to integers using map
numbers = list(/* Missing map function call */)

print(numbers)  # Should output: [1, 2, 3, 4, 5]`,
        solution: "map(int, string_numbers)",
        explanation: "The map() function applies a given function to each item of an iterable and returns an iterator of the results. In this case, it applies the int function to convert each string to an integer."
      },
      {
        id: 20,
        title: "Filter Function",
        description: "Fill in the missing filter function call to get only the even numbers.",
        code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get only the even numbers using filter
even_numbers = list(/* Missing filter function call */)

print(even_numbers)  # Should output: [2, 4, 6, 8, 10]`,
        solution: "filter(lambda x: x % 2 == 0, numbers)",
        explanation: "The filter() function constructs an iterator from elements of an iterable for which a function returns true. Here, we use a lambda function to check if a number is even."
      }
    ]
  },
  {
    category: "Set 3",
    questions: [
      {
        id: 21,
        title: "Class Definition",
        description: "Fill in the missing code to create a Person class with an __init__ method.",
        code: `# Define a Person class with name and age attributes
class Person:
    /* Missing __init__ method */
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

alice = Person("Alice", 30)
print(alice.greet())  # Should output: "Hello, my name is Alice and I am 30 years old."`,
        solution: "def __init__(self, name, age):",
        explanation: "The __init__ method is the constructor for a class in Python. It's called when you create a new instance of a class and allows you to set up the attributes of the instance."
      },
      {
        id: 22,
        title: "Inheritance",
        description: "Fill in the missing code to create a Student class that inherits from Person.",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# Define a Student class that inherits from Person
class Student /* Missing inheritance syntax */:
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self):
        return f"{self.name} is studying with student ID: {self.student_id}"

alice = Student("Alice", 20, "S12345")
print(alice.greet())  # Should output: "Hello, my name is Alice and I am 20 years old."
print(alice.study())  # Should output: "Alice is studying with student ID: S12345"`,
        solution: "(Person)",
        explanation: "Inheritance in Python is specified by putting the parent class name in parentheses after the child class name. This allows the child class to inherit attributes and methods from the parent class."
      },
      {
        id: 23,
        title: "Method Overriding",
        description: "Fill in the missing code to override the greet method in the Student class.",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    # Override the greet method
    /* Missing method override */
        return f"Hi, I'm {self.name}, a student with ID: {self.student_id}"

alice = Student("Alice", 20, "S12345")
print(alice.greet())  # Should output: "Hi, I'm Alice, a student with ID: S12345"`,
        solution: "def greet(self):",
        explanation: "Method overriding is defining a method in a child class with the same name as a method in the parent class. The child's method then takes precedence over the parent's method."
      },
      {
        id: 24,
        title: "Static Method",
        description: "Fill in the missing decorator to create a static method.",
        code: `class MathUtils:
    /* Missing static method decorator */
    def add(x, y):
        return x + y
    
    @staticmethod
    def multiply(x, y):
        return x * y

print(MathUtils.add(5, 3))  # Should output: 8
print(MathUtils.multiply(5, 3))  # Should output: 15`,
        solution: "@staticmethod",
        explanation: "The @staticmethod decorator is used to define a static method in a class. Static methods don't receive the class or instance as the first argument and behave like regular functions."
      },
      {
        id: 25,
        title: "Class Method",
        description: "Fill in the missing decorator to create a class method.",
        code: `class Person:
    count = 0
    
    def __init__(self, name):
        self.name = name
        Person.count += 1
    
    /* Missing class method decorator */
    def get_count(cls):
        return cls.count

alice = Person("Alice")
bob = Person("Bob")
print(Person.get_count())  # Should output: 2`,
        solution: "@classmethod",
        explanation: "The @classmethod decorator is used to define a class method. Class methods receive the class as the first argument (conventionally named cls) rather than the instance."
      },
      {
        id: 26,
        title: "Property Decorator",
        description: "Fill in the missing property decorator to create a getter for the full_name attribute.",
        code: `class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
    /* Missing property decorator */
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

person = Person("John", "Doe")
print(person.full_name)  # Should output: "John Doe"`,
        solution: "@property",
        explanation: "The @property decorator is used to define a method as a property, allowing it to be accessed like an attribute rather than called like a method."
      },
      {
        id: 27,
        title: "Context Manager",
        description: "Fill in the missing methods to create a custom context manager.",
        code: `class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    /* Missing enter method */
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

with FileManager('test.txt', 'w') as f:
    f.write('Hello, world!')`,
        solution: "def __enter__(self):",
        explanation: "The __enter__ method is called when entering a with block and typically returns the resource being managed. The __exit__ method is called when exiting the with block and is responsible for cleanup."
      },
      {
        id: 28,
        title: "Decorators",
        description: "Fill in the missing code to create a decorator that measures execution time.",
        code: `import time

/* Missing decorator definition */
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Execution time: {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@time_it
def slow_function():
    time.sleep(1)
    return "Function completed"

print(slow_function())
# Should output something like:
# Execution time: 1.0012 seconds
# Function completed`,
        solution: "def time_it(func):",
        explanation: "A decorator is a function that takes another function as an argument, adds some functionality, and returns the modified function. In this case, the time_it decorator measures and prints the execution time of the decorated function."
      },
      {
        id: 29,
        title: "Generator Expression",
        description: "Fill in the missing generator expression to create squares of even numbers.",
        code: `# Create a generator of squares of even numbers from 0 to 10
even_squares = /* Missing generator expression */

for num in even_squares:
    print(num)
# Should output: 0, 4, 16, 36, 64, 100`,
        solution: "(x**2 for x in range(11) if x % 2 == 0)",
        explanation: "Generator expressions are similar to list comprehensions but create generators instead of lists. They use parentheses instead of square brackets and compute values on-the-fly, which is more memory-efficient for large datasets."
      },
      {
        id: 30,
        title: "Module Import",
        description: "Fill in the missing import statement to import the sqrt function from the math module.",
        code: `# Import the sqrt function from the math module
/* Missing import statement */

print(sqrt(16))  # Should output: 4.0`,
        solution: "from math import sqrt",
        explanation: "The from ... import ... statement allows you to import specific names from a module directly into your namespace, so you can use them without module qualification."
      }
    ]
  }
];