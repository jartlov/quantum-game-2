<template>
  <svg :class="state" width="64" height="64">
    <path
      fill="#120223"
      d="M47.6 7.5H16.4c-5.2 0-9.4 4.2-9.4 9.4v31.2c0 5.2 4.2 9.4 9.4 9.4h31.2c5.2 0 9.4-4.2 9.4-9.4V16.9c0-5.2-4.2-9.4-9.4-9.4z"
      opacity=".4"
    />
    <path
      fill="#61DBEF"
      d="M47.6 7.5H16.4c-5.2 0-9.4 4.2-9.4 9.4v31.2c0 5.2 4.2 9.4 9.4 9.4h31.2c5.2 0 9.4-4.2 9.4-9.4V16.9c0-5.2-4.2-9.4-9.4-9.4zM53 48.1c0 3-2.4 5.4-5.4 5.4H16.4c-3 0-5.4-2.4-5.4-5.4V16.9c0-3 2.4-5.4 5.4-5.4h31.2c3 0 5.4 2.4 5.4 5.4v31.2z"
      opacity=".27"
    />
    <path
      fill="#61DBEF"
      d="M47.6 6.5h-.7V4H51V1H12v3h3.9v2.5C10.4 6.8 6 11.3 6 16.9v31.2c0 5.7 4.7 10.4 10.4 10.4h31.2c5.7 0 10.4-4.7 10.4-10.4V16.9c0-5.8-4.6-10.4-10.4-10.4zM57 48.1c0 5.2-4.2 9.4-9.4 9.4H16.4c-5.2 0-9.4-4.2-9.4-9.4V16.9c0-5.2 4.2-9.4 9.4-9.4h31.2c5.2 0 9.4 4.2 9.4 9.4v31.2z"
    />
    <path
      fill="#F0F"
      d="M51 1v3h-4.1v2.5h.7c5.7 0 10.4 4.7 10.4 10.4v31.2c0 5.7-4.7 10.4-10.4 10.4H16.4C10.7 58.5 6 53.8 6 48.1V16.9c0-5.6 4.4-10.1 9.9-10.4V4H12V1h39zm1-1H11v5h3.9v.6C9.3 6.3 5 11.1 5 16.9v31.2c0 6.3 5.1 11.4 11.4 11.4h31.2c6.3 0 11.4-5.1 11.4-11.4V16.9c0-6.2-4.9-11.3-11.1-11.4V5H52V0z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './Piece'
export default defineComponent({ props })
</script>
