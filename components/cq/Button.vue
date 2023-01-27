<template>
  <v-btn
    :disabled="disabled"
    :type="type"
    :block="block"
    :icon="icon"
    :text="text"
    :small="small"
    :x-small="xSmall"
    :to="to"
    :href="href"
    :color="color"
    depressed
    @click="click"
  >
    <slot />
  </v-btn>
</template>
<script setup lang="ts">
interface Props {
  /**
   * Set the button’s type attribute
   */
  type?: string,
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
   * Makes the background transparent. When using the color prop, the color will be applied to the button text instead of the background
   */
  text?: boolean,
  /**
   * Makes the component small
   */
  small?: boolean,
  /**
   * Makes the component x-small
   */
  xSmall?: boolean,
  /**
   * Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))
   */
  color?: string
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  block: false,
  icon: false,
  text: false,
  small: false,
  xSmall: false,
  color: 'primary'
})

const emit = defineEmits<{(e: 'click'): void }>()

const click = () => {
  emit('click')
}
</script>
