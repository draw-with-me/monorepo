export function dtoMapper<S extends object, T extends object>(
  source: Class<S>,
  target: T
): S {
  const pojoObject = new source();
  for (const key in Object.keys(pojoObject)) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      continue;
    }

    const value = target[key as keyof T];
    if (typeof value === 'object') {

    }
    pojoObject[key] = target[key];
  }
  return pojoObject;
}

export type Class<T> = new () => T;
