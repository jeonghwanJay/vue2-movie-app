<template>
  <header class="appHeader">
    <a href="/" class="banner">OMDbAPI<span class="dotcom">.COM</span></a>
    <div class="nav-container">
      <div>
        <a class="nav-item" href="/">Search</a>
      </div>
      <div>
        <a class="nav-item" href="/movie">Movie</a>
      </div>
      <div>
        <a class="nav-item" href="/about">About</a>
      </div>
    </div>
    <div class="profile">
      <img src="../../assets/MyProfile.jpeg" alt="MyProfile" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.appHeader {
  height: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  position: relative;
  font-family: "Oswald", sans-serif;
}
.banner {
  text-decoration: none;
  font-size: 1.4rem;
  color: #fdc000;
  margin: 0 2.3rem 0 0;
}
.dotcom {
  font-weight: bold;
  text-decoration: none;
  color: black;
}
.nav-container {
  text-decoration: none;
  display: flex;
}
.nav-item {
  text-decoration: none;
  padding: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: #fdc000;
  font-weight: bold;
}
.profile {
  position: absolute;
  right: 3rem;
  top: 1.4rem;
}
.profile img {
  width: 1.8rem;
  border-radius: 1rem;
}
</style>
