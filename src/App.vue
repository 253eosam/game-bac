<template>
  <AppHeader/>
  <router-view v-slot="{ Component }">
      <transition name="bounce">
        <component :is="Component" />
      </transition>
  </router-view>
</template>

<script setup lang="ts">
import { AppHeader } from '@src/layout/components/index'
</script>
