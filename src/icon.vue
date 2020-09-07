<template>
  <span class="w-icon" :style="wrapperStyle" :spin="this.spin">
    <slot></slot>
  </span>
</template>

<script>
import iconProps from './iconProps';
export default {
  name: 'w-icon',
  props: iconProps,
  computed: {
    wrapperStyle() {
      return {
        width: this.size,
        height: this.size,
        color: this.color,
      }
    }
  },
}
</script>
