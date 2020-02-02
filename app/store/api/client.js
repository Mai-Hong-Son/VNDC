import fetch from './fetch_etag';
import config from '../../constant';

const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const baseUrl = config.api;
const defaultHeaders = {
  'Content-Type': 'application/json',
};

class Client {
  getOptions(options) {
    const newOptions = Object.assign({}, options);

    const headers = {
      ...defaultHeaders,
    };

    if (this.token) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`;
    }

    if (this.includeCookies) {
      newOptions.credentials = 'include';
    }

    if (newOptions.headers) {
      Object.assign(headers, newOptions.headers);
    }

    return {
      ...newOptions,
      headers,
    };
  }

  static doFetch = async (url, options) => {
    console.warn(url, this.getOptions(options));
    const {data} = await this.doFetchWithResponse(url, options);

    return data;
  };

  doFetchWithResponse = async (url, options) => {
    const urlFetch = baseUrl + url;
    console.warn(urlFetch, this.getOptions(options));
    const response = await fetch(urlFetch, this.getOptions(options));
    const headers = parseAndMergeNestedHeaders(response.headers);

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.log({
        message: 'Received invalid response from the server.',
        urlFetch,
      });
    }

    if (response.ok) {
      return {
        response,
        headers,
        data,
      };
    }

    const msg = data.message || '';

    if (this.logToConsole) {
      console.error(msg); // eslint-disable-line no-console
    }

    console.log(this.getUrl(), {
      message: msg,
      status_code: data.status_code,
      urlFetch,
    });
  };
}

function parseAndMergeNestedHeaders(originalHeaders) {
  const headers = new Map();
  let nestedHeaders = new Map();
  originalHeaders.forEach((val, key) => {
    const capitalizedKey = key.replace(/\b[a-z]/g, l => l.toUpperCase());
    let realVal = val;
    if (val && val.match(/\n\S+:\s\S+/)) {
      const nestedHeaderStrings = val.split('\n');
      realVal = nestedHeaderStrings.shift();
      const moreNestedHeaders = new Map(
        nestedHeaderStrings.map(h => h.split(/:\s/)),
      );
      nestedHeaders = new Map([...nestedHeaders, ...moreNestedHeaders]);
    }
    headers.set(capitalizedKey, realVal);
  });
  return new Map([...headers, ...nestedHeaders]);
}

export default Client;
