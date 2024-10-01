import { reactive } from "vue"
import type { Project } from "~/types"

export const store = reactive({
    projects: [] as Project[],
    modal: false,
})
