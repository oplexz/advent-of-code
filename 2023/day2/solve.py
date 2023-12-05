import re

input = None

with open('input.txt') as f:
    input = f.read()

lines = input.splitlines()


# region part_one
def part_one():
    ans = 0

    for line in lines:
        game_ok = True

        # Game 1: 1 blue, 1 red; 10 red; 8 red, 1 blue, 1 green; 1 green, 5 blue
        game_id = int(re.search(
            r'Game (\d{1,})', line).group(1))

        sets = re.findall(r'(\d{1,}) (\w{3,})', line)

        for set in sets:
            x = int(set[0])
            color = set[1]

            if color == 'red' and x > 12 or color == 'green' and x > 13 or color == 'blue' and x > 14:
                game_ok = False
                break

        if game_ok:
            ans += game_id

    return ans
# endregion part_one


# region part_two
def part_two():
    ans = 0

    for line in lines:
        min_red, min_green, min_blue = 0, 0, 0

        sets = re.findall(r'(\d{1,}) (\w{3,})', line)

        for set in sets:
            x = int(set[0])
            color = set[1]

            match color:
                case 'red':
                    if x > min_red:
                        min_red = x

                case 'green':
                    if x > min_green:
                        min_green = x

                case 'blue':
                    if x > min_blue:
                        min_blue = x

        power = min_red * min_green * min_blue

        ans += power

    return ans
# endregion part_two


def main():
    print(f"Soltuion for part one: {part_one()}")
    print(f"Soltuion for part two: {part_two()}")


if __name__ == "__main__":
    main()
