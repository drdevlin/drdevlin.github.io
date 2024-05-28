const call = (...fns) => {
  fns.forEach((fn) => fn());
};

const get = (className) => {
  return Array.from(document.getElementsByClassName(className));
};

const shrink = (className) => () => {
  const elements = get(className);
  elements.forEach((element) => {
    element.style.transform = 'scale(0)';
  });
};

const reset = (className) => () => {
  const elements = get(className);
  elements.forEach((element) => {
    element.style.transform = 'translateX(0)';
  });
};

const show = (className) => () => {
  const elements = get(className);
  elements.forEach((element) => {
    element.style.opacity = 1;
  });
};

document.body.addEventListener('click', () => call(shrink('title-card'), reset('project'), show('bayes')), { once: true });
