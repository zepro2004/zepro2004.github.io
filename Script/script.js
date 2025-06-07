/*-- Author: Louis Bertrand Ntwali
-- Student ID: 041160530
--*/

const { captureOwnerStack } = require("react");

// Select DOM elements
const projectTile = document.querySelector(".project-tile");
const nextBtn = document.querySelector(".next-project");
const prevBtn = document.querySelector(".previous-project");
const title = document.querySelector("#project-title");
const description = document.querySelector("#project-description");
const date = document.querySelector("#project-date");
const img = document.querySelector("#project-image");
const link = document.querySelector("#project-link");

let currentProject = 1; // Initialize current project index

// Array of project objects
const projects = [
  {
    title: "Notes App",
    description:
      "Stores Notes and ToDos. Uses Java Swing for the frontend and MySQL for the backend. Maven is used as the build tool.",
    date: "2025-04-15",
    image: "./images/Projects/NotesApp.png",
    source: "https://github.com/zepro2004/Notes-App",
    caption: "Fig. Notes App",
  },

  {
    title: "Events Management Website",
    description:
      "A dynamic website to manage events. Attendees can RSVP to events, whereas admins can create and delete events.",
    date: "2025-03-20",
    image: "./images/Projects/EventsWebsite.png",
    source: "https://github.com/zepro2004/Event-Attendees-Management-Website",
    caption: "Fig. Events Management Website",
  },

  {
    title: "Palindrome Checker",
    description:
      "Checks if a word or sentence is a palindrome. It ignores special characters and spaces.",
    date: "2024-11-25",
    image: "./images/Projects/PalindromeChecker.png",
    source: "https://jsfiddle.net/bcbzepro/bhLc2a3p/1/",
    caption: "Fig. palindrome checker",
  },
  {
    title: "Decimal Converter",
    description: "Converts numbers from decimal to binary.",
    date: "2024-12-13",
    image: "./images/Projects/DecimalConverter.png",
    source: "https://jsfiddle.net/bcbzepro/o53hcbLn/1/",
    caption: "Fig. Decimal to binary converter",
  },
  {
    title: "Telephone Validator",
    description:
      "Checks that the telephone number is in the correct format. It follows the north american numbering format.",
    date: "2025-01-15",
    image: "./images/Projects/TelephoneValidator.png",
    source: "https://jsfiddle.net/bcbzepro/9suLda7r/1/",
    caption: "Fig. Telephone number validator",
  },
  {
    title: "Roman Numeral Converter",
    description:
      "Converts numbers to Roman numerals. You input any number from 1 to 3999 and it will convert to a roman numeral.",
    date: "2024-09-25",
    image: "./images/Projects/RomanConverter.png",
    source: "https://jsfiddle.net/bcbzepro/vm39fja0/1/",
    caption: "Fig. Roman numeral converter",
  },
];

// Function to update the project details in the DOM
const updateProject = () => {
  projectTile.style.opacity = 0; // Fade out effect
  setTimeout(() => {
    // Update project details
    title.textContent = projects[currentProject].title;
    description.textContent = projects[currentProject].description;
    date.textContent = `Date: ${projects[currentProject].date}`;
    img.src = projects[currentProject].image;
    link.href = projects[currentProject].source;
    projectTile.style.opacity = 1; // Fade in effect
  }, 500);
};

// Function to show the next project
const nextProject = () => {
  currentProject =
    currentProject === projects.length - 1 ? 0 : currentProject + 1;
  updateProject();
};

// Function to show the previous project
const previousProject = () => {
  currentProject =
    currentProject === 0 ? projects.length - 1 : currentProject - 1;
  updateProject();
};

// Event listeners for next and previous buttons
nextBtn.addEventListener("click", nextProject);
prevBtn.addEventListener("click", previousProject);

// Initial call to display the first project
updateProject();
