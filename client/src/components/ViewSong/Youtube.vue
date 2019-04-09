<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="220">
      </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }

}
</script>

<style>

</style>
