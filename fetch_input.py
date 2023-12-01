import argparse
import os
import requests
import sys
import logging
import config


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s\t%(levelname)s\t%(message)s')


def main():
    logging.debug("Hello!")

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d', '--day', help='day of the advent of code', required=True, type=int)
    parser.add_argument(
        '-y', '--year', help='year of the advent of code', required=False, type=int)
    parser.add_argument('-s', '--session',
                        help='session token for advent of code', required=False, type=str)
    args = parser.parse_args()

    if args.year is None:
        if not hasattr(config, 'AOC_YEAR'):
            logging.error(
                'Please provide a year (either via command line or config.py)')
            sys.exit(1)
        else:
            args.year = config.AOC_YEAR

    if args.session is None:
        if not hasattr(config, 'AOC_SESSION'):
            logging.error(
                'Please provide a session token (either via command line or config.py)')
            sys.exit(1)
        else:
            args.session = config.AOC_SESSION

    logging.debug("Got all args: %s", args)

    url = f'https://adventofcode.com/{args.year}/day/{args.day}/input'
    headers = {'cookie': f'session={args.session}'}

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        directory = f'{args.year}/day{args.day}'
        os.makedirs(directory, exist_ok=True)
        file_path = f'{directory}/input.txt'
        with open(file_path, 'w') as f:
            f.write(response.text)
        logging.info(f'Input saved to {file_path}')
    elif response.status_code == 404:
        logging.warning(
            f'Input not found for day {args.day} (day not yet released?)')
    else:
        logging.error(f'Error fetching input: {response.status_code}')

    sys.exit(0)


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    main()
