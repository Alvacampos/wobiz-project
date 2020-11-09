<template>
  <input
    :type="inputType"
    :placeholder="planceHolder"
    :value="userData"
    @change="updateData"
  />
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    planceHolder: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    userData: {
      type: String,
      requied: false
    }
  },
  methods: {
    updateData(data) {
      this.$emit("dataInput", data.target.value);
    }
  }
};
</script>

<style lang="css" scoped>
input {
  border: 1px solid #ced4da;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  width: 25vw;
}
@media only screen and (max-width: 990px) {
  input {
    width: 40vw;
  }
}
@media only screen and (max-width: 770px) {
  input {
    width: 80vw;
  }
}
</style>
