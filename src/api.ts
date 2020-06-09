import { FieldType } from '@grafana/data';

/*
Add params to given url
*/
export function addParams(url, params) {
  url += !url.includes('?') ? '?' : '&';
  return url + $.param(params);
}

/*
Infer type from the key and fallback to checking first value
*/
export function getType(key, values) {
  let keyLower = key.toLowerCase();
  if (FieldType[keyLower]) {
    return FieldType[keyLower];
  }
  if (keyLower.includes(':')) {
    return FieldType[key.split(':')[1]];
  }
  return typeof values[0];
}

export async function fetchJson(url, authHeader) {
  let headers = {
    'Content-Type': 'application/json',
  };
  if (authHeader) {
    headers['Authorization'] = authHeader;
  }
  return fetch(url, { headers: headers });
}

export async function fetchResource(url, authHeader) {
  return fetchJson(url, authHeader)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      return data;
    });
}
