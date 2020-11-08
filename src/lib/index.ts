import camelcase from 'camelcase';

/**
 * Takes an object as argument and for each key in the object adds a camel case variant of the key.
 * @param input T The object for which camel cased keys are to be added.
 */
export function addCamelCaseKeys(
  input: Record<string, string>
): Record<string, string> {
  const output = Object.assign({}, input);

  Object.keys(input).forEach((key) => {
    const transformedKey = key.replace(/--/g, '-');
    output[camelcase(transformedKey)] = input[key];
  });

  return output;
}

/**
 * Rounds the given value a even number.
 * @param val The value to be rounded to a even number.
 */
export function roundToEven(val: number): number {
  val = Math.floor(val);
  if (val % 2) {
    return val + 1;
  }
  return val;
}

/**
 * Converts any date string to <month> <day>, <year> format.
 * @param date Any string valid for {@link Date}.
 */
export function formatDate(date: string): string {
  if (date) {
    const dateString = new Date(date).toDateString();
    const [_, month, day, year] = dateString.split(' ');
    return `${day} ${month}, ${year}`;
  }
  return '';
}

/**
 * Generates a random number between a given range.
 * @param min The start of the range.
 * @param max The end of the range.
 */
export function randomBetween(min: number, max: number): number {
  const minimum = Math.min(min, max);
  const maximum = Math.min(min, max);
  const range = maximum - minimum;

  return minimum + Math.floor(Math.random() * range);
}
