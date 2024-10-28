// A script that generates html content dynamically by data

import {descriptionBackground, descriptionGameProjects, descriptionGameTools, descriptionOtherProjects} from "./descriptionData.js";
import {gameProjects, gameTools, otherProjects} from "./projectData.js";

const contentContainer = document.getElementById('content');
document.addEventListener('DOMContentLoaded', renderContent);

function renderContent() 
{
    renderContentDescription(descriptionBackground);
    renderContentDescription(descriptionGameProjects);
    renderProjects(gameProjects);
    renderContentDescription(descriptionGameTools);
    renderProjects(gameTools);
    renderContentDescription(descriptionOtherProjects);
    renderProjects(otherProjects);
}

function renderContentDescription(description)
{
    if (!contentContainer)
    {
        console.error(`Container is undefined.`);
        return;
    }

    contentContainer.innerHTML += createContentDescriptionSection(description.title, description.descriptions);
}

function renderProjects(projects) 
{
    if (!contentContainer) 
    {
        console.error(`Container is undefined.`);
        return;
    }

    projects.forEach(project =>
    {
        contentContainer.innerHTML += createProjectSection(project.imageSrc, project.imageDataSrc, project.title, project.descriptions, project.links);
    });
}

function createContentDescriptionSection(title, descriptions)
{
    return `
    <section class="content_description_section">
        <div class="content_description_title_div">
            <p class="normal_text"><span class="highlighted_text">${title}</span></p><br>
        </div>
        <div class="content_description_text_div">
            ${descriptions.map((desc, index) => `<p class="normal_text">${desc}</p>${index < descriptions.length - 1 ? '<br><br>' : ''}`).join('')}
        </div>
    </section>
    `;
}

function createProjectSection(imageSrc, imageDataSrc, title, descriptions, links) 
{
    return `            
        <section class="project_section">
            <div class="project_empty_div"></div>
            <section class="project_subsection">
                <div class="project_image_div">
                    <img class="project_image lazyload" src="${imageSrc}" data-src="${imageDataSrc}">
                </div>
                <div class="project_text_div">
                    <p class="project_title_text">${title}</p><br>
                        ${descriptions.map(desc => `<p class="project_text">${desc}</p><br>`).join('')}
                    <p class="project_text">
                        ${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="boxed_hyperlink">${link.text}</a>`).join(' ')}
                    </p>
                </div>
            </section>
        </section>
    `;
}