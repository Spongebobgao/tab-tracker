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

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style>

</style>
