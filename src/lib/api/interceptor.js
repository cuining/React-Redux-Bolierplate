const interceptor = instance => {
  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  )

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  )

  return instance
}

export default interceptor
