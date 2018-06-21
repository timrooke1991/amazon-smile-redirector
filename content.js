const amazon = /amazon/;
const smile = /(smile)|(aws)/;
const domain = window.location.href.toString().split('/')[2];

if (amazon.test(domain) && !smile.test(domain)) {
  const urlParts = window.location.href.toString().split('/');
  // if (/smile.amazon/.test(urlParts[2])) return;
  const splitDomain = urlParts[2].split('.');
  splitDomain.shift();
  urlParts[2] = '//smile.' + splitDomain.join('.');
  chrome.extension.sendRequest({ redirect: urlParts.join('/') }); // send message to redirect
}