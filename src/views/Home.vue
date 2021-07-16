<template>
  <div class="home">
    <div class="container">
      <app-table-with-filter
        :filterFields="filterFields"
        :columns="columns"
        :records="records"
        :pageSize="pageSize"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppTableWithFilter from '@/components/AppTableWithFilter.vue'

export default {
  name: 'Home',
  components: {
    AppTableWithFilter
  },
  data() {
    return {
      pageSize: 6
    }
  },
  mounted() {
    this.loadRecords()
    this.loadColumns()
  },
  computed: {
    ...mapState(['records', 'columns', 'activePage']),
    filterFields() {
      return this.columns.filter((i) => i.type !== 'id')
    }
  },
  methods: {
    ...mapActions(['loadRecords', 'loadColumns'])
  }
}
</script>

<style></style>
