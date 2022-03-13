/**
 *
 * @param {*} key
 * @return {*}
 */
export function getFromStorage(key) {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key));
  }
}

/**
 *
 * @param {*} key
 * @param {*} value
 */
export function pushToStorage(key, value) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * Function to clear localStorage.
 */
export function clearStorage() {
  if (typeof window !== "undefined") {
    window.localStorage.clear();
  }
}
