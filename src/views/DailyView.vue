<template>
<html lang="en">
  <div class="daily">
    <b-table striped hover :items="items"></b-table>
  </div>
</html>
</template>

<script lang="ts">
 export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' }
          ]
      }
    }
 }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

