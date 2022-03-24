"""very advanced age reader!!!"""


def first_step():
    return input("Enter your name: ")


def second_step():
    line = input("My age is: ")
    return int(line)


def final_step(name, age):
    if age > 18:
        return print(f"{name}, you are young!")
    print(f"{name}, you are old")


def main():
    name = first_step()
    age = second_step()

    final_step(name, age)


if __name__ == "__main__":
    main()
