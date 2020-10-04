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
