type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

const toArray = (value: ClassValue): Array<string | number> => {
  if (Array.isArray(value)) {
    return value.flatMap(toArray);
  }

  if (value && typeof value === 'object') {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className);
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return [value];
  }

  return [];
};

export const cx = (...values: ClassValue[]): string =>
  values.flatMap(toArray).filter(Boolean).join(' ');

