const API_ENDPOINT = '/api/'

const configObj = (method) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
}
export const getRequest = (url) => fetch(API_ENDPOINT + url, configObj("GET"))
  .then(response => response.json())

const configObjWithBody = (method, body) => {
  return { ...configObj(method), body: JSON.stringify(body) }
}
export const postRequest = (url, body) => fetch(API_ENDPOINT + url, configObjWithBody("POST", body))
  .then(response => response.json())