type PlainObject = Record<string | number | symbol, unknown>;

const isPlainObject = (value: unknown): value is PlainObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const deepMerge = <T extends PlainObject, U extends PlainObject>(
  base: T,
  overrides: U
): T & U => {
  const result: PlainObject = { ...base };

  Object.entries(overrides).forEach(([key, value]) => {
    if (value === undefined) {
      return;
    }

    const baseValue = result[key];

    if (isPlainObject(baseValue) && isPlainObject(value)) {
      result[key] = deepMerge(baseValue as PlainObject, value as PlainObject);
      return;
    }

    result[key] = value;
  });

  return result as T & U;
};

export const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

