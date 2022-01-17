import { ref, Ref } from "vue"

export const useReachBottom = (
  elRef: Ref<Nullable<HTMLElement>>,
  offsetHeight: number = 0,
) => {
  const isReachBottom = ref<boolean>(false)

  if (elRef.value !== null) {
    const { scrollHeight, scrollTop, clientHeight } = elRef.value

    isReachBottom.value = scrollHeight - scrollTop - clientHeight < offsetHeight
  }

  return {
    isReachBottom,
  }
}
