input = None

with open('input.txt') as f:
    input = f.read()


# region part_one
def part_one():
    lines = input.splitlines()

    ans = 0

    for line in lines:
        x = str()

        for char in line:
            if char.isdigit():
                x += char
                break

        for char in reversed(line):
            if char.isdigit():
                x += char
                break

        ans += int(x)

    return ans
# endregion part_one


# region part_two
def part_two():
    words_to_digits = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }

    lines = input.splitlines()

    ans = 0

    for line in lines:

        new_line = str()
        new_line_reversed = str()

        for char in line:
            new_line += char
            for key in words_to_digits.keys():
                if key in new_line:
                    new_line = new_line.replace(key, words_to_digits[key])

        for char in line[::-1]:
            new_line_reversed += char
            for key in words_to_digits.keys():
                if key[::-1] in new_line_reversed:
                    new_line_reversed = new_line_reversed.replace(
                        key[::-1], words_to_digits[key])

        x = str()

        for char in new_line:
            if char.isdigit():
                x += char
                break

        for char in new_line_reversed:
            if char.isdigit():
                x += char
                break

        ans += int(x)

    return ans
# endregion part_two


def main():
    print(f"Soltuion for part one: {part_one()}")
    print(f"Soltuion for part two: {part_two()}")


if __name__ == "__main__":
    main()
