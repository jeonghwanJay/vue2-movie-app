<template>
  <header class="appHeader">
    <a href="/" class="banner">OMDbAPI.COM</a>
    <div class="nav-container">
      <div class="nav-item">
        <a href="/">Search</a>
      </div>
      <div class="nav-item">
        <a href="/movie">Movie</a>
      </div>
      <div class="nav-item">
        <a href="/about">About</a>
      </div>
    </div>
    <div class="profile">
      <img src="../../assets/MyProfile.jpeg" alt="MyProfile" align="right" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.appHeader {
  padding: 0;
  margin: 1rem 1rem 2rem 1rem;
  display: flex;
}
.banner {
  color: #fdc000;
  font-size: 1.2rem;
  font-weight: bold;
}
.nav-container {
  display: flex;
}
.nav-item {
}
.profile {
  display: inline;
}
.profile img {
  width: 1.6rem;
  border-radius: 1.2rem;
}
</style>
