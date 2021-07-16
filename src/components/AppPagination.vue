<template>
  <div class="pagination">
    <button
      class="pagination__prev btn"
      v-if="activePage > 1 && pages > 1"
      @click="page -= 1"
    >
      <svg
        class="svg"
        x-description="Heroicon name: solid/chevron-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="rgba(107, 114, 128)"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <ul class="pagination__list">
      <li
        v-for="item in pages"
        :key="item"
        class="pagination__item btn"
        :class="{ active: item === activePage }"
        @click="page = item"
      >
        {{ item }}
      </li>
    </ul>
    <button
      class="pagination__next btn"
      @click="page += 1"
      v-if="activePage < pages"
    >
      <svg
        class="svg"
        x-description="Heroicon name: solid/chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="rgba(107, 114, 128)"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppPagination',
  data() {
    return {
      page: 1
    }
  },
  props: {
    pages: Number
  },
  computed: {
    ...mapState(['activePage'])
  },
  methods: {
    ...mapMutations(['setActivePage'])
  },
  watch: {
    page() {
      this.setActivePage(this.page)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  padding: 0;
}
.pagination__list {
  display: flex;
  margin: 0;
  padding: 0;
}
.btn {
  padding: 5px;
  cursor: pointer;
  border: 1px solid #bbbbbb;
  border-right: none;
  height: 35px;
  min-width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:last-child {
  border-right: 1px solid #bbbbbb;
}
.pagination__item {
  list-style: none;
}
.pagination__item.active {
  background: #cacaca;
}
.pagination__prev {
  border-radius: 3px 0 0 3px;
}
.pagination__next {
  border-right: 1px solid #bbbbbb;
  border-radius: 0 3px 3px 0;
}
.pagination__prev .svg,
.pagination__next .svg {
  width: 20px;
  height: 20px;
}
</style>
