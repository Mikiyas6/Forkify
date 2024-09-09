// helper.js
import { TIMEOUT_SEC } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Indicates that the request body will be JSON
          },
          body: JSON.stringify(uploadData), //Converts the uploadData object to JSON string
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();
    if (!res.ok) {
      const errorMessage = data.message || 'An error occurred';
      throw new Error(`${errorMessage} (${res.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
