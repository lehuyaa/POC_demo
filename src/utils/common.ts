import { BASE_URL } from "config";

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const parseJson = (str?: string | null) => {
  if (!str) return null;
  try {
    const data = JSON.parse(str);
    return data;
  } catch (err) {
    return null;
  }
};

/**
 * Add query to url, preserve old query, overriding can happen when `query` contains
 * key that is already in the url
 * @param strict Should exclude null/undefined value or not
 * @returns url after properly adding query
 */
export const addQueryToURL = (
  url: string,
  query: Record<string, any>,
  strict = false
) => {
  const newURL = new URL(url);
  Object.keys(query)
    .filter((key) =>
      strict ? query[key] !== null && query[key] !== undefined : true
    )
    .forEach((key) => newURL.searchParams.set(key, query[key]));

  return newURL.toString();
};

/**
 * Replace current pathname with newPath, returns replaced url
 */
export const replacePathName = (url: string, newPath: string) => {
  const newURL = new URL(url);
  newURL.pathname = newPath;

  return newURL.toString();
};

/**
 *
 * @param key
 * @param arr
 * @returns string
 */
export const parameterizeArray = (key: string, arr?: string[]): string => {
  if (!arr || (arr && arr.length === 0)) return "";
  arr = arr.map(encodeURIComponent);
  return "&" + key + "=" + arr.join("&" + key + "=");
};

const handleCallback = (
  e: MessageEvent<any>,
  resolvedCallback: (event: MessageEvent<any>) => void
) => {
  if (e.origin !== BASE_URL || e.data?.target?.includes("metamask")) {
    return;
  }
  resolvedCallback(e);
};

export const openNewWindow = (
  url: string,
  name = "_blank",
  onReceiveMessage: (event: MessageEvent<any>) => void
) => {
  let windowObjectReference = null;

  // remove any existing event listeners
  window.removeEventListener("message", (e) =>
    handleCallback(e, onReceiveMessage)
  );

  // window features
  windowObjectReference = window.open(
    url,
    name,
    "width=480,height=720,left=99999,top=10"
  );
  windowObjectReference?.focus();

  // add the listener for receiving a message from the popup
  window.addEventListener(
    "message",
    (e) => handleCallback(e, onReceiveMessage),
    false
  );
};
