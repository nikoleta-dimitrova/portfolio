function createPreviewProject(project) {
    const container = document.createElement("a")
    container.className = "project-container"
    container.href = `./project.html?pid=${project.id}`

    const containerImg = document.createElement("img")
    const containerDetails = document.createElement("div")

    const projectTitle = document.createElement("p")
    projectTitle.innerHTML = project.name

    const projectFooter = document.createElement("div")

    project.tags.forEach(tag => {
        const projectTag = document.createElement("div")
        projectTag.className = "project-tag"
        const projectTagCircle = document.createElement("img")
        projectTagCircle.src = "./assets/circle-tag.svg"
        const projectTagName = document.createElement("p")
        projectTagName.innerHTML = tag

        projectTag.appendChild(projectTagCircle)
        projectTag.appendChild(projectTagName)

        projectFooter.appendChild(projectTag)
    })

    container.appendChild(containerImg)
    container.appendChild(containerDetails)

    containerDetails.appendChild(projectTitle)
    containerDetails.appendChild(projectFooter)

    return container
}

function createProjectHTML(project) {
    // Create the main container
    const container = document.createElement("section");
    container.id = "project-landing";

    // Create the headline section
    const headline = document.createElement("div");
    headline.className = "headline";
    const headlineDiv = document.createElement("div");

    const header = document.createElement("p");
    header.className = "header";
    header.innerHTML = project.name.replace(project.scriptLetter[0], `<span id="letter-o" class="accent">${project.scriptLetter[0]}</span>`);

    const headerDesc = document.createElement("p")
    headerDesc.className = "description"
    headerDesc.innerHTML = project.description

    const projectInfo = document.createElement("div");
    projectInfo.className = "project-information";

    const expertiseUl = document.createElement("ul")
    const expertiseP = document.createElement("p")
    expertiseP.innerHTML = "Expertise"
    expertiseUl.appendChild(expertiseP)
    project.expertise.forEach(exp => {
        const li = document.createElement("li")
        li.innerHTML = exp
        expertiseUl.appendChild(li)
    })
    projectInfo.appendChild(expertiseUl);


    const techUl = document.createElement("ul")
    const techP = document.createElement("p")
    techP.innerHTML = "Technology used"
    techUl.appendChild(techP)
    project.techUsed.forEach(exp => {
        const li = document.createElement("li")
        li.innerHTML = exp
        techUl.appendChild(li)
    })
    projectInfo.appendChild(techUl);

    const roleUl = document.createElement("ul")
    const roleP = document.createElement("p")
    roleP.innerHTML = "Role in project"
    roleUl.appendChild(roleP)
    project.roleInProject.forEach(exp => {
        const li = document.createElement("li")
        li.innerHTML = exp
        roleUl.appendChild(li)
    })
    projectInfo.appendChild(roleUl);

    headlineDiv.appendChild(header);
    headlineDiv.appendChild(headerDesc)
    headline.appendChild(headlineDiv);

    container.appendChild(headline);
    container.appendChild(projectInfo)

    document.body.appendChild(container)


    const firstParalax = document.createElement("section")
    firstParalax.id = "project-paralax"

    document.body.appendChild(firstParalax)

    project.bodyParagraphs.forEach(paragraph => {
        const sectionAbout = document.createElement("section")
        sectionAbout.id = "project-about"

        const description = document.createElement("div")
        description.className = "description-one"
        const descriptionTitle = document.createElement("div")
        const descriptionTitleImg = document.createElement("img")
        descriptionTitleImg.src = "./assets/opened-project-circle.svg"
        const descriptionTitleP = document.createElement("p")
        descriptionTitleP.innerHTML = paragraph.title
        descriptionTitle.appendChild(descriptionTitleImg)
        descriptionTitle.appendChild(descriptionTitleP)
        description.appendChild(descriptionTitle)
        
        const descriptionAbout = document.createElement("p")
        descriptionAbout.innerHTML = paragraph.body
        description.appendChild(descriptionAbout)
        
        sectionAbout.appendChild(description)

        const gallery = document.createElement("div")
        gallery.classList = "description-one-gallery"
        paragraph.images.forEach(image => {
            img = document.createElement("img")
            img.src = image
            gallery.appendChild(img)
        })

        sectionAbout.appendChild(gallery)

        document.body.appendChild(sectionAbout)

        const secondParalax = document.createElement("section")
        secondParalax.id = "project-paralax"
        document.body.appendChild(secondParalax)
    })

}

fetch('./assets/data.json')
    .then((response) => response.json())
    .then((projects) => {
        const queryString = window.location.search;
        if (queryString.includes("pid")) {
            const pid = queryString.replace("?pid=", "")
            console.log(projects)
            const project = projects.find(prj => prj.id.toString() === pid.toString())
            const html = createProjectHTML(project)
            const projectBody = document.getElementById("project-body")
            projectBody.appendChild(html)
        } else {
            projects.forEach(project => {
                projectHTML = createPreviewProject(project)
                document.querySelector(".projects-grid").appendChild(projectHTML)
            })
        }
    });