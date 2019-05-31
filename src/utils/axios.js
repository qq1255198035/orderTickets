import axios from 'axios'

export function ajaxPost(url, params,config) {
      return new Promise((resolve, reject) => {
            axios.post(url, params, config)
                  .then(response => {
                        resolve(response.data);
                  }, err => {
                        reject(err);
                  })
                  .catch((error) => {
                        reject(error)
                  })
      })
}
////返回一个Promise(发送get请求)
export function ajaxGet(url, param) {
      return new Promise((resolve, reject) => {
            axios.get(url, { params: param })
                  .then(response => {
                        resolve(response.data)
                  }, err => {
                        reject(err)
                  })
                  .catch((error) => {
                        reject(error)
                  })
      })
}