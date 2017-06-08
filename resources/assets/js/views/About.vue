<template>
  <div class="columns">
    <div class="column">
      <div class="message">
        <div class="message-header">
            <p>About</p>
            <p>a moment ago...</p>
        </div>
        <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto dicta ducimus ea reiciendis, tenetur voluptate? Cumque cupiditate ea id laborum libero quos tempore voluptatibus. Consequatur ipsam nulla vero?
         </div>
      </div>
    </div>
  </div>

</template>

<style>
    .message{
        margin:1em;
    }
</style>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
