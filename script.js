document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");
    const backgroundMusic = document.getElementById("backgroundMusic");

    const romanticLines = [
        "Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai. - Om Shanti Om",
        "Taqdeerein badal jaati hai, zamana badal jaata hai, mulkon ki tarikh badal jaati hai, Shahenshah badal jaate hai … magar is badalti hui duniya mein mohabbat jis insaan ka daaman thaam leti hai … woh insaan nahi badalta. - Mughal-E-Azam",
        "Mohabbat bhi zindagi ki tarah hoti hai, har mod aasaan nahin hota, har mod par khushi nahin milti, par jab hum zindagi ka saath nahin chhorte, to mohabbat ka saath kyon chhorein. - Mohabbatein",
        "Hum se bachkar jaaoge kaise.. apne dil se hame nikaaloge kaise .. hum woh khushbu hai jo saason mein baste hain …. kud ki saanson ko rok paaoge kaise. - Fanaa",
        "Pyar toh bahut log karte hai; lekin mere jaisa pyar koi nahi kar sakta kyun ki kisi ke paas tum joh nahi ho. - Kal Ho Na Ho"
    ];

    function showRomanticLine() {
        const randomLine = romanticLines[Math.floor(Math.random() * romanticLines.length)];
        alert(randomLine);
    }

    noButton.addEventListener("click", function() {
        showRomanticLine();
    });

    yesButton.addEventListener("click", function() {
        alert("Yay! I knew you'd say yes! ❤️");
    });

    // Ensure background music plays
    backgroundMusic.play().catch(function(e) {
        document.body.addEventListener('click', function() {
            backgroundMusic.play();
        }, { once: true });
    });

    document.body.style.background = "🥺👉👈".repeat(1000);  // Emoji background
});
