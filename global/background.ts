import { onMounted } from "vue"
import $ from "jquery"

export const setBackground = (color: string) => {
    onMounted(() => {
        $("body").css("background-color", color)
    })
}
