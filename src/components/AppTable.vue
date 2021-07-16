<template>
  <div class="table">
    <table>
      <tbody>
        <tr>
          <th v-for="(item, i) in columns" :key="i">{{ item.field }}</th>
        </tr>
        <tr v-for="(item, ind) in records" :key="ind">
          <td v-for="(item, i) in records[ind]" :key="i">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  props: {
    columns: Array,
    records: Array
  }
}
</script>

<style scoped>
.table {
  margin-bottom: 40px;
  min-height: 266px;
}
.table table {
  border-collapse: collapse;
}
.table tr:nth-of-type(1) {
  background: #cfcfcf;
}
.table tr:nth-of-type(2n + 1) {
  background: #ebeaea;
}
.table td {
  padding: 10px 15px;
}
.table th {
  padding: 10px 15px;
}
</style>
