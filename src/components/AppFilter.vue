<template>
  <div class="filter">
    <div class="filter__title">Filter:</div>
    <div class="filter__box">
      <select v-model="type">
        <option disabled value="">Select type</option>
        <option v-for="item in filterFields" :value="item.type" :key="item">
          {{ item.field }}
        </option>
      </select>
      <input type="text" v-model="value" :disabled="!isSelectType" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  emits: {
    filter: null
  },
  data() {
    return {
      type: '',
      value: ''
    }
  },
  props: {
    filterFields: Array
  },
  computed: {
    isSelectType() {
      return this.type ? true : false
    }
  },
  watch: {
    value() {
      if (this.type) {
        this.$emit('filter', this.type, this.value)
      }
    },
    type() {
      this.value = ''
      this.$emit('filter', this.type, this.value)
      // this.setActivePage(1)
    }
  }
}
</script>

<style scoped>
.filter {
  margin-top: 40px;
  margin-bottom: 40px;
}
.filter__title {
  margin-bottom: 10px;
  text-align: left;
}
.filter__box {
  display: flex;
}
select {
  border-color: #7676764d;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 20px;
}
input {
  border-color: #7676764d;
  outline-color: transparent;
  border-radius: 3px;
}
</style>
