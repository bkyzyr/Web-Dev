class Animal:
    def __init__(self, name, species, age):
        self.name = name
        self.species = species
        self.age = age

    def make_sound(self):
        return "Some generic animal sound"

    def describe(self):
        return f"{self.name} is a {self.age}-year-old {self.species}."

    def __str__(self):
        return f"Animal: {self.name} ({self.species})"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, species="Dog", age=age)
        self.breed = breed

    def make_sound(self):
        return "Woof! Woof!"

    def fetch(self):
        return f"{self.name} is playing with ball!"


class Cat(Animal):
    def __init__(self, name, age, indoor=True):
        super().__init__(name, species="Cat", age=age)
        self.indoor = indoor

    def make_sound(self):
        return "Meow..."