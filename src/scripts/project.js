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
                "title": "Main Problem",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Results",
                "body": "The FlorryBelle App will give the students access to detailed information, moisture and sunlight levels, soil quality and room temperature. This can all happen with the help of a monitoring device placed directly in their plant pot. <br><br> The app and device will help them keep their plants alive and taking proper care of them. The monitoring device will also have watering function that is going to be very useful for the students that go back home frequently and leave their plants alone. They will be able to water their plants with just a few clicks in the app.",
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
                "title": "About Project",
                "body": "An app about helping students take care of their plants. It will give them detailed information about their plant's needs and will help them keep their plants alive. <br /> <br /> They can scan their plants using their camera and the app will show them information about the moisture it needs, sunlight levels, soil quality, and room temperature.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Main Problem",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Results",
                "body": "The FlorryBelle App will give the students access to detailed information, moisture and sunlight levels, soil quality and room temperature. This can all happen with the help of a monitoring device placed directly in their plant pot. <br><br> The app and device will help them keep their plants alive and taking proper care of them. The monitoring device will also have watering function that is going to be very useful for the students that go back home frequently and leave their plants alone. They will be able to water their plants with just a few clicks in the app.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            }
        ]
    },
    {
        "id": 3,
        "name": "PaveMind",
        "scriptLetter": ["P"],
        "tags": ["Prototyping", "Development", "Research"],
        "description": "A mental health website for burnout",
        "projectImages": [],
        "expertise": ["Prototyping", "Development", "Research", "Concepting"],
        "techUsed": ["Adobe XD", "Adobe Illustrator", "Adobe InDesign", "HTML, CSS, JS"],
        "roleInProject": ["Lead Designer", "Developer"],
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "PaveMind is an educational website for students where they can not only help each other with burnout and mental health but also find tips and tricks on how to cope with it, become more aware of the problem, and learn new things about the topic.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Main Problem",
                "body": "A large portion of people are suffering from mental health issues daily. The numbers are reaching record rates because of how hectic our daily life has become. People are feeling the effects of overworking themselves and aren't feeling capable of continuing their work as efficiently as they did before.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Results",
                "body": "Our product emphasizes on the following: reliability, student comfort, privacy, community, and professionalism. <br><br> Thanks to our wide user research we were able to precisely create the most proficient solution which is a platform about burnout featuring: a questionnaire, an accurate selection of articles, community, tips, and tricks.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
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
                "title": "About Project",
                "body": "An app about helping students take care of their plants. It will give them detailed information about their plant's needs and will help them keep their plants alive. <br /> <br /> They can scan their plants using their camera and the app will show them information about the moisture it needs, sunlight levels, soil quality, and room temperature.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Main Problem",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
            },
            {
                "title": "Results",
                "body": "The FlorryBelle App will give the students access to detailed information, moisture and sunlight levels, soil quality and room temperature. This can all happen with the help of a monitoring device placed directly in their plant pot. <br><br> The app and device will help them keep their plants alive and taking proper care of them. The monitoring device will also have watering function that is going to be very useful for the students that go back home frequently and leave their plants alone. They will be able to water their plants with just a few clicks in the app.",
                "images": ["../../public/assets/pavemind-preview.png", "../../public/assets/pavemind-preview.png"]
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