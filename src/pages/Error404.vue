<template>
  <div class="fullscreen text-center q-pa-md flex flex-center phoneHome">
    <div>
      <div class="text-h2">
        Oops, parece que te perdiste... Dale en el dedito a ET para volver a
        casa.
      </div>
      <a href="/"> <img src="../assets/glow.gif" alt="glow" class="glow" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorNotFound",
};
</script>

<style>
.phoneHome {
  background-image: url(../assets/73e71c2d-3a27-4078-b491-1f36b2f52687.jpg);
}

.glow {
  width: 70px;
  position: absolute;
  right: 520px;
  top: 190px;
}
</style>
