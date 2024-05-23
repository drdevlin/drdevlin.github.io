// State
let activeOverlay = 0;
const setActiveOverlay = (index) => () => {
  overlays[activeOverlay].style.opacity = 0;
  activeOverlay = index;
  overlays[activeOverlay].style.opacity = 1;
  overlayDescription.innerText = descriptions[index];
  overlayDescription.style.color = `var(${descriptionColors[index]})`;
};

// Bayes's Theorem (sort of)
const probOfHgivenE = (eh, enh) => (
  Math.round(((eh.clientWidth * eh.clientHeight) / ((eh.clientWidth * eh.clientHeight) + (enh.clientWidth * enh.clientHeight))) * 100)
);

// Elements
const el = (id) => document.getElementById(id);

const html = document.querySelector('html');
const themeSwitch = el('theme-switch');
const all = el('all');
const ph = el('PH');
const pnh = el('PnH');
const phStartSlot = el('PH-start');
const phEndSlot = el('PH-end');
const pnhStartSlot = el('PnH-start');
const pnhEndSlot = el('PnH-end');
const phOverlay = el('PH-overlay');
const pnhOverlay = el('PnH-overlay');
const peghOverlay = el('PEgH-overlay');
const pegnhOverlay = el('PEgnH-overlay');
const phValue = el('PH-value');
const pnhValue = el('PnH-value');
const peghValue = el('PEgH-value');
const pegnhValue = el('PEgnH-value');
const phgeValue = el('PHgE-value');
const phButton = el('PH-button');
const pnhButton = el('PnH-button');
const peghButton = el('PEgH-button');
const pegnhButton = el('PEgnH-button');
const phgeButton = el('PHgE-button');
const overlayDescription = el('overlay-description');

const peOverlays = {
  style: {
    set opacity(value) {
      const classAction = value ? 'add' : 'remove';
      peghOverlay.classList[classAction]('justE');
      pegnhOverlay.classList[classAction]('justE');
      peghOverlay.style.opacity = value;
      pegnhOverlay.style.opacity = value;
    }
  }
};

const overlays = [phOverlay, pnhOverlay, peghOverlay, pegnhOverlay, peOverlays];
const descriptions = [
  'Chance of the hypothesis being true, at all.',
  'Chance of the hypothesis being false, at all.',
  'Chance of the evidence being true, assuming the hypothesis is true.',
  'Chance of the evidence being true, assuming the hypothesis is false.',
  'Chance of the hypothesis being true, given that the evidence is true.',
];
const descriptionColors = [
  '--sl-color-orange-500',
  '--sl-color-primary-500',
  '--sl-color-orange-300',
  '--sl-color-primary-300',
  '--sl-color-teal-500',
];
setActiveOverlay(0)();

// Priority Actions
if (html.classList.contains('sl-theme-light')) themeSwitch.setAttribute('checked', '');

// Mutation Observers
//// Theme Switch
const flipThemeSwitch = (mutations) => {
  const [mutation] = mutations;
  const isChecked = mutation.target.getAttribute('checked') !== null;
  if (isChecked) {
    html.classList.remove('sl-theme-dark');
    html.classList.add('sl-theme-light');
    return;
  }
  html.classList.remove('sl-theme-light');
  html.classList.add('sl-theme-dark');
};
const themeSwitchObserver = new MutationObserver(flipThemeSwitch);
themeSwitchObserver.observe(themeSwitch, {
  attributeFilter: ['checked'],
});

//// All
const resizeHandNotHOverlays = ([mutation]) => {
  const position = mutation.target.getAttribute('position');

  // Resize width
  phOverlay.style.width = position + '%';
  pnhOverlay.style.width = (100 - position) + '%';
  peghOverlay.style.width = position + '%';
  pegnhOverlay.style.width = (100 - position) + '%';

  // Display value
  phValue.innerText = Math.round(position) + '%';
  pnhValue.innerText = Math.round(100 - position) + '%';
  phgeValue.innerText = probOfHgivenE(peghOverlay, pegnhOverlay) + '%';

  // Match border radius when full width
  const borderRadius = Number(position) === 100 ? 'var(--sl-border-radius-large)' : 'unset';
  phOverlay.style.borderTopRightRadius = borderRadius;
  phOverlay.style.borderBottomRightRadius = borderRadius;
  peghOverlay.style.borderBottomRightRadius = borderRadius;
  peghOverlay.style.borderTopRightRadius = Number(ph.getAttribute('position')) === 0 ? borderRadius : 'unset';

  const inverseBorderRadius = Number(position) === 0 ? 'var(--sl-border-radius-large)' : 'unset';
  pnhOverlay.style.borderTopLeftRadius = inverseBorderRadius;
  pnhOverlay.style.borderBottomLeftRadius = inverseBorderRadius;
  pegnhOverlay.style.borderBottomLeftRadius = inverseBorderRadius;
  pegnhOverlay.style.borderTopLeftRadius = Number(pnh.getAttribute('position')) === 0 ? inverseBorderRadius : 'unset';
};
const allObserver = new MutationObserver(resizeHandNotHOverlays);
allObserver.observe(all, {
  attributeFilter: ['position'],
});

//// PH
const resizePEGHOverlay = ([mutation]) => {
  const position = mutation.target.getAttribute('position');

  // Resize height
  peghOverlay.style.height = (100 - position) + '%';

  // Display value
  phgeValue.innerText = probOfHgivenE(peghOverlay, pegnhOverlay) + '%';
  peghValue.innerText = Math.round(100 - position) + '%';

  // Match border radius when full height
  const borderRadius = Number(position) === 0 ? 'var(--sl-border-radius-large)' : 'unset';
  peghOverlay.style.borderTopLeftRadius = borderRadius;
  peghOverlay.style.borderTopRightRadius = Number(all.getAttribute('position')) === 100 ? borderRadius : 'unset';
};
const phObserver = new MutationObserver(resizePEGHOverlay);
phObserver.observe(ph, {
  attributeFilter: ['position'],
});

//// PnH
const resizePEGNHOverlay = ([mutation]) => {
  const position = mutation.target.getAttribute('position');

  // Resize height
  pegnhOverlay.style.height = (100 - position) + '%';

  // Display value
  phgeValue.innerText = probOfHgivenE(peghOverlay, pegnhOverlay) + '%';
  pegnhValue.innerText = Math.round(100 - position) + '%';

  // Match border radius when full height
  const borderRadius = Number(position) === 0 ? 'var(--sl-border-radius-large)' : 'unset';
  pegnhOverlay.style.borderTopRightRadius = borderRadius;
  pegnhOverlay.style.borderTopLeftRadius = Number(all.getAttribute('position')) === 0 ? borderRadius : 'unset';
};
const pnhObserver = new MutationObserver(resizePEGNHOverlay);
pnhObserver.observe(pnh, {
  attributeFilter: ['position'],
});

// Event Listeners
//// Slots
phStartSlot.addEventListener('click', setActiveOverlay(0));
phEndSlot.addEventListener('click', setActiveOverlay(2));
pnhStartSlot.addEventListener('click', setActiveOverlay(1));
pnhEndSlot.addEventListener('click', setActiveOverlay(3));

//// Overlay Buttons
phButton.addEventListener('click', setActiveOverlay(0));
phButton.addEventListener('mouseover', setActiveOverlay(0));
pnhButton.addEventListener('click', setActiveOverlay(1));
pnhButton.addEventListener('mouseover', setActiveOverlay(1));
peghButton.addEventListener('click', setActiveOverlay(2));
peghButton.addEventListener('mouseover', setActiveOverlay(2));
pegnhButton.addEventListener('click', setActiveOverlay(3));
pegnhButton.addEventListener('mouseover', setActiveOverlay(3));
phgeButton.addEventListener('click', setActiveOverlay(4));
phgeButton.addEventListener('mouseover', setActiveOverlay(4));
