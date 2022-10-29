<template>
  <div class="movie-detail">
    <div>
      <img src="../../assets/ironman3.png" alt="ironman3" class="movieImg" />
    </div>
    <div class="movieInformation">
      <div class="movieTitleAndSummary">
        <div class="movieTitle">Iron Man3</div>
        <span class="movieRunningTime"
          >03 May 2013 ・ 130 min ・ United States</span
        >
        <div class="movieSummary">
          Marvel's "Iron Man 3" pits brash-but-brilliant industrialist Tony
          Stark/Iron Man against an enemy whose reach knows no bounds. When
          Stark finds his personal world destroyed at his enemy's hands, he
          embarks on a harrowing quest to find those responsible. This journey,
          at every turn, will test his mettle. With his back against the wall,
          Stark is left to survive by his own devices, relying on his ingenuity
          and instincts to protect those closest to him. As he fights his way
          back, Stark discovers the answer to the question that has secretly
          haunted him: does the man make the suit or does the suit make the man?
        </div>
      </div>
      <div class="movieOtherInformation">
        <h1 class="optionTitles">Ratings</h1>
        <div class="ratingsWrap">
          <div class="ratingsoptions">
            <img src="../../assets/IMDB.png" alt="IMDB" class="IMDB" />
            <span>7.1/10</span>
          </div>
          <div class="ratingsoptions">
            <img
              src="../../assets/Rotten Tomatoes.png"
              alt="RT"
              class="rottenTomatoes"
            />
            <span>79%</span>
          </div>
          <div class="ratingsoptions">
            <img
              src="../../assets/Metacritic.png"
              alt="MC"
              class="metaCritic"
            />
            <span>62/100</span>
          </div>
        </div>
        <div>
          <h1 class="optionTitles">Actors</h1>
          <span class="optionDescription"
            >Robert Downey Jr., Guy Pearce, Gwyneth Paltrow</span
          >
        </div>
        <div>
          <h1 class="optionTitles">Director</h1>
          <span class="optionDescription">Shane Black</span>
        </div>
        <div>
          <h1 class="optionTitles">Production</h1>
          <span class="optionDescription">N/A</span>
        </div>
        <div>
          <h1 class="optionTitles">Genre</h1>
          <span>Action, Adventure, Sci-Fi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.movie-detail {
  display: flex;
  padding-top: 2.2rem;
}
.movieImg {
  width: 30rem;
  height: 45rem;
  border-radius: 10px;
  margin-left: 2.1rem;
  margin-right: 4rem;
}
.movieInformation {
  width: 55%;
}
.movieTitleAndSummary {
}
.movieTitle {
  font-family: "Oswald", sans-serif;
  font-size: 4.3rem;
  font-weight: 500;
  margin-top: -1rem;
  margin-bottom: 0.5rem;
}
.movieRunningTime {
  display: block;
  color: #fdc000;
  margin-bottom: 1.3rem;
  font-size: 1.1rem;
}
.movieSummary {
  display: block;
  color: #6c757d;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
}
.movieOtherInformation {
  /* color: #6c757d; */
}
.optionTitles {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  margin: 0.5rem 0;
}
.optionDescription {
  color: #6c757d;
  font-family: "Roboto", sans-serif;
}
.ratingsWrap {
  display: flex;
}
.ratingsoptions {
  margin-right: 2rem;
}
.IMDB {
  width: 3rem;
}
.rottenTomatoes {
  width: 5.2rem;
}
.metaCritic {
  width: 2rem;
  height: 1.9rem;
}
</style>
