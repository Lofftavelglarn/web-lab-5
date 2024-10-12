const newsContent1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
const newsContent2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";

const newsArticles = {
    "Новость 1": `${newsContent1}<br/>${newsContent2}`,
    "Новость 2": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias<br/>" + newsContent2,
    "Новость 3": `${newsContent1}<br/>${newsContent2}`
};

function createPopupElement(className) {
    const element = document.createElement("div");
    element.className = className;
    return element;
}

function createPopupHeader(text) {
    const header = document.createElement("h2");
    header.style.marginBottom = "20px";
    header.style.fontSize = "20px";
    header.innerHTML = text;
    return header;
}

function createPopupBody(text) {
    const body = document.createElement("div");
    body.innerHTML = text;
    return body;
}

function displayPopup(headerText, bodyText) {
    const wrapper = createPopupElement("popUpWrapper");
    const content = createPopupElement("popUp");

    const header = createPopupHeader(headerText);
    const body = createPopupBody(`${headerText}: ${bodyText}`);

    content.appendChild(header);
    content.appendChild(body);
    wrapper.appendChild(content);
    document.body.appendChild(wrapper);

    document.querySelector("main").style.opacity = 0.2;

    wrapper.addEventListener('click', function(e) {
        if (e.target === wrapper) {
            wrapper.remove();
            document.querySelector("main").style.opacity = 1.0;
        }
    });
}

function getNewsHeader(element) {
    const newsBlock = element.closest(".newsBox");
    return newsBlock.querySelector(".newsBoxHeader > h2");
}

function showPopup(clicked) {
    if (!document.querySelector(".popUp")) {
        const header = getNewsHeader(clicked);
        displayPopup(header.textContent, newsArticles[header.textContent.trim()]);
    }
}
