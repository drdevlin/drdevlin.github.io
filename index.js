const call = (...fns) => {
  fns.forEach((fn) => fn());
};

const get = (className) => {
  return Array.from(document.getElementsByClassName(className));
};

const hide = (className) => () => {
  const elements = get(className);
  elements.forEach((element) => {
    element.style.display = 'none';
  });
};

const show = (className) => () => {
  const elements = get(className);
  elements.forEach((element) => {
    element.style.display = 'block';
  });
};

document.body.addEventListener('click', () => call(hide('title'), show('preview')), { once: true });
