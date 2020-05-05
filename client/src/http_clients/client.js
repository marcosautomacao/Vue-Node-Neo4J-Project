import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/client',
  json: true
})

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:8080/'
      }
    }).then(req => {
      return req.data
    })
  },
  async getClients () {
    return await this.execute('get', '/')
  },
  getClient (nome) {
    return this.execute('get', `/${nome}`)
  },
  createClient (data) {
    JSON.stringify(data)
    return this.execute('post', '/', data)
  },
  updateClient (data) {
    return this.execute('put', `/`, data)
  },
  deleteClient (nome) {
    return this.execute('delete', `/${nome}`)
  }
}