const BASE_URL = 'https://test-task-j.herokuapp.com/data'

async function fetchStudents(url = '', config = {}) {
  const response = await fetch(url, config)
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'))
}

export function fetchStudentsData(page, size) {
  // if (!page) {
  //   page = 1
  // }
  return fetchStudents(`${BASE_URL}?page=${page}&size=${size}`)
}
