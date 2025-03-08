const data = {
    awards: [
        { title: "Best Developer", year: "2023", description: "Awarded for outstanding coding skills." },
        { title: "Innovation Prize", year: "2022", description: "Recognized for innovative solutions." }
    ],
    experience: [
        { title: "Software Engineer", year: "2021-2023", description: "Worked at a top tech company." },
        { title: "Internship", year: "2020", description: "Completed an internship in web development." },
        { title: "Software Engineer", year: "2021-2023", description: "Worked at a top tech company." },
        { title: "Software Engineer", year: "2021-2023", description: "Worked at a top tech company." }

    ],
    education: [
        { title: "Computer Science Degree", year: "2019-2023", description: "Graduated with honors." },
        { title: "Bootcamp", year: "2023", description: "Completed a full-stack development bootcamp." },
        { title: "Computer Science Degree", year: "2019-2023", description: "Graduated with honors." },
        { title: "Computer Science Degree", year: "2019-2023", description: "Graduated with honors." },
        { title: "Computer Science Degree", year: "2019-2023", description: "Graduated with honors." },

    ]
};

function displayCards(category, element) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; // Clear existing cards

    if (!data[category]) return; // Prevent errors

    data[category].forEach(item => {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6";

        card.innerHTML = `
            <div class="fancy-box">
                <h4>${item.title}</h4>
                <h6 class="sm-heading text-white-04 mb-2">${item.year}</h6>
                <p>${item.description}</p>
            </div>
        `;

        container.appendChild(card);
    });

    // Remove "active" class from all titles
    document.querySelectorAll("h1.selectable").forEach(title => title.classList.remove("active"));

    // Add "active" class to the clicked title
    element.classList.add("active");
}

// Display Awards data by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const defaultTitle = document.querySelector("h1.selectable");
    if (defaultTitle) {
        defaultTitle.classList.add("active"); // Set "Awards" as active
        displayCards('awards', defaultTitle); // Load "Awards" by default
    }
});