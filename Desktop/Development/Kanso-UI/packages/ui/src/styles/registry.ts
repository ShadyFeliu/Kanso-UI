const registry = new Map<string, string>();
const inserted = new Set<string>();

export const registerStyles = (id: string, css: string): void => {
  registry.set(id, css);

  if (typeof document === 'undefined') {
    return;
  }

  if (inserted.has(id)) {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('data-kanso-ui', id);
  style.textContent = css;
  document.head.append(style);
  inserted.add(id);
};

export const getRegisteredStyles = (): ReadonlyMap<string, string> => registry;

