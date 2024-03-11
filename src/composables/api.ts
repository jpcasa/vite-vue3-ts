import axios from 'axios'
import { useLoadingBar } from 'naive-ui'

/*
  Set up basic configuration for axios.
*/
export function setupApi() {
  const baseURL = `${import.meta.env.VITE_API_URL}`
  const apiOptions = { headers: { 'Auth-Token': '' } }
  const token = window.localStorage.getItem(import.meta.env.VITE_API_TOKEN_NAME)
  const loadingBar = useLoadingBar()

  // Set token if one exists
  if (token) apiOptions.headers['Auth-Token'] = token

  // Create axios instance
  const apiClient = axios.create({ baseURL, ...apiOptions })

  // helper to handle requests
  const handleRequest = async (requestPromise: any) => {
    loadingBar.start()
    try {
      const response = await requestPromise
      return [null, response.data]
    } catch (error) {
      console.error(error)
      return [error]
    } finally {
      loadingBar.finish()
    }
  }

  const handleRequestBackground = async (requestPromise: any) => {
    try {
      const response = await requestPromise
      return [null, response.data]
    } catch (error) {
      console.error(error)
      return [error]
    }
  }

  return { handleRequest, handleRequestBackground, apiClient, token }
}