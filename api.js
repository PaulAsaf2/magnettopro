import { inputList } from './constants.js'

export function sendData() {
  const name = inputList[0].value
  const email = inputList[1].value
  const phone = inputList[2].value
  const telegram = inputList[3].value
  const url = 'https://bitrix.magnetto.pro/rest/381/80gybht7e43gzxpr/crm.lead.add'
  const data = {
    fields: {
      TITLE: 'Лид из бота webapp',
      NAME: name,
      EMAIL: [{ VALUE: email }],
      PHONE: [{ VALUE: phone }],
      COMMENTS: `Ник Telegram: ${telegram}`,
    }
  }
  const params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  return fetch(url, params)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`)
      }
    })
    .catch(err => { throw err })
}