---
title: "Switch To Linux Already"
date: "2024-11-05"
author: "Gokul P Bharathan"
synopsis: "smh why do you need a synopsis for this ?"
---


Python is a high-level, interpreted programming language known for its readability and versatility. It is widely used in web development, data science, artificial intelligence, and scientific computing.

## Variables and Data Types

```python
# Defining variables
x = 10  # Integer
y = 3.14  # Float
name = "Python"  # String
is_cool = True  # Boolean

# Printing variables
def display_variables():
    print(f"x: {x}, y: {y}, name: {name}, is_cool: {is_cool}")

display_variables()
```

## Conditional Statements

```python
num = 10
if num > 0:
    print("Positive number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")
```

## Loops

### For Loop
```python
for i in range(5):
    print(f"Iteration {i}")
```

### While Loop
```python
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1
```

## Functions

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

## Lists

```python
fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Orange")
print(fruits)
```

## Dictionaries

```python
person = {"name": "Alice", "age": 25, "city": "New York"}
print(person["name"])
```

## Classes and Objects

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"My name is {self.name} and I am {self.age} years old."

person1 = Person("Bob", 30)
print(person1.introduce())
```

## File Handling

```python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, Python!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

## Exception Handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

Python provides extensive libraries and frameworks for different applications, making it one of the most powerful programming languages today!


