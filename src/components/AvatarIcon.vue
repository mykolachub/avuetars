<template>
  <svg
    :viewBox="`0 0 ${$options.SIZE} ${$options.SIZE}`"
    fill="none"
    role="img"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="$options.SIZE"
      :height="$options.SIZE"
    >
      <rect
        :width="$options.SIZE"
        :height="$options.SIZE"
        fill="#FFFFFF"
        :rx="roundness ? 160 : 0"
      />
    </mask>
    <g mask="url(#mask)" v-html="content"></g>
  </svg>
</template>

<script>
import Avatar from '@/lib/avatar';

export default {
  props: {
    width: {
      type: Number, // 48px
    },
    height: {
      type: Number,
    },
    density: {
      type: Number,
    },
    type: {
      type: String, // grid
    },
    colors: {
      type: Array,
    },
    roundness: {
      type: Boolean, // true
    },
  },

  SIZE: 80,

  data() {
    return {
      content: '',
    };
  },

  created() {
    const { width, height, type, colors, roundness, density } = this;
    const avatar = new Avatar(width, height, type, colors, roundness, density);
    this.content = avatar.generate();
  },
};
</script>

<style></style>
