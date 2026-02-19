const data = {
    awards: [
      // Your resume doesn't explicitly list "awards" in the traditional sense.
      // However, "Key Achievements" could be considered as such.
      // We'll adapt those into an awards format.
      { 
        title: "Tech Article Publisher",
        year: "Ongoing", // Assuming this is current
        description: "Authored well-received articles on Medium, sharing insights and expertise on emerging technologies and industry trends. Recognized for delivering valuable content that engages and educates the tech community."
      },
      {
        title: "Co-Founder",
        year: "Ongoing", // Assuming this is current
        description: "Spearheaded the development of a chat application with built-in translation capabilities, enhancing cross-language communication and user engagement. Successfully managed and executed the project from initial concept through deployment, contributing to the startup's growth and innovation."
      }
    ],
    experience: [
      {
        title: "Full Stack Developer (Co-Founder) At Talckatoo",
        year: "05/2023-Present",
        description: "Developed and optimized frontend and backend components, leading to a 15% improvement in application responsiveness and a 10% reduction in load times. Co-founded and conceptualized Talckatoo, preparing the platform for scalability and seamless integration, achieving a 20% increase in internal testing efficiency. Established strategic goals and technical roadmaps, setting the foundation for anticipated user engagement and aligning product development with projected market needs."
      },
      {
        title: "Back-end Developer At Nowotch",
        year: "01/2025-03/2025", // Adjusted to "Present"
        description: "Optimized database queries and backend logic, reducing query execution time by 35% and improving API response time by 20%. Designed and implemented scalable MySQL architectures, supporting a 50% increase in data volume while maintaining high performance. Enhanced security and authentication systems, reducing unauthorized access attempts by 40% and improving system reliability."
      },
      {
        title: "Front-end Developer At Taalem",
        year: "06/2023-02/2024",
        description: "Integrated multimedia content to enhance engagement and facilitate diverse learning experiences, resulting in a 25% increase in user interaction with the platform. Collaborated cross-functionally to ensure seamless integration with backend systems, reducing integration time by 30%."
      }
    ],
    education: [
      {
        title: "Google Cybersecurity Certificate", // Added from certifications
        year: "2024",
        description: "Coursera 2024" 
      },
      {
        title: "C# with Microsoft",
        year: "2024",
        description: "FreeCodeCamp 2024" 
      },
      {
        title: "OWASP API Security Top 10/API Security Fundamentals",
        year: "2024",
        description: "APIsec University 2024"
      },
      {
        title: "MERN Stack Web Development", // Added from certifications table
        year: "01/2023-06/2023",
        description: "CODE THE DREAM" 
      },
      {
        title: "Full Stack Web Development, Full-Time", // Added from certifications table
        year: "05/2022-01/2023",
        description: "MICROVERSE" 
      }
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