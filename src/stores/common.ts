import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const isCollapse = ref(false)

  const handleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, handleCollapse }
})
