export default function renameFunc(func, name) {
  /* eslint-disable no-param-reassign */
  Object.defineProperty(func, 'name', { writable: true });
  func.name = name;
  Object.defineProperty(func, 'name', { writable: false });

  func.displayName = name;

  /* eslint-enable no-param-reassign */
  return func;
}
