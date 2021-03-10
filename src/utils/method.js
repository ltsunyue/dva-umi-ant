
export function addinternal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function acquire(name) {
  if(localStorage.getItem(name)=== 'undefined') return null;
  return JSON.parse(localStorage.getItem(name));
}

export function removeItem(name) {
  localStorage.removeItem(name);
}
