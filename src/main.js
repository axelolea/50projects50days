const projectSection = document.getElementById("projects-section");

const data = fetch("./src/days-info.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCardsProjects(data);
  });

async function createCardsProjects(data) {
  const links = data["links"];
  projects = "";
  data["projects"].forEach((project) => {
    projects += cardStructure(project, links);
  });
  projectSection.innerHTML = projects;
}

function cardStructure(project, links) {
  const card = `
  <div>
    <span class="title-day">Day ${project["number"]}</span>
    <img src="${project["photo"]}" alt="Day ${project["number"]}" />
    <div class="card-body">
      <span class="card-title">${project["name"]}</span>
      <div class="buttons">
        <a href="${
          links["general-demo-link"] + project["folder-name"]
        }" class="btn btn-primary">
          Demo
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
        <a href="${
          links["general-repo-link"] + project["folder-name"]
        }" class="btn btn-secondary">
          Code
          <i class="bi bi-code"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  return card;
}
