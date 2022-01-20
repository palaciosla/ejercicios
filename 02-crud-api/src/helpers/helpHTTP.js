export const helpHTTP = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    //Manejo de errores cuando el  endpoint no responde
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if(!options.body)
  };

  const get = () => {};

  const post = () => {};

  const put = () => {};

  const del = () => {};

  return {
    get,
    post,
    put,
    del,
  };
};
