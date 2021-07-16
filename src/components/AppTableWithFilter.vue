<template>
  <div v-if="records.length !== 0">
    <app-filter :filterFields="filterFields" @filter="setFilterData" />
    <app-table :columns="columns" :records="paginatedRecords" />
    <app-pagination :pages="pages" />
  </div>
  <app-loader v-else />
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppFilter from '@/components/AppFilter.vue'
import AppTable from '@/components/AppTable.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppLoader from '@/components/AppLoader'

export default {
  name: 'AppTableWithFilter',
  components: {
    AppFilter,
    AppTable,
    AppPagination,
    AppLoader
  },
  props: {
    filterFields: Object,
    columns: Array,
    records: Array,
    pageSize: Number
  },
  data() {
    return {
      type: null,
      value: null
    }
  },
  computed: {
    ...mapState(['activePage']),
    filteredRecords() {
      if (!this.type && !this.value) return this.records

      return this.records.filter((item) => {
        const str = String(item[this.type]).toLowerCase()
        return str.indexOf(this.value.toLowerCase()) !== -1
      })
    },
    pages() {
      return this.filteredRecords
        ? Math.ceil(this.filteredRecords.length / this.pageSize)
        : null
    },
    startIndex() {
      return (this.activePage - 1) * this.pageSize
    },
    endIndex() {
      return this.activePage * this.pageSize
    },
    paginatedRecords() {
      return this.filteredRecords.slice(this.startIndex, this.endIndex)
    }
  },
  methods: {
    ...mapMutations(['setActivePage']),
    setFilterData(type, value) {
      this.type = type
      this.value = value
      this.setActivePage(1)
    }
  },
  watch: {
    paginatedRecords() {
      if (this.paginatedRecords.length === 0 && this.activePage > 1) {
        this.setActivePage(this.activePage - 1)
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
