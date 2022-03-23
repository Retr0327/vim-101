"""very advanced age reader!!!"""


def first_step(name):
    print(f"Hello my name is {name}")


def second_step(age):
    print(f"My age is {age}")


def final_step(name, age):
    if age > 18:
        return print(f"{name}, you are young!")
    print(f"{name}, you are old")


def main():
    name = "lixing"
    age = 17

    first_step(name)
    second_step(age)
    final_step(name, age)


if __name__ == "__main__":
    main()
