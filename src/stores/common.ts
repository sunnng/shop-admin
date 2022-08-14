import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('common', () => {
  const isCollapse = ref(false)

  const handleCollapse = () => {
    isCollapse.value = !isCollapse.value
    console.log(isCollapse.value)
  }

  return { isCollapse, handleCollapse }
})
