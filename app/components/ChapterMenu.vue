<template>
  <section class="chapter-selection">
    <header>Kapitel</header>
    <ol>
      <li v-for="scene in value" :key="scene">
        <button @click="() => onSelect(scene)">
          {{ scene }}
        </button>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
type Props = {
  value: string[];
}

type Emits = {
  (e: 'select', payload: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function onSelect(scene: string) {
  emit('select', scene);
}
</script>

<style scoped>
.chapter-selection:first-child {
  padding-bottom: 0.5em;
  border-bottom: 1px solid currentColor;
}

.chapter-selection:last-child {
  padding-top: 0.5em;
  border-top: 1px solid currentColor;
}

.chapter-selection header {
  font-size: larger;
  text-transform: uppercase;
}

.chapter-selection ol {
  margin: 0;
  padding-inline-start: 1em;
}

.chapter-selection button {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  font: inherit;
}

.chapter-selection button:hover {
  text-decoration: underline;
}
</style>