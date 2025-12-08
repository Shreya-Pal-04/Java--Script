// form store localStorage

    // ⭐ STAR RATING
let rating = 0;
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");

stars.forEach(star => {
    star.addEventListener("click", () => {

        // clicked star ki value
        rating = star.getAttribute("data-val");

        // sare stars ko update karo
        stars.forEach(s => {
            s.classList.remove("active");

            if (s.getAttribute("data-val") <= rating) {
                s.classList.add("active");
            }
        });

        ratingValue.innerText = rating + "/5";
    });
});


// ⭐ BUTTON (GENRE & TYPE) TOGGLE
const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});


// ⭐ FORM SAVE
document.getElementById("movieForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Selected Genre Buttons
    const selectedGenres = [...document.querySelectorAll("#genreGroup .active")].map(btn => btn.innerText);

    // Selected Type Buttons
    const selectedTypes = [...document.querySelectorAll("#typeGroup .active")].map(btn => btn.innerText);

    // Movie Object
    const movie = {
        title: document.getElementById("title").value,
        rating: rating,
        votes: document.getElementById("votes").value,
        duration: document.getElementById("duration").value,
        certification: document.getElementById("certification").value,
        releaseDate: document.getElementById("date").value,
        genre: selectedGenres,
        type: selectedTypes,
        plot: document.getElementById("plot").value,
        imgURL: document.getElementById("imgURL").value
    };

    // Local Storage Me Save
    let oldMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    oldMovies.push(movie);
    localStorage.setItem("movies", JSON.stringify(oldMovies));


    // ⭐ FORM RESET (simple beginner way)
    document.getElementById("movieForm").reset();

    // rating reset
    rating = 0;
    ratingValue.innerText = "0";
    stars.forEach(star => star.classList.remove("active"));

    // buttons reset
    tags.forEach(tag => tag.classList.remove("active"));

    alert("Movie Added Successfully!");
});