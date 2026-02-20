const nameHeaders = document.querySelectorAll('.name-header');
nameHeaders.forEach(header => {
    header.addEventListener('click', function() {
        window.open('https://account.venmo.com/u/S0LsTice3', '_blank');
    });
});

function showPage (pageId, evt) {
    document.querySelectorAll('.page, .page-active').forEach(page => {
        page.classList.remove('page-active');
        page.classList.add('page');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('page');
        targetPage.classList.add('page-active');
    }

    document.querySelectorAll('.page-btn button').forEach(btn => {
        btn.classList.remove('toggle-active');
        btn.classList.add('toggle');
    });
    if (evt && evt.target) {
        evt.target.classList.remove('toggle');
        evt.target.classList.add('toggle-active');
    }
}

const contentData = {
year2025: {
    html: `
      <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
      {
        id: 'adVideo',
        title: 'Wonderful Pistachio Adpocalyse Ad Video',
        description: 'School project made by Maximo, Melissa, Nicole, and Me in December, 2025.',
        image:'',
        detailedInfo: {
          title: 'Wonderful Pistachio Adpocalyse Ad Video -- December, 2025',
          videoURL:'../COMD 2320 Final Clips/Final Cuts/Wonderful Pistachio Final Chen, Sally_v2.mp4',
          content: `
            <div class="video-container">
                <video controls>
                    <source src="../COMD 2320 Final Clips/Final Cuts/Wonderful Pistachio Final Chen, Sally_v2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="project-info">
              <p><strong>Editing: </strong>Sally Chen</p>
              <p><strong>Camera: </strong>Melissa</p>
              <p><strong>Actors: </strong>Maximo, Sally Chen</p>
              <p><strong>Script Supervisor: </strong>Nicole Mo</p>
            </div>
            <div class="project-description">
              <p>This is a final assignment for a video class where we are given the prompt of making an ad under a minute for Wonderful Pistachio. The ad should emphasize the brand motif of pistachios being the healthier alternative snack and the slogan "get crunchin'". All audio and image used in this video are open source.</p>
            </div>
        `,
        },
        art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
      },
      {
        id:'tradingApp',
        title:'GeekOut Collectables Mobile Trading App',
        image:'../Figma UiUx Projects/GeekOut - Anime_Comic Merch Mobile Trading App/Mobile Trading App for Anime_Comic Merch_Phone Demo.png',
        description:'Ui/Ux design for an online selling platform catered to fans of pop culture franchises on Figma.',
        detailedInfo: {
            title:'GeekOut Mobile Online Trading App -- December, 2025',
            images: [
            '../Figma UiUx Projects/GeekOut - Anime_Comic Merch Mobile Trading App/Mobile Trading App for Anime_Comic Merch.png',
            '../Figma UiUx Projects/GeekOut - Anime_Comic Merch Mobile Trading App/Mobile Trading App for Anime_Comic Merch_Phone Demo.png'
            ],
            content:`
            <div class="project-info">
                <p><strong>Project by me</strong></p>
                <p><strong>Made with: </strong>Figma</p>
            </div>
            <div class="project-description">
                <p>Mock app designed to facilitate user navigation and minimize the overt display of ads and promotion that is prevalent on similar applications. The ads on the home page and other icons are reused assets from a previous school assignment.</p>
            </div>
        `,
        },
        art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
      },
      {
        id:'lampDesign',
        title:'Product Design: Pedant Lamp Mockup',
        image:'../',
        description:'School project of a pedant lamp mockup made using paper and a 3D model of it made using AutoCad Fusion.',
        detailedInfo: {
            title:'Pedant Lamp Mockup -- November, 2025',
            images: [
                '../'
            ],
            content:`
            <div class="project-info">
                <p><strong>Project by me</strong></p>
                <p><strong>Made with: </strong>paper, AutoCad Fusion</p>
            </div>
            <div class="project-description">
                <p>School project that requires the paper mockup to be made from a random pattern of either rectangles or triangles cut out of an A4 paper determined by a lottery number. I received one that asked for the lamp to be made out of 4 rectangular strips per paper and we are not allowed to use any glue or to cut the paper into any other shape. After I made the paper mockup, I Photoshopped the lamp into different environments to demonstrate its compatibility and make a 3D model of it in AutoCad Fusion. I have future plans to make the lamp with a 3D printer and replace the bulky light bulb with a LED flat ceiling light as well as adding RGB features in the rods of the lamp.'</p>
            </div>
            `,
        },
        art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
    },
    {
        id:'graphicPoster',
        title:'Personal Project Graphic Presentation Poster',
        image:'../IND2313 Final Poster/IND2313_Final_Poster2.0.jpg',
        description:'Initially a presentation poster for a class finals, I replaced some elements to make it about my personal projects for the year.',
        detailedInfo: {
            title:'Personal Project Graphic Poster -- November, 2025',
            image:'../IND2313 Final Poster/IND2313_Final_Poster2.0.jpg',
            content: `
            <div class="project-info">
                <p><strong>Project by me</strong></p>
                <p><strong>Made with: </strong>Adobe Illustrator</p>
            </div>
            <div class="project-description">
                <p>Originally a finals presentation poster for a class that displays all the work I've done for the specific class, I revamp the design and replaced some of the images to encapsulate all the projects I've done for the year up to November.</p>
            </div>
            `,
        },
        art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
    },
    {
        id:'WhispAR',
        title:'WhispAR AR text interactive community wall',
        image:'../COMD Futures Poster/Sample with text.png',
        description:'Undergraduate research project where I partnered with two other zealous designers to make an interactive AR website that allows students to anonymously send and view messages from others displayed on the 3D modeled community wall, which appears after the student scan an anchor object using the website.',
        detailedInfo: {
            title:'WhispAR AR Web-Based Interactive Community Wall -- November, 2025',
            images: [
                '../COMD Futures Poster/Final_Poster.png',
                '../COMD Futures Poster/Sample with Text.png',
                '../COMD Futures Poster/'
            ],
            content: `
            <div class="project-info">
                <p><strong>Coding & Abstract: </strong>Amir Gamble</p>
                <p><strong>Poster Design & Concept Development: </strong>Isabela Ramos</p>
                <p><strong>Poster Editing & 3D Modeling: </strong>Sally Chen</p>
                <p><strong>Made with: </strong>GitHub, Figma, Adobe InDesign, and Blender</p>
            </div>
            <div class="project-description">
                <p>WhispAR is an undergraduate research project where I collab with two other zealous artists to create a web-based AR application that allows users to scan an anchor object we set up around campus and trigger the AR community wall that displays an anonymous message from another student. Users can submit their own anonymous message and have it displayed on the wall for all to see when the wall updates the message by order of submission hourly. Our purpose is to exploring the boundary of human-technology interaction in a curated experience that uses technology to bring people closer in person.</p>
                <p>Check out our project <a href="">here</a>.</p>
            </div>
            `,
        },
        art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
    }
    ]
},
year2024: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        {
            id:''
        }
    ]
},
year2023: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        {
            id:''
        }
    ]
},
year2022: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        {
            id:''
        }
    ]
}
};

function loadContent(contentKey) {
    const contentSect = document.getElementById('contentArea');
    const content = contentData[contentKey];
    if (!content) return;

    contentSect.style.animation ='none';

    setTimeout(() => {
        contentSect.innerHTML = content.html;
        contentSect.style.animation = 'fadeIn 0.5s ease';

        if (content.items) {
            renderClickableItems(content.items);
        }
    }, 50);
}

function renderClickableItems(items) {
    const container = document.getElementById('clickable-container');
    if (!container) return;
    container.innerHTML = '';

    items.forEach(item => {
        if (!item.id) return;
        const itemElement = document.createElement('div');
        itemElement.className = 'clickable-item';

        let imageHTML = item.image ? `<img src="${item.image}" alt="${item.title}" class="item-thumbnail">` : '';

        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            ${imageHTML}
            <p>${item.description}</p>
            <pre>${item.art}</pre>
        `;
        itemElement.addEventListener('click', () => {
            showProjectDetails(item.detailedInfo);
        });
        container.appendChild(itemElement);
    });
}

function showProjectDetails(detailedInfo) {
    const modal = document.getElementById('modalPopup');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = detailedInfo.title;

    let loadImages = detailedInfo.images || (detailedInfo.image ? [detailedInfo.image] : []);
    //loadImages = loadImages.filter(src => src && src !== '' && src !== '../');
    let imagesHTML = '';

    if (loadImages.length > 0) {
        imagesHTML = `
            <div class="loop-project-images">
            ${loadImages.length > 1 ? '<button class="img-prev-btn">◄</button>' : ''}
                <div class="project-images">
                ${loadImages.map((src, index) => 
                    `<img src="${src}" alt="${detailedInfo.title}" class="project-image ${index === 0 ? 'active' : ''}" data-index="${index}">`
                    ).join('')}
                </div>
                ${loadImages.length > 1 ? '<button class="img-nxt-btn">►</button>' : ''}
            </div>
        `;
    }

    body.innerHTML = imagesHTML + detailedInfo.content;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (loadImages.length > 1) {
        let currIndex = 0;
        const imageElements = body.querySelectorAll('.project-image');
        const prevBtn = body.querySelector('.img-prev-btn');
        const nextBtn = body.querySelector('.img-nxt-btn');

        function showImage(index) {
            imageElements.forEach(img => img.classList.remove('active'));
            imageElements[index].classList.add('active');
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currIndex = (currIndex - 1 + loadImages.length) % loadImages.length;
                showImage(currIndex);
            });
            nextBtn.addEventListener('click', () => {
                currIndex = (currIndex + 1) % loadImages.length;
                showImage(currIndex);
            });
        }
    }
}

function closeModal() {
    document.getElementById('modalPopup').classList.remove('is-open');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalPopup').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});

function sortDropdownDesc(dropdownList) {
    const items = Array.from(dropdownList.querySelectorAll('.dropdown-item'));

    items.sort((a, b) => {
        const numA = parseInt((a.querySelector('.dropdown-year').getAttribute('data-content')).replace('year', ''));
        const numB = parseInt((b.querySelector('.dropdown-year').getAttribute('data-content')).replace('year', ''));

        if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
        return 0;
    });

    items.forEach(item => dropdownList.appendChild(item));
}

document.addEventListener('DOMContentLoaded', function() {
    loadContent('year2025');

    const navDropdown = document.querySelector('.nav-dropdown');
    const dropdownList = document.querySelector('.dropdown-list');

    dropdownList.addEventListener('click', function(e) {
        const selected = e.target.closest('.dropdown-year');
        if (!selected) return;
        e.preventDefault();

        const selectedKey = selected.getAttribute('data-content');
        loadContent(selectedKey);

        const selectedPre = selected.querySelector('pre');
        const navPre = navDropdown.querySelector('pre');

        const selectedText = selectedPre.textContent.trim();
        const navText = navPre.textContent.replace(' ▼', '').trim();
        const parentKey = navDropdown.getAttribute('data-content');

        selectedPre.textContent = navText;
        selected.setAttribute('data-content', parentKey);

        navPre.textContent = selectedText + ' ▼';
        navDropdown.setAttribute('data-content', selectedKey);

        sortDropdownDesc(dropdownList);

        const contentArea = document.getElementById('contentArea');
        if (contentArea) {
            contentArea.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    });

    navDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        loadContent(this.getAttribute('data-content'));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.form-group');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            alert(`Thank you, ${name} for your submission. Your message has been received.\n\nWe'll respond to you shortly.`);

            contactForm.reset();
        });
    }
});
