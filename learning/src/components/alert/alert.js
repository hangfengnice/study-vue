import Notification from './notifications'

let messageInstance

function getMessageInstance() {
  return messageInstance || (messageInstance = Notification.newInstance())
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()
  instance.add({
    duration,
    content
  })
}

export default {
  info(options) {
    return notice(options)
  }
}
