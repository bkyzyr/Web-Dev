from models import Dog, Cat 

buddy = Dog("Buddy", 3, "Golden Retriever")
mittens = Cat("Mittens", 2, indoor=True)
animals = [buddy, mittens]

print("Animal Profiles")
for animal in animals:
    print(animal.describe())
    print(f"Sound: {animal.make_sound()}")
    print("-" * 20)

print(buddy.fetch())