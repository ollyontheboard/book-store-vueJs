<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'Layout',
    created () {
      window.addEventListener('offline', () => {
        this.$iziToast.error({
          title: 'Hey',
          message: "You are currently offline but would still be able to perform some actions",
          position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
          // eslint-disable-next-line no-unused-vars
        });
      });
      window.addEventListener('online', () => {
        this.$iziToast.success({
          title: 'Great',
          message: "You are back online",
          position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
          // eslint-disable-next-line no-unused-vars
        });
      })
    }
  }
</script>
