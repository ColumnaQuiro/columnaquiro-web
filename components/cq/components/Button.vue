<template>
  <v-btn
    class="button"
    :disabled="disabled"
    :tag="tag"
    :block="block"
    :icon="icon"
    :variant="variant"
    :size="size"
    :to="to"
    :href="href"
    :color="color"
    @click="click"
  >
    <slot />
  </v-btn>
</template>
<script setup lang="ts">
interface Props {
  /**
   * Specify a custom tag used on the root element.
   */
  tag?: string,
  /**
   * Removes the ability to click or target the component
   */
  disabled?: boolean,
  /**
   * Expands the button to 100% of available space
   */
  block?: boolean,
  /**
   * Designates the button as icon. Button will become round and applies the text prop
   */
  icon?: boolean,
  /**
   * Denotes the target route of the link
   */
  to?: string,
  /**
   * Designates the component as anchor and applies the href attribute.
   */
  href?: string,
  /**
   * Applies one of 6 styles: elevated, flat, tonal, outlined, text, and plain.
   */
  variant?: string,
  /**
   * Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: x-small, small, default, large, and x-large.
   */
  size?: string,
  /**
   * Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))
   */
  color?: string
}

withDefaults(defineProps<Props>(), {
  tag: 'button',
  disabled: false,
  block: false,
  icon: false,
  text: false,
  size: 'default',
  variant: 'elevated',
  color: 'primary'
})

const emit = defineEmits<{(e: 'click'): void }>()

const click = () => {
  emit('click')
}
</script>
<style lang="scss" scoped>
.button {
  text-transform: none !important;
}
</style>
