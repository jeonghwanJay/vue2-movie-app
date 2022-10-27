<template>
  <div id="app">
    <div class="bodyContainer">
      <h1 class="title">
        OMDb API <br /><span class="title-span"
          >THE OPEN <br />MOVIE DATABASE</span
        >
      </h1>
      <p class="description">
        The OMDb API is a RESTful web service to obtain movie information, all
        content and images on the site are contributed and maintained by our
        users.<br />If you find this service useful, please consider making a
        one-time donation or become a patron.
      </p>
      <div class="container">
        <input
          class="form-input"
          type="text"
          placeholder="Search for Movies, Series & more"
        />
        <select class="form-select" name="form-select" id="">
          <option value="">movie</option>
          <option value="">series</option>
          <option value="">episode</option>
        </select>
        <select class="form-select" name="form-select" id="">
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
        </select>
        <select class="form-select" name="form-select" id="">
          <option value="">All years</option>
          <option value="">1985</option>
          <option value="">1986</option>
          <option value="">1987</option>
          <option value="">1988</option>
          <option value="">1989</option>
          <option value="">1990</option>
          <option value="">1991</option>
          <option value="">1992</option>
          <option value="">1993</option>
          <option value="">1994</option>
          <option value="">1995</option>
          <option value="">1996</option>
          <option value="">1997</option>
          <option value="">1998</option>
          <option value="">1999</option>
          <option value="">2000</option>
          <option value="">2001</option>
          <option value="">2002</option>
          <option value="">2003</option>
          <option value="">2004</option>
          <option value="">2005</option>
          <option value="">2006</option>
          <option value="">2007</option>
          <option value="">2008</option>
          <option value="">2009</option>
          <option value="">2010</option>
          <option value="">2011</option>
          <option value="">2012</option>
          <option value="">2013</option>
          <option value="">2014</option>
        </select>
        <button class="btn">Apply</button>
        <div class="movie-inner">
          <div class="movie-message">Search for the movie title!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: #fdc000;
  font-family: "Oswald", sans-serif;
  font-size: 4.8rem;
  line-height: 5.3rem;
  padding-left: 2.4rem;
}
.title-span {
  color: black;
  font-family: "Oswald", sans-serif;
}
.description {
  padding-left: 2.4rem;
  color: #6c757d;
  margin-bottom: 2.9rem;
}
.container {
  padding-left: 2.4rem;
}
.form-input {
  padding: 0.8rem 1rem;
  margin-right: 1rem;
  width: 55%;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
.form-select {
  padding: 0.8rem 1rem;
  margin-right: 1rem;
  width: 8.5%;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
.btn {
  padding: 0.8rem 1rem;
  width: 8%;
  background: #fdc000;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
.movie-inner {
  background-color: gray;
  padding: 4.8rem 0;
  border-radius: 4px;
  text-align: center;
  width: 95.65%;
  background: #e9ecef;
  margin-top: 2rem;
}
.movie-message {
  color: #ced4da;
  font-size: 20px;
}
</style>
