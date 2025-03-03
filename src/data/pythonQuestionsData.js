export const pythonQuestionsData = [
    {
      id: 1,
      title: "Variable Assignment",
      description: "Fill in the missing variable assignment to make the code work.",
      code: `# Define a variable to store the user's name
  /* Missing variable assignment */ = "Alice"
  
  # Print a greeting using the name
  print(f"Hello, {name}!")`
      ,
      solution: "name",
      explanation: "In Python, variables don't need type declarations. We simply assign a value to a variable name. Here, we're creating a variable called 'name' and assigning the string 'Alice' to it."
    },
    {
      id: 2,
      title: "List Comprehension",
      description: "Fill in the missing list comprehension to create a list of squares of numbers from 1 to 10.",
      code: `# Create a list of squares using list comprehension
  squares = /* Missing list comprehension */
  
  print(squares)  # Should output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`
      ,
      solution: "[x**2 for x in range(1, 11)]",
      explanation: "List comprehensions provide a concise way to create lists. The syntax is [expression for item in iterable]. Here, we're creating a list of squares (x**2) for each number x in the range from 1 to 11 (which gives us numbers 1 through 10)."
    },
    {
      id: 3,
      title: "Function Definition",
      description: "Fill in the missing function definition to calculate the factorial of a number recursively.",
      code: `# Define a recursive factorial function
  /* Missing function definition */ factorial(n):
      if n == 0 or n == 1:
          return 1
      else:
          return n * factorial(n-1)
  
  result = factorial(5)
  print(result)  # Should output: 120`
      ,
      solution: "def",
      explanation: "The 'def' keyword is used to define a function in Python. Here, we're defining a recursive function called 'factorial' that calculates the factorial of a number by multiplying the number by the factorial of (n-1)."
    },
    {
      id: 4,
      title: "Dictionary Creation",
      description: "Fill in the missing code to create a dictionary with names and ages.",
      code: `# Create a dictionary with names as keys and ages as values
  people = /* Missing dictionary creation */
  
  print(people["Alice"])  # Should output: 30`
      ,
      solution: "{'Alice': 30, 'Bob': 25, 'Charlie': 35}",
      explanation: "Dictionaries in Python are collections of key-value pairs. They're created using curly braces {} with key-value pairs separated by colons and commas between pairs. Here, we're creating a dictionary with names as keys and ages as values."
    },
    {
      id: 5,
      title: "Exception Handling",
      description: "Fill in the missing try-except block to handle a potential division by zero error.",
      code: `def divide(a, b):
      /* Missing try block */
          result = a / b
          return result
      except ZeroDivisionError:
          return "Error: Division by zero"
  
  print(divide(10, 2))  # Should output: 5.0
  print(divide(10, 0))  # Should output: Error: Division by zero`
      ,
      solution: "try:",
      explanation: "The try-except block is used for exception handling in Python. Code that might raise an exception goes in the try block, and the code to handle the exception goes in the except block. Here, we're handling a potential ZeroDivisionError."
    },
    {
      id: 6,
      title: "Class Definition",
      description: "Fill in the missing class definition to create a simple Rectangle class.",
      code: `# Define a Rectangle class
  /* Missing class definition */ Rectangle:
      def __init__(self, width, height):
          self.width = width
          self.height = height
      
      def area(self):
          return self.width * self.height
  
  rect = Rectangle(5, 10)
  print(rect.area())  # Should output: 50`
      ,
      solution: "class",
      explanation: "The 'class' keyword is used to define a class in Python. Here, we're creating a Rectangle class with an __init__ method to initialize the width and height, and an area method to calculate the rectangle's area."
    },
    {
      id: 7,
      title: "File Handling",
      description: "Fill in the missing code to open a file for writing.",
      code: `# Open a file for writing
  /* Missing file open code */ 'output.txt', 'w') as file:
      file.write("Hello, World!")
  
  # Check if the file was created
  with open('output.txt', 'r') as file:
      content = file.read()
      print(content)  # Should output: Hello, World!`
      ,
      solution: "with open(",
      explanation: "The 'with' statement is used for resource management in Python. 'open()' is a built-in function to open files. When used with 'with', it ensures the file is properly closed after the block is exited. Here, we're opening 'output.txt' for writing ('w')."
    },
    {
      id: 8,
      title: "Lambda Function",
      description: "Fill in the missing lambda function to filter out even numbers from a list.",
      code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  # Use filter with a lambda function to get odd numbers
  odd_numbers = list(filter(/* Missing lambda function */, numbers))
  
  print(odd_numbers)  # Should output: [1, 3, 5, 7, 9]`
      ,
      solution: "lambda x: x % 2 != 0",
      explanation: "Lambda functions are small anonymous functions defined with the 'lambda' keyword. Here, we're creating a lambda function that returns True if a number is odd (has a remainder when divided by 2) and False otherwise."
    },
    {
      id: 9,
      title: "String Formatting",
      description: "Fill in the missing f-string to format a string with variables.",
      code: `name = "Alice"
  age = 30
  
  # Create a formatted string using f-string
  message = /* Missing f-string */
  
  print(message)  # Should output: My name is Alice and I am 30 years old.`
      ,
      solution: "f\"My name is {name} and I am {age} years old.\"",
      explanation: "F-strings provide a concise and readable way to include expressions inside string literals. The expressions are replaced with their values at runtime. Here, we're creating a string that includes the values of the 'name' and 'age' variables."
    },
    {
      id: 10,
      title: "Generator Function",
      description: "Fill in the missing yield statement to create a generator function that yields Fibonacci numbers.",
      code: `def fibonacci(n):
      a, b = 0, 1
      count = 0
      
      while count < n:
          /* Missing yield statement */
          a, b = b, a + b
          count += 1
  
  for num in fibonacci(10):
      print(num, end=" ")  # Should output: 0 1 1 2 3 5 8 13 21 34`
      ,
      solution: "yield a",
      explanation: "Generator functions return a generator object which produces values on demand using the 'yield' statement. Here, we're creating a generator that yields Fibonacci numbers. The 'yield' statement returns a value and pauses the function, saving its state for the next call."
    },
    {
      id: 11,
      title: "Import Statement",
      description: "Fill in the missing import statement to use the datetime module.",
      code: `# Import the datetime module
  /* Missing import statement */
  
  # Get the current date and time
  current_time = datetime.datetime.now()
  print(f"Current time: {current_time}")  # Should output the current date and time`
      ,
      solution: "import datetime",
      explanation: "The 'import' statement is used to include external modules in your Python script. The datetime module provides classes for manipulating dates and times. Here, we're importing the datetime module to use its functionality."
    },
    {
      id: 12,
      title: "List Slicing",
      description: "Fill in the missing list slice to get the middle three elements of the list.",
      code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  # Get the middle three elements using slicing
  middle_three = numbers[/* Missing slice notation */]
  
  print(middle_three)  # Should output: [4, 5, 6]`
      ,
      solution: "3:6",
      explanation: "List slicing allows you to get a subset of a list. The syntax is list[start:stop]. Python uses zero-based indexing, so the element at index 3 is the 4th element. The stop index is exclusive, so list[3:6] gives elements at indices 3, 4, and 5 (the 4th, 5th, and 6th elements)."
    },
    {
      id: 13,
      title: "Comprehension with Conditional",
      description: "Fill in the missing list comprehension with a conditional to get even numbers from 1 to 20.",
      code: `# Use list comprehension with a conditional to get even numbers
  even_numbers = /* Missing list comprehension with conditional */
  
  print(even_numbers)  # Should output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`
      ,
      solution: "[x for x in range(1, 21) if x % 2 == 0]",
      explanation: "List comprehensions can include conditionals. The syntax is [expression for item in iterable if condition]. Here, we're creating a list of numbers from 1 to 20 that are divisible by 2 (even numbers)."
    },
    {
      id: 14,
      title: "Context Manager",
      description: "Fill in the missing context manager definition to create a timer.",
      code: `import time
  
  /* Missing context manager class definition */ Timer:
      def __enter__(self):
          self.start = time.time()
          return self
      
      def __exit__(self, exc_type, exc_val, exc_tb):
          self.end = time.time()
          print(f"Time taken: {self.end - self.start:.2f} seconds")
  
  # Use the Timer context manager
  with Timer():
      # Some operation that takes time
      time.sleep(1)  # Should output something like: Time taken: 1.00 seconds`
      ,
      solution: "class",
      explanation: "Context managers are objects that define the methods __enter__ and __exit__. They're used with the 'with' statement for resource management. Here, we're creating a Timer class that measures the time taken to execute a block of code."
    },
    {
      id: 15,
      title: "Decorators",
      description: "Fill in the missing decorator definition to create a timing decorator.",
      code: `import time
  import functools
  
  /* Missing decorator definition */ timing_decorator(func):
      @functools.wraps(func)
      def wrapper(*args, **kwargs):
          start_time = time.time()
          result = func(*args, **kwargs)
          end_time = time.time()
          print(f"Function {func.__name__} took {end_time - start_time:.2f} seconds to run")
          return result
      return wrapper
  
  @timing_decorator
  def slow_function():
      time.sleep(1)
      return "Done"
  
  print(slow_function())  # Should output timing information and "Done"`
      ,
      solution: "def",
      explanation: "Decorators are functions that modify the behavior of other functions. They're defined using the 'def' keyword and are applied to functions using the '@' syntax. Here, we're creating a decorator that measures the time taken to execute a function."
    },
    {
      id: 16,
      title: "Set Comprehension",
      description: "Fill in the missing set comprehension to create a set of squares of numbers from 1 to 10.",
      code: `# Create a set of squares using set comprehension
  square_set = /* Missing set comprehension */
  
  print(square_set)  # Should output a set containing: {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}`
      ,
      solution: "{x**2 for x in range(1, 11)}",
      explanation: "Set comprehensions provide a concise way to create sets. The syntax is {expression for item in iterable}. Here, we're creating a set of squares (x**2) for each number x in the range from 1 to 11 (which gives us numbers 1 through 10)."
    },
    {
      id: 17,
      title: "Dict Comprehension",
      description: "Fill in the missing dictionary comprehension to create a dictionary mapping numbers to their squares.",
      code: `# Create a dictionary mapping numbers to their squares
  square_dict = /* Missing dict comprehension */
  
  print(square_dict[5])  # Should output: 25`
      ,
      solution: "{x: x**2 for x in range(1, 11)}",
      explanation: "Dictionary comprehensions provide a concise way to create dictionaries. The syntax is {key_expr: value_expr for item in iterable}. Here, we're creating a dictionary that maps each number from 1 to 10 to its square."
    },
    {
      id: 18,
      title: "Multiple Inheritance",
      description: "Fill in the missing class definition with multiple inheritance.",
      code: `class Animal:
      def speak(self):
          return "Some sound"
  
  class Dog(Animal):
      def speak(self):
          return "Woof"
  
  class Robot:
      def beep(self):
          return "Beep"
  
  # Create a RoboDog class that inherits from both Dog and Robot
  /* Missing class definition */
  
  robo_dog = RoboDog()
  print(robo_dog.speak())  # Should output: Woof
  print(robo_dog.beep())   # Should output: Beep`
      ,
      solution: "class RoboDog(Dog, Robot):",
      explanation: "Python supports multiple inheritance, allowing a class to inherit from multiple parent classes. The syntax is class ChildClass(Parent1, Parent2, ...). Here, RoboDog inherits from both Dog and Robot, gaining the methods and attributes of both."
    },
    {
      id: 19,
      title: "Property Decorator",
      description: "Fill in the missing property decorator to create a read-only property.",
      code: `class Circle:
      def __init__(self, radius):
          self._radius = radius
      
      /* Missing property decorator */
      def area(self):
          import math
          return math.pi * self._radius ** 2
  
  circle = Circle(5)
  print(f"Area: {circle.area}")  # Should output the area (approximately 78.54)`
      ,
      solution: "@property",
      explanation: "The @property decorator is used to define methods that act like attributes. It allows you to access a method as if it were an attribute, without the parentheses. Here, we're creating a read-only property 'area' that calculates the area of a circle."
    },
    {
      id: 20,
      title: "With Statement",
      description: "Fill in the missing 'with' statement to use a context manager for opening a file.",
      code: `# Use the 'with' statement to ensure the file is properly closed
  /* Missing with statement */ open('example.txt', 'w') as file:
      file.write("Hello, World!")
  
  # Check if the file was created
  import os
  print(os.path.exists('example.txt'))  # Should output: True`
      ,
      solution: "with",
      explanation: "The 'with' statement is used with context managers to ensure resources are properly managed. When used with file operations, it ensures the file is properly closed after the block is exited, even if an exception occurs. Here, we're opening 'example.txt' for writing."
    },
    {
          id: 21,
          title: "Python Variable Assignment",
          description: "Fill in the missing code to assign 10 to the variable `x`.",
          code: `# Missing assignment
      print(x)  # Output should be 10`,
          solution: "x = 10",
          explanation: "In Python, variable assignment is done using `=`. Here, `x = 10` assigns the value `10` to `x`."
        },
        {
          id: 22,
          title: "Python Function Definition",
          description: "Fill in the missing keyword to define a function named `greet` that prints 'Hello!'.",
          code: `# Missing function definition
        greet():
          print("Hello!")`,
          solution: "def",
          explanation: "Functions in Python are defined using the `def` keyword followed by the function name and parentheses."
        },
        {
          id: 23,
          title: "Looping Through a List",
          description: "Fill in the missing loop syntax to iterate over `fruits` and print each item.",
          code: `fruits = ["apple", "banana", "cherry"]
      # Missing loop
          print(fruit)`,
          solution: "for fruit in fruits:",
          explanation: "In Python, a `for` loop is used to iterate over elements in a list. `for fruit in fruits:` allows accessing each element."
        },
        {
          id: 24,
          title: "Python Conditional Statements",
          description: "Fill in the missing comparison operator to check if `x` is greater than `y`.",
          code: `x = 10
      y = 5
      if x # Missing operator y:
          print("x is greater")`,
          solution: ">",
          explanation: "In Python, `>` is used to check if one value is greater than another."
        },
        {
          id: 25,
          title: "List Comprehension",
          description: "Fill in the missing list comprehension syntax to create a list of squares from 1 to 5.",
          code: `squares = # Missing list comprehension
      print(squares)  # Output: [1, 4, 9, 16, 25]`,
          solution: "[x**2 for x in range(1, 6)]",
          explanation: "List comprehension provides a concise way to create lists in Python. The syntax `[expression for item in iterable]` is used."
        },
        {
          id: 26,
          title: "Dictionaries in Python",
          description: "Fill in the missing code to access the value of the 'name' key in the dictionary.",
          code: `person = {"name": "Alice", "age": 25}
      name = # Missing code
      print(name)  # Output: Alice`,
          solution: "person['name']",
          explanation: "In Python dictionaries, key-value pairs are accessed using square brackets with the key inside, like `person['name']`."
        },
        {
          id: 27,
          title: "Exception Handling",
          description: "Fill in the missing keyword to catch a ZeroDivisionError exception.",
          code: `try:
          result = 10 / 0
      # Missing exception handling
          print("Cannot divide by zero")`,
          solution: "except ZeroDivisionError:",
          explanation: "Python uses `try` and `except` blocks to handle exceptions. `except ZeroDivisionError:` catches division by zero errors."
        },
        {
          id: 28,
          title: "Lambda Functions",
          description: "Fill in the missing keyword to create an anonymous function that doubles a number.",
          code: `double = # Missing lambda function
      print(double(5))  # Output: 10`,
          solution: "lambda x: x * 2",
          explanation: "The `lambda` keyword in Python is used to create anonymous functions. `lambda x: x * 2` defines a function that doubles `x`."
        },
        {
          id: 29,
          title: "File Handling",
          description: "Fill in the missing mode argument to open a file for reading.",
          code: `file = open("data.txt", # Missing mode)
      content = file.read()
      file.close()`,
          solution: "'r'",
          explanation: "`'r'` is the mode used for reading a file in Python. The `open` function requires a mode argument such as `'r'`, `'w'`, etc."
        },
        {
          id: 30,
          title: "Using map() Function",
          description: "Fill in the missing function name to apply `int` conversion to a list of strings.",
          code: `numbers = ["1", "2", "3"]
      int_numbers = list(map(# Missing function, numbers))
      print(int_numbers)  # Output: [1, 2, 3]`,
          solution: "int",
          explanation: "The `map` function applies a given function to all elements in an iterable. `map(int, numbers)` converts each string to an integer."
        }
    
  ];
  
  export default pythonQuestionsData;