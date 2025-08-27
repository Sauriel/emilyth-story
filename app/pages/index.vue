<script setup lang="ts">
import type { ContentCollectionItem } from '@nuxt/content';

const currentChapter = ref<ContentCollectionItem | null | undefined>(null);

const { title, scenes } = await useAsyncData(() => queryCollection('content').path('/').first())
  .then(data => {
    const longform = data.data.value?.meta?.longform as { title: string; scenes: (string | Array<unknown>)[], sceneFolder: string };
    const sceneFolder = longform.sceneFolder;
    const title = longform.title;
    const scenes: string[] = longform.scenes.filter((scene: string | Array<unknown>) => !Array.isArray(scene) && !scene.toLowerCase().includes('wip')) as string[];

    if (scenes.length > 0) {
      loadChapter(scenes[0]!);
    }

    return { title, scenes, sceneFolder };
  })

useSeoMeta({
  title: currentChapter.value ? `${title}: ${currentChapter.value.title}` : title
})

async function loadChapter(scene: string) {
  currentChapter.value = (await useAsyncData(scene, () => queryCollection('content').where('title', '=', scene).first())).data.value;
}
</script>

<template>
  <div>
    <ChapterMenu :value="scenes" @select="loadChapter" />
    <ContentRenderer v-if="currentChapter" :value="currentChapter" />
    <ChapterMenu v-if="currentChapter" :value="scenes" @select="loadChapter" />
  </div>
</template>
