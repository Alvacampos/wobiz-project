<template>
  <button :class="compClass" @click="$emit('btn-press', true)">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    compClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.button-signin {
  height: 45px !important;
  text-transform: none !important;
  font-weight: 700 !important;
  cursor: pointer;
  background-color: #1bb8e3;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  min-height: 35px;
  border: none;
  width: 26.6vw;
  margin: 5px 15px;
  color: #fff;
}
.signup {
  position: absolute;
  top: 40px;
  right: 60px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #163a49;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  padding: 0 16px;
  min-height: 35px;
  font-weight: 600;
}
@media only screen and (max-width: 990px) {
  .button-signin {
    width: 43vw;
  }
}
@media only screen and (max-width: 770px) {
  .button-signin {
    width: 84vw;
  }
}
</style>
