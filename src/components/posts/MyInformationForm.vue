<template>
  <div class="container">
    <img
      src="../../assets/MyProfile.jpeg"
      alt="Profile Image"
      class="profile-Img"
    />
    <h1 class="name">Jay</h1>
    <p class="information">
      jay@gmail.com<br />
      https://jay.blog<br />
      +82-10-1234-5678
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 3rem 0 0 0;
}
.name {
  font-size: 2.5rem;
}
.information {
  font-size: 1.2rem;
}
.profile-Img {
  width: 10rem;
  border-radius: 1rem;
}
</style>
