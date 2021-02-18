interface Properties {
  prefix?: string;
  css: {
    [key: string]: string;
  };
}

function setProperties(node: HTMLElement, properties: Properties) {
  Object.entries(properties.css).forEach(([name, value]) => {
    node.style.setProperty(`--${properties.prefix ?? "sv"}-${name}`, value);
  });
}

export function cssVariables(node: HTMLElement, properties: Properties) {
  setProperties(node, properties);
  return {
    update(properties: Properties) {
      setProperties(node, properties);
    },
  };
}
