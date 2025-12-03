import { useState } from 'react';

export const useFetch = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, options) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(baseUrl + url, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
      });
      if (!res.ok) throw new Error('Lỗi');
      return res.json();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const get = (url) => request(url, { method: 'GET' });
  const post = (url, data: any) => request(url, { method: 'POST', body: JSON.stringify(data) });
  const put = (url, data: any) => request(url, { method: 'PUT', body: JSON.stringify(data) });
  const del = (url) => request(url, { method: 'DELETE' });

  return { isLoading, error, get, post, put, del };
};
