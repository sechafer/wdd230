const baseURL = "https://sechafer.github.io/wdd230/";
const linksURL = "https://sechafer.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayLinks(data.weeks);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

const displayLinks = (weeks) => {
    const list = document.querySelector(".card-content .la-card");
    if (!list) {
        console.error("No .la-card element found.");
        return;
    }

    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        const weekText = document.createTextNode(`${week.week}: `);
        listItem.appendChild(weekText);

        week.links.forEach((link, index) => {
            const tag = document.createElement("a");
            tag.setAttribute("href", link.url);
            tag.setAttribute("target", "_blank");  // Opens the link in a new tab
            tag.textContent = link.title;

            listItem.appendChild(tag);

            if (index < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });

        list.appendChild(listItem);
    });
};

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", getLinks);