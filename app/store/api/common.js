import {create} from 'apisauce';
import qs from 'qs';
import config from 'app/store/constant';

export const API = create({baseURL: config.api, timeout: config.TIMEOUT});
// urlencode object to string
API.addRequestTransform(request => {
  if (request.method === 'get') {
    if (request.params instanceof Object) {
      if (request.url.indexOf('?') > 0) {
        request.url += '&' + qs.stringify(request.params);
      } else {
        request.url += '?' + qs.stringify(request.params);
      }

      request.params = null;
    }
  }
  delete request.headers['content-length'];

  return request;
});

// token wrapper
export const withToken = (token, request, ...args) => {
  if (args.length === 1) {
    // api.get(‘/path’)
    args.push(null);
    args.push({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request(...args);
  }

  if (args.length === 2) {
    // api.get(‘/path’, params)
    args.push({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request(...args);
  }

  if (args.length === 3) {
    // overide
    const newArgs = {
      ...args,
      headers: {
        ...args,
        Authorization: `Bearer ${token}`,
      },
    };

    return request(...newArgs);
  }

  return request(...args);
};
