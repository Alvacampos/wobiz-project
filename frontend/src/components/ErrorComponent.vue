<template>
  <div class="error-msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.error-msg {
  background-color: #e85837;
  border: none;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  margin: 5px 15px;
  width: 26.5vw;
  height: 35px;
}

p {
  padding: 0;
  margin: 0 10px;
}

@media only screen and (max-width: 990px) {
  .error-msg {
    width: 43vw;
  }
}
@media only screen and (max-width: 770px) {
  .error-msg {
    width: 84.5vw;
  }
}
</style>
