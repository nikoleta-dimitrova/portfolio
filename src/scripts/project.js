const projectArr = [
    {
        "id": 1,
        "name": "FloryBele",
        "scriptLetter": ["o"],
        "tags": ["Prototyping", "Concepting"],
        "description": "An app about taking care of plants.",
        "expertise": ["Concepting", "Branding", "Prototyping"],
        "techUsed": ["Adobe XD", "Adobe Illustrator"],
        "roleInProject": ["Lead Designer"],
        "parallax": '/assets/florybelle-photo1.png',
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "An app about helping students take care of their plants. It will give them detailed information about their plant's needs and will help them keep their plants alive. <br /> <br /> They can scan their plants using their camera and the app will show them information about the moisture it needs, sunlight levels, soil quality, and room temperature.",
                "isParallax": false,
                "images": ['/assets/florybelle-photo2.png', '/assets/florybelle-photo3.png']
            },
            {
                "title": "Main Problem",
                "body": "A lot of people are not being able to take care of their plants properly, do not understand their needs which leads to them dying our of unproper care.",
                "isParallax": true,
                "images": ['/assets/florybelle-photo4.png']
            },
            {
                "title": "Results",
                "body": "The FlorryBelle App provides students with detailed information on moisture, sunlight, soil quality, and room temperature via a device in their plant pot. The app and device help maintain plant health, and the watering function is perfect for students who frequently travel, allowing remote watering with a few clicks.",
                "isParallax": false,
                "images": ['/assets/florybelle-photo5.png', '/assets/florybelle-photo6.png']
            }
        ]
    },
    {
        "id": 2,
        "name": "Stormy",
        "scriptLetter": ["o"],
        "tags": ["Branding", "Concepting", "Prototyping"],
        "description": "A weather app for students",
        "expertise": ["Branding", "Concepting", "Prototyping"],
        "techUsed": ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        "roleInProject": ["Lead Designer"],
        "parallax": "/assets/stormy-photo1.png",
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "The app that we created aims to help people become more aware of upcoming weather by providing real-time weather updates, warnings, and alerts, allowing users to make informed decisions about their activities and travel plans.",
                "isParallax": false,
                "images": ["/assets/stormy-photo2.png", "/assets/stormy-photo3.png"]
            },
            {
                "title": "Main Problem",
                "body": "The challenge posed by rain and unexpected weather changes can lead to safety risks and disruption in people's daily activities especially when it comes to commuting, traveling, and running errands.",
                "isParallax": true,
                "images": ["/assets/stormy-photo4.png"]
            },
            {
                "title": "Results",
                "body": "The Stormy app provides users with real-time updates, weather alerts, and tips on how to prepare for different weather conditions. It helps users plan their activities and travel safely by integrating weather data with navigation systems to suggest the safest and most efficient routes based on current weather conditions.",
                "isParallax": false,
                "images": ["/assets/stormy-photo5.png", "/assets/stormy-photo6.png"]
            }
        ]
    },
    {
        "id": 3,
        "name": "PaveMind",
        "scriptLetter": ["P"],
        "tags": ["Research", "Prototyping", "Development"],
        "description": "A mental health website for burnout",
        "projectImages": [],
        "expertise": ["Research", "Prototyping", "Development"],
        "techUsed": ["Adobe XD", "Adobe Illustrator", "Adobe InDesign", "HTML, CSS, JS"],
        "roleInProject": ["Lead Designer", "Developer"],
        "parallax": "/assets/pavemind-photo1.png",
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "PaveMind is an educational website for students where they can not only help each other with burnout and mental health but also find tips and tricks on how to cope with it, become more aware of the problem, and learn new things about the topic.",
                "isParallax": false,
                "images": ["/assets/pavemind-photo2.png", "/assets/pavemind-photo3.png"]
            },
            {
                "title": "Main Problem",
                "body": "A large portion of people are suffering from mental health issues daily. The numbers are reaching record rates because of how hectic our daily life has become. People are feeling the effects of overworking themselves and aren't feeling capable of continuing their work as efficiently as they did before.",
                "isParallax": true,
                "images": ["/assets/pavemind-photo4.png"]
            },
            {
                "title": "Results",
                "body": "Our product emphasizes on the following: reliability, student comfort, privacy, community, and professionalism. <br><br> Thanks to our wide user research we were able to precisely create the most proficient solution which is a platform about burnout featuring: a questionnaire, an accurate selection of articles, community, tips, and tricks.",
                "isParallax": false,
                "images": ["/assets/pavemind-photo5.png", "/assets/pavemind-photo6.png"]
            }
        ]
    },
    {
        "id": 4,
        "name": "Ochaya",
        "scriptLetter": ["c"],
        "tags": ["Branding", "Concepting"],
        "description": "Branding for a matcha tea café",
        "expertise": ["Branding", "Design"],
        "techUsed": ["Adobe Illustrator", "Adobe Photoshop"],
        "roleInProject": ["Graphic Designer"],
        "parallax": "/assets/ochaya-photo1.png",
        "bodyParagraphs": [
            {
                "title": "About Project",
                "body": "Ochaya is a branding project for a new matcha tea café. The aim was to create a modern and welcoming brand identity that reflects the calm and sophisticated nature of matcha tea. <br /> <br /> The project involved designing the logo, packaging, and promotional materials.",
                "isParallax": false,
                "images": ["/assets/ochaya-photo2.png", "/assets/ochaya-photo3.png"]
            },
            {
                "title": "Main Problem",
                "body": "Creating a unique brand identity in a saturated market of tea cafés. The challenge was to highlight the unique aspects of matcha and the café's modern aesthetic.",
                "isParallax": true,
                "images": ["/assets/ochaya-photo4.png"]
            },
            {
                "title": "Results",
                "body": "The Ochaya branding successfully captures the essence of matcha tea and provides a cohesive and appealing visual identity for the café. The designs received positive feedback and helped in establishing a strong brand presence.",
                "isParallax": false,
                "images": ["/assets/ochaya-photo5.png", "/assets/ochaya-photo6.png"]
            }
        ]
    }
];

function updateProjectHTML() {
    const queryString = window.location.search;
    const pid = queryString.replace("?pid=", "");
    const project = projectArr.find(prj => prj.id.toString() === pid.toString());

    if (!project) {
        console.error('Project not found');
        return;
    }

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

    const parallaxSection = document.querySelector('.parallax');
    const parallax = parallaxSection.querySelector('[data-select=parallax-image]');
    parallax.src = project.parallax;

    // Update body paragraphs
    const aboutSections = [...document.querySelectorAll(`[data-select=project-about]`)];
    project.bodyParagraphs.forEach((paragraph, index) => {
        const sectionAbout = aboutSections[index];
        const title = sectionAbout.querySelector('[data-select=title]');
        title.innerHTML = paragraph.title;

        const description = sectionAbout.querySelector('[data-select=body]');
        description.innerHTML = paragraph.body;

        if (paragraph.isParallax) {
            const parallaxImage = sectionAbout.querySelector('[data-select=parallax-image]');
            parallaxImage.src = paragraph.images[0];
        } else {
            const gallery = sectionAbout.querySelector('[data-select=gallery]');
            const galleryImages = gallery.querySelectorAll("img");
            paragraph.images.forEach((image, imgIndex) => {
                galleryImages[imgIndex].src = image;
            });
        }
    });

    let nextProjectId = project.id % projectArr.length + 1;
    const nextProject = projectArr.find(prj => prj.id === nextProjectId);

    const nextPrj = document.querySelector('.next-project');
    const nextPrjHeader = nextPrj.querySelector(".header");
    nextPrjHeader.innerHTML = nextProject.name.replace(nextProject.scriptLetter[0], `<span id="letter-o" class="accent">${nextProject.scriptLetter[0]}</span>`);
    nextPrjHeader.href = `/project.html?pid=${nextProjectId}`;

    const nextPrjButton = nextPrj.querySelector('.next-project-a');
    nextPrjButton.href = `/project.html?pid=${nextProjectId}`;
}

updateProjectHTML();
