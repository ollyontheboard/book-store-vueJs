/* eslint-disable no-console */

import { register } from 'register-service-worker'

// if (process.env.NODE_ENV === 'production') {
if (process.env.NODE_ENV) {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('pwa has been updated')
    },
    offline () {
      this.$iziToast.info({
        title: 'Hey',
        message: 'No internet connection found. App is running in offline mode.',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    },
    error (error) {
      console.error('Error during service worker registration:', error)
      this.$iziToast.error({
        title: 'Hey',
        message: 'Error during service worker registration:',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    }
  })
}
