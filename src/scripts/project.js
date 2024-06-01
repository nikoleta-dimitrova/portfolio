const projectArr = [
    {
        "id": 1,
        "name": "FloryBelle",
        "scriptLetter": ["o"],
        "tags": ["Prototyping", "Concepting"],
        "description": "An app about taking care of plants.",
        "projectImages": [],
        "expertise": ["Concepting", "Branding", "Prototyping"],
        "techUsed": ["Adobe XD", "Adobe Illustrator"],
        "roleInProject": ["Lead Designer"],
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "An app about helping students take care of their plants. It will give them detailed information about their plant's needs and will help them keep their plants alive. <br /> <br /> They can scan their plants using their camera and the app will show them information about the moisture it needs, sunlight levels, soil quality, and room temperature.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Problem Statement",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Problem Statement",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            }
        ]
    },
    {
        "id": 2,
        "name": "Stormy",
        "scriptLetter": ["o"],
        "tags": ["Branding", "Concepting", "Prototyping"],
        "description": "Cool project yesssssssssssss",
        "projectImages": [],
        "expertise": [],
        "techUsed": [],
        "roleInProject": [],
        "bodyParagraphs": [
            {
                "title": "About",
                "body": "Maikati"
            }
        ]
    },
    {
        "id": 3,
        "name": "PaveMind",
        "scriptLetter": ["P"],
        "tags": ["Branding", "Development", "Concepting"],
        "description": "Cool project yesssssssssssss",
        "projectImages": [],
        "expertise": [],
        "techUsed": [],
        "roleInProject": [],
        "bodyParagraphs": [
            {
                "title": "About",
                "body": "Maikati"
            }
        ]
    },
    {
        "id": 4,
        "name": "Ochaya",
        "scriptLetter": ["c"],
        "tags": ["Branding", "Concepting"],
        "description": "Cool project yesssssssssssss",
        "projectImages": [],
        "expertise": [],
        "techUsed": [],
        "roleInProject": [],
        "bodyParagraphs": [
            {
                "title": "About",
                "body": "Maikati"
            }
        ]
    }
]


function updateProjectHTML() {
    const queryString = window.location.search;
    const pid = queryString.replace("?pid=", "")
    const project = projectArr.find(prj => prj.id.toString() === pid.toString())

    // Update the main container
    const container = document.getElementById("project-landing");

    // Update the headline section
    const headline = container.querySelector(".headline");
    const headlineDiv = headline.querySelector("div");

    const header = headlineDiv.querySelector(".header");
    header.innerHTML = project.name.replace(project.scriptLetter[0], `<span id="letter-o" class="accent">${project.scriptLetter[0]}</span>`);

    const headerDesc = headlineDiv.querySelector(".description");
    headerDesc.innerHTML = project.description;

    const projectInfo = container.querySelector(".project-information");

    // Clear and update the Expertise list
    const expertiseUl = projectInfo.querySelector("ul:nth-of-type(1)");
    expertiseUl.innerHTML = "<p>Expertise</p>";
    project.expertise.forEach(exp => {
        const li = document.createElement("li");
        li.innerHTML = exp;
        expertiseUl.appendChild(li);
    });

    // Clear and update the Technology used list
    const techUl = projectInfo.querySelector("ul:nth-of-type(2)");
    techUl.innerHTML = "<p>Technology used</p>";
    project.techUsed.forEach(exp => {
        const li = document.createElement("li");
        li.innerHTML = exp;
        techUl.appendChild(li);
    });

    // Clear and update the Role in project list
    const roleUl = projectInfo.querySelector("ul:nth-of-type(3)");
    roleUl.innerHTML = "<p>Role in project</p>";
    project.roleInProject.forEach(exp => {
        const li = document.createElement("li");
        li.innerHTML = exp;
        roleUl.appendChild(li);
    });

    // // Clear and update project-paralax section
    // const firstParalax = document.getElementById("project-paralax");
    // firstParalax.innerHTML = ''; // Clear the content

    // Update body paragraphs
    const aboutSections = [...document.querySelectorAll(`[data-select=project-about]`)]
    project.bodyParagraphs.forEach((paragraph, index) => {

        const sectionAbout = aboutSections[index];
        const title = sectionAbout.querySelector('[data-select=title]')
        title.innerHTML = paragraph.title;

        const description = sectionAbout.querySelector('[data-select=body]')
        description.innerHTML = paragraph.body

        const gallery = sectionAbout.querySelector('[data-select=gallery]')
        const galleryImages = gallery.querySelectorAll("img");
        paragraph.images.forEach((image, index) => {
            galleryImages[index].src = image;
        });
    });
}

updateProjectHTML()
