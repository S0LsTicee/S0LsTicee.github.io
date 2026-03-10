const nameHeaders = document.querySelectorAll('.name-header');
nameHeaders.forEach(header => {
    header.addEventListener('click', function() {
        window.open('https://account.venmo.com/u/S0Lrius', '_blank');
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
year2026: {
    html: `
      <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
     {
        id:'PromoRedesign',
        title:'Forbes Life Watch Promo Editorial Redesign',
        image:'https://raw.githubusercontent.com/S0LsTicee/S0Lrius.github.io/assets/Artworks/Watch_Promo_Redesign_Dark3.0.png',
        description:'',
        detailedInfo: {
            title:'Forbes Life Watch Promo Editorial Redesign -- Feburary, 2026',
            images: [
                'https://raw.githubusercontent.com/S0LsTicee/S0Lrius.github.io/assets/Artworks/Watch_Promo_Redesign_Dark3.0.png',
                'https://raw.githubusercontent.com/S0LsTicee/S0Lrius.github.io/assets/Artworks/Watch_Redesign_Original.jpg'
            ],
            content:`
            <div class="project-info">
                    <p><strong>Project by me </strong></p>
                    <p><strong>Made with: </strong>Adobe InDesign, Photoshop</p>
                </div>
                <div class="project-description">
                    <p></p>
            `
        },
        art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
     }
    ]
},
year2025: {
    html: `
      <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
      {
        id: 'adVideo',
        title: 'Wonderful Pistachio Adpocalyse Ad Video',
        description: 'School project made by Maximo, Melissa, Nicole, and Me in December, 2025.',
        image:'/assets/Artworks/Wonderful_Pistachio_Ad_Thumbnail.png',
        detailedInfo: {
          title: 'Wonderful Pistachio Adpocalyse Ad Video -- December, 2025',
          videoURL:'/assets/Artworks/Wonderful Pistachio Final Chen, Sally_v2.mp4',
          content: `
            <div class="video-container">
                <video controls>
                    <source src="/assets/Artworks/Wonderful Pistachio Final Chen, Sally_v2.mp4">
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
        image:'/assets/Artworks/Mobile Trading App for Anime_Comic Merch_Phone Demo.png',
        description:'Ui/Ux design for an online selling platform catered to fans of pop culture franchises on Figma.',
        detailedInfo: {
            title:'GeekOut Mobile Online Trading App -- December, 2025',
            images: [
            '/assets/Artworks/Mobile Trading App for Anime_Comic Merch.png',
            '/assets/Artworks/Mobile Trading App for Anime_Comic Merch_Phone Demo.png'
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
        image:'/assets/Artworks/Pedant_Lamp_Model_Diagonal.png',
        description:'School project of a pedant lamp mockup made using paper and a 3D model of it made using AutoCad Fusion.',
        detailedInfo: {
            title:'Pedant Lamp Mockup -- November, 2025',
            images: [
                '/assets/Artworks/Pedant_Lamp_Model_Diagonal.png',
                '/assets/Artworks/Pedant_Lamp_Model_TopDiagonal.png',
                '/assets/Artworks/Pedant_Lamp_Model_Side.png',
                '/assets/Artworks/Pedant_Lamp_Model_Side2.png',
                '/assets/Artworks/Pedant_Lamp_Model_TopDiagonal2.png',
                '/assets/Artworks/Pedant_Lamp_Model_LowerDiagonal.png'
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
        image:'/assets/Artworks/IND2313_Final_Poster4.0.png',
        description:'Initially a presentation poster for a class finals, I replaced some elements to make it about my personal projects for the year.',
        detailedInfo: {
            title:'Personal Project Graphic Poster -- November, 2025',
            image:'/assets/Artworks/IND2313_Final_Poster4.0.png',
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
        image:'/assets/Artworks/Sample with text.png',
        description:'Undergraduate research project where I partnered with two other zealous designers to make an interactive AR website that allows students to anonymously send and view messages from others displayed on the 3D modeled community wall, which appears after the student scan an anchor object using the website.',
        detailedInfo: {
            title:'WhispAR AR Web-Based Interactive Community Wall -- November, 2025',
            images: [
                '/assets/Artworks/Final_Poster.png',
                '/assets/Artworks/Sample with Text.png'
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
    },
    {
        id:'NaturePhotos',
        title:'Nature Photography',
        image:'/assets/Artworks/White_Pink_Flower.png',
        description:'Photographs taken at the Brooklyn Botanic Garden and Seaside Wildlife Park on Staten Island.',
        detailedInfo: {
            title:'Nature Photography on Flowers and Wildlife -- March-May, 2025',
            images: [
                '/assets/Artworks/Orange_Flower.png',
                '/assets/Artworks/White_Flower.png',
                '/assets/Artworks/White_Pink_Flower.png',
                '/assets/Artworks/Goose_Eating.jpg',
                '/assets/Artworks/Goose_In_Water.jpg',
                '/assets/Artworks/Slanted_Dock.jpg',
                '/assets/Artworks/Sun-Bathing_Swans.jpg',
                '/assets/Artworks/Thru_The_Window.jpg',
                '/assets/Artworks/Two_Swans.jpg'
            ],
            content: `
            <div class="project-info>
                <p><strong>Photographed by me</strong></p>
                <p><strong>Camera: </strong>Canon R06 Mark II</p>
                <p><strong>Post Processing: </strong>Adobe Lightroom</p>
            </div>
            <div class="project-description">
                <p></p>
            </div>
            `
        },
        art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
    },
    {
        id:'StreetPhotos',
        title:'NYC Street Photography',
        image:'/assets/Artworks/IMG_1105.jpg',
        description:'Photographs of pedestrians on rainy days at the Washington Square Park and Times Square.',
        detailedInfo: {
            title:'NYC Street Photography on Rainy Days -- May, 2025',
            images: [
                '/assets/Artworks/IMG_0936-2.jpg',
                '/assets/Artworks/IMG_0966.jpg',
                '/assets/Artworks/IMG_0986.jpg',
                '/assets/Artworks/IMG_1070.jpg',
                '/assets/Artworks/IMG_1096.jpg',
                '/assets/Artworks/IMG_1105.jpg',
                '/assets/Artworks/IMG_1107.jpg',
                '/assets/Artworks/IMG_1119.jpg'
            ],
            content: `
            <div class="project-info">
                <p><strong>Photos by me</strong></p>
                <p><strong>Camera: </strong>Canon R06 Mark II</p>
                <p><strong>Post Processing: </strong>Adobe Lightroom</p>
            </div>
            <div class="project-description">
                <p></p>
            </div>
            `
        },
        art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
    }
    ]
},
year2024: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        {
            id:'PSAPosters',
            title:'PSA Posters On Global Warming & climate Change',
            image:'/assets/Artworks/PSA Mockups.png',
            description:'Posters and infographic on the stastistics and effect of climate change.',
            detailedInfo: {
                title:'Climate Change PSA Posters -- December, 2024',
                images: [
                    '/assets/Artworks/Global Warming Poster PSA conflict.png',
                    '/assets/Artworks/Global Warming Poster PSA Insulin.png',
                    '/assets/Artworks/Global Warming Poster PSA Ticking Bomb.png',
                    '/assets/Artworks/PSA Mockups.png'
                ],
                content: `
                <div class="project-info">
                    <p><strong>Project by me</strong></p>
                    <p><strong>Made with: </strong>Adobe Photoshop, Illustrator</p>
                </div>
                <div class="project-description">
                    <p>PSA poster design project that emphasizes on communication a call for action utilizing attention-grabbing and relatble imagery. For the three posters, I decided to make a series with the latter two, comparing the deterioating state of the Earth's environment to dire health conditions people suffer from. I intend for the first poster to be an infographic, educating the viewers with real data and interesting graphics to raise awareness.</p>
                </div>
                `,
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'TradingAppAds',
            title:'GeekOut Mobile Trading App Social Media Promo & Ads',
            image:'/assets/Artworks/Social Media Post Mockups 02.png',
            description:'Graphic design Instagram and Twitter posts to appeal to the young demographic and pastel colored billboards to match the casual and carefree vibe of the app and its alignment to a place to find "treasure" in an adventure.',
            detailedInfo: {
                title:'GeekOut Mobile Trading App Social Media Posts & Billboard Ads -- October, 2024',
                images: [
                    '/assets/Artworks/Missing_Piece_Meme_Twitter_Ad_01.png',
                    '/assets/Artworks/RPG_Shop_IG_Ad.png',
                    '/assets/Artworks/Social Media Post Mockups 01.png',
                    '/assets/Artworks/Social Media Post Mockups 02.png',
                    '/assets/Artworks/Product_Ad_Billboard_1.png',
                    '/assets/Artworks/Product_Ad_Billboard_2.png',
                    '/assets/Artworks/Product_Ad_Billboard_3.png'
                ],
                content: `
                <div class="project-info">
                    <p><strong>Project by me</strong></p>
                    <p><strong>Made with: </strong>Adobe Photoshop, Illustrator</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'WebMenuDesign',
            title:'Cafe Menu Design & Web Design with HTML & CSS',
            image:'/assets/Artworks/CrashOut_Cafe_Menu_Header.jpg',
            description:'Two styles of menus---minimalistic and modern, with one designed for print and one for web interface.',
            detailedInfo: {
                title:'Cafe Menu Design for Print and for Web --- November, 2024',
                images: [
                    '/assets/Artworks/CrashOut_Cafe_Menu_Continuous.jpg',
                    '/assets/Artworks/.'
                ],
                content: `
                <div class="project-info">
                    <p><strong>Project by me</strong></p>
                    <p><strong>Made with: </strong>Adobe InDesign, Illustrator, VSCode</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'PSProject',
            title:'Grasping Time',
            image:'/assets/Artworks/PS_Grasping_Time.jpg',
            description:'',
            detailedInfo: {
                title:'Grasping Time -- October, 2024',
                image:'/assets/Artworks/PS_Grasping_Time.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Project by me </strong></p>
                    <p><strong>Made with: </strong>Photoshop</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'NYCMural',
            title:'NYC Infrastructors & Federal Buildings Wall Mural Concept',
            image:'/assets/Artworks/NYC_Mural_Art.jpg',
            description:'Wall mural concept art that I helped with while interning at DCAS facilities management department.',
            detailedInfo: {
                title:'NYC Infrastructure & Federal Buildings Wall Mural Concept Art at DCAS Facilities Management Department -- August, 2024',
                image:'/assets/Artworks/NYC_Mural_Art.jpg',
                content: `
                <div class="project-info">
                    <p><strong>Project by me</strong></p>
                    <p><strong>Made with: </strong>Adobe Illustrator, Photoshop</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art: `╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'CrocsDisplayDesign',
            title:'Saleem Bembury Crocs Ad Display Background',
            image:'/assets/Artworks/Saleem_Bembury_Crocs.jpg',
            description:'',
            detailedInfo: {
                title:'Saleem Bembury Crocs Ad Display Background -- May, 2024',
                image:'/assets/Artworks/Saleem_Bembury_Crocs.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Project by me</strong></p>
                    <p><strong>Made with: </strong>Adobe Illustrator</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'UnicornMixedMedia',
            title:'Evolution of an Unicorn',
            image:'/assets/Artworks/Evolution_of_Unicorn.jpg',
            description:'Mixed media painting imagining the transformation process of an unicorn as it ages. It was created as a drawing final that requires the piece to be inspired by a work at the MET Cloisters; this piece was inspired by "The Hunt of the Unicorn".',
            detailedInfo: {
                title:'Evolution of an Unicorn -- May, 2024',
                image:'/assets/Artworks/Evolution_of_Unicorn.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Charcoal, Ink, and Gouache</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'MeltingMinds',
            title:'Melting Minds',
            image:'/assets/Artworks/Melting_Minds.jpg',
            description:'This piece is a product of a brainstorming exercise where we picked three verbs from a box and make a piece incorporating all three. I got the verbs melting, thinking, and squating.',
            detailedInfo: {
                title:'Melting Minds -- April, 2024',
                image:'/assets/Artworks/Melting_Minds.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Gouache</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'BreakingThrough',
            title:'Escape Plan',
            image:'/assets/Artworks/Breaking_Through.jpg',
            description:'A reimagined piece based on "The Hunt of the Unicorn" exhibited at the MET Cloisters. The piece depicts the unicorn\\\'s strive to break out of the fence and avoid its demise.',
            detailedInfo: {
                title:'Escape Plan -- April, 2024',
                image:'/assets/Artworks/Breaking_Through.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Gouache</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        /*{
            id:'CreativePortrait',
            title:'Mermaid Themed Portrait Painting Study',
            image:'/assets/Artworks/Creative_Portrait.jpg',
            description:'',
            detailedInfo: {
                title:'Mermaid Themed Portrait Painting Study -- April, 2024',
                image:'/assets/Artworks/Creative_Portrait.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },*/
        {
            id:'NYCRat',
            title:'NYC Rat',
            image:'/assets/Artworks/NYC_Rat.jpg',
            description:'Painting of the rat performer in NYC. The use of highly saturated bright colors complemented the absurd premise of the piece.',
            detailedInfo: {
                title:'NYC Rat -- March, 2024',
                image:'/assets/Artworks/NYC_Rat.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Mediium: </strong>Gouache</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'BubbleWrap',
            title:'Wrapped Memories',
            image:'/assets/Artworks/Wrapped_Memories.jpg',
            description:'The bubble wrap textured surface and the reduction of the character\\\'s eyes suggests something carefully kept by its owner, but still succumbed to decay over time.',
            detailedInfo: {
                title:'Wrapped Memories -- March, 2024',
                image:'/assets/Artworks/Wrapped_Memories.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on Canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        }
    ]
},
year2023: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        /*{
            title:'Train Through the Wilderness',
            image:'/assets/Artworks/Train_Thru_The_Wild.jpg',
            description:'',
            detailedInfo: {
                title:'Train Through the Wilderness -- December, 2023',
                image:'/assets/Artworks/Train_Thru_The_Wild.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },*/
        {
            id:'ReflectionPainting',
            title:'Reflection in the City Rain',
            image:'/assets/Artworks/Reflection.jpg',
            description:'',
            detailedInfo: {
                title:'Reflection in the City Rain -- December, 2023',
                image:'/assets/Artworks/Reflection.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'PaintingPortrait',
            title:'Portrait Study of a Naked Woman',
            image:'/assets/Artworks/Portrait_Study.jpg',
            description:'',
            detailedInfo: {
                title:'Portrait Study of a Naked Woman -- December, 2023',
                image:'/assets/Artworks/Portrait_Study.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'CafeSketch',
            title:'Cafe & Camera',
            image:'/assets/Artworks/Cafe & Camera Still Life Sketch.jpg',
            description:'',
            detailedInfo: {
                title:'Wrapped Memories -- December, 2023',
                image:'/assets/Artworks/Cafe & Camera Still Life Sketch.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pencil on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'AnotherDimension',
            title:'From Home to Home',
            image:'/assets/Artworks/Inside Another Dimension.jpg',
            description:'',
            detailedInfo: {
                title:'From Home to Home -- December, 2023',
                image:'/assets/Artworks/Inside Another Dimension.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Colored charcoal & ink on paper</p>
                    <p><strong>Dimension: </strong>28in x 33in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'MechanicalHuman',
            title:'From Human 2 Machine',
            image:'/assets/Artworks/From_Human_2_Machine.jpg',
            description:'',
            detailedInfo: {
                title:'From Human 2 Machine -- December, 2023',
                image:'/assets/Artworks/From_Human_2_Machine.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Colored charcoal on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'ShoppingBag',
            title:'Recycled Shopping Bag',
            image:'/assets/Artworks/Shopping_Bag_Front.jpg',
            description:'',
            detailedInfo: {
                title:'Recycled Shopping Bag -- December, 2023',
                images: [
                    '/assets/Artworks/Shopping_Bag_Front.jpg',
                    '/assets/Artworks/Shopping_Bag_Zipped.jpg',
                    '/assets/Artworks/Shopping_Bag_Back.jpg',
                    '/assets/Artworks/Shopping_Bag_Side.jpg'
                ],
                content:`
                <div class="project-info">
                    <p><strong>Made by me </strong>Acrylic on canvas</p>
                    <p><strong>Materials: </strong>Jeans, plastic transparent film, colored pencil on paper</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'InkPortrait',
            title:'Ink & Charcoal Portrait Speed-Draw',
            image:'/assets/Artworks/Ink Charcoal Portrait.jpg',
            description:'',
            detailedInfo: {
                title:'Ink & Charcoal Portrait Speed-Draw -- November, 2023',
                image:'/assets/Artworks/Ink Charcoal Portrait.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Charcoal, black & blue ink on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'SketchPortrait',
            title:'Pencil Sketch Portrait',
            image:'/assets/Artworks/Pencil Sketch.jpg',
            description:'',
            detailedInfo: {
                title:'Pencil Sketch Portrait of a Middle-Aged Man -- November, 2023',
                image:'/assets/Artworks/Pencil Sketch.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pencil on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description">
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'LightPainting',
            title:'Light Up',
            image:'/assets/Artworks/Light_Up.jpg',
            description:'',
            detailedInfo: {
                title:'Light Up -- November, 2023',
                image:'/assets/Artworks/Light_Up.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description">
                    <p></p>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'StillLife',
            title:'Still Life Study',
            image:'/assets/Artworks/Still Life Sketch.jpg',
            description:'',
            detailedInfo: {
                title:'Still Life Pencil Study -- October, 2023',
                image:'/assets/Artworks/Still Life Sketch.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pencil on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'FlowerSketch',
            title:'Dark Value Contrast Still Life Study',
            image:'/assets/Artworks/Flower Still Life Sketch.jpg',
            description:'',
            detailedInfo: {
                title:'Dark Value Contrast Still Life Study -- October, 2023',
                image:'/assets/Artworks/Flower Still Life Sketch.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pencil on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'BirdBox',
            title:'Bird Box Time Machine',
            image:'/assets/Artworks/Bird_Box_Closed.jpg',
            description:'',
            detailedInfo: {
                title:'Bird Box Time Machine -- June, 2023',
                images: [
                    '/assets/Artworks/Bird_Box_Closed.jpg',
                    '/assets/Artworks/Bird_Box_Open.jpg',
                    '/assets/Artworks/Bird_Box_Back.jpg',
                    '/assets/Artworks/Bird_Box_Inside.jpg',
                    '/assets/Artworks/Bird_Box_ZoomedIn.jpg'
                ],
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Oakwood, ceramics, cotton and cloth.</p>
                    <p><strong>Dimension: </strong>10in x 28in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'NatureMixedMedia',
            title:'Recipricate',
            image:'/assets/Artworks/Recipricate_Nature.jpg',
            description:'',
            detailedInfo: {
                title:'Recipricate -- May, 2023',
                image:'/assets/Artworks/Recipricate_Nature.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Mixed media</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        /*{
            id:'FromMePainting',
            title:'Sweet Bliss of Labor',
            image:'/assets/Artworks/Sweet_Bliss.jpg',
            description:'',
            detailedInfo: {
                title:'Sweet Bliss of Labor -- May, 2023',
                image:'/assets/Artworks/Sweet_Bliss.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylic on canvas</p>
                    <p><strong>Dimension: </strong>24in x 36in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },*/
        {
            id:'RainyAlleySumiE',
            title:'Old Alley in the Rain',
            image:'/assets/Artworks/Old_Ally_InThe_Rain.jpg',
            description:'',
            detailedInfo: {
                title:'Old Alley in the Rain -- April, 2023',
                image:'/assets/Artworks/Old_Ally_InThe_Rain.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Sumi-e ink on rice paper</p>
                    <p><strong>Dimension: </strong>12in x 16in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        }
    ]
},
year2022: {
    html:`
        <div class="clickable-items" id="clickable-container"></div>
    `,
    items: [
        {
            id:'DistantMirage',
            title:'Distant Mirage',
            image:'/assets/Artworks/Distant_Mirage.jpg',
            description:'',
            detailedInfo: {
                title:'Distant Mirage -- December, 2022',
                image:'/assets/Artworks/Distant_Mirage.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Watercolor on paper</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'KoiFish',
            title:'Koi Fish in Pond',
            image:'/assets/Artworks/Koi_Fish_SumiE.jpg',
            description:'',
            detailedInfo: {
                title:'Koi Fish in Pond -- November, 2022',
                image:'/assets/Artworks/Koi_Fish_SumiE.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Sumi-e ink on rice paper</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'PistachioCeramic',
            title:'Two Pistachios Trompe L\\\'oeil',
            image:'/assets/Artworks/Pistachio_Ceramic.jpg',
            description:'',
            detailedInfo: {
                title:'Two Pistachios Trompe L\\\'oeil -- November, 2022',
                image:'/assets/Artworks/Pistachio_Ceramic.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Ceramics</p>
                    <p><strong>Dimension: </strong>3in x 9in x 7in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'NaraCharcoal',
            title:'*Deer* Nara Island',
            image:'/assets/Artworks/Nara_Island_Charcoal.jpg',
            description:'',
            detailedInfo: {
                title:'*Deer* Nara Island -- October, 2022',
                image:'/assets/Artworks/Nara_Island_Charcoal.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Charcoal on paper</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'KleinBottle',
            title:'Klein Bottle',
            image:'/assets/Artworks/Klein_Bottle.jpg',
            description:'',
            detailedInfo: {
                title:'Klein Bottle -- October, 2022',
                image:'/assets/Artworks/Klein_Bottle.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Ceramics</p>
                    <p><strong>Dimension: </strong>10in x 11in x 25in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'TornInBetween',
            title:'Torn in Between',
            image:'/assets/Artworks/Torn_in_Between.jpg',
            description:'',
            detailedInfo: {
                title:'Torn in Between -- October, 2022',
                image:'/assets/Artworks/Torn_in_Between.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pen & ink on paper</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'NYCGraffiti',
            title:'Art of the New York People',
            image:'/assets/Artworks/NYC_Graffiti.jpg',
            description:'',
            detailedInfo: {
                title:'Art of the New York People -- September, 2022',
                image:'/assets/Artworks/NYC_Graffiti.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pen & ink on paper</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'MomentoMori',
            title:'Still Life Momento Mori',
            image:'/assets/Artworks/Still_Life_Momento_Mori.jpg',
            description:'',
            detailedInfo: {
                title:'Still Life Momento Mori -- September, 2022',
                image:'/assets/Artworks/Still_Life_Momento_Mori.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Acrylics on canvas</p>
                    <p><strong>Dimension: </strong>9in x 12in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
        },
        {
            id:'ToTheBeat',
            title:'To The Beat',
            image:'/assets/Artworks/To_the_Beat.jpg',
            description:'',
            detailedInfo: {
                title:'To The Beat -- August, 2022',
                image:'/assets/Artworks/To_the_Beat.jpg',
                content:`
                <div class="project-info">
                    <p><strong>Medium: </strong>Pen & ink on paper</p>
                    <p><strong>Dimension: </strong>18in x 24in</p>
                </div>
                <div class="project-description>
                    <p></p>
                </div>
                `
            },
            art:`╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧╧`
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

function openImgFullScreen(src, alt) {
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-img-overlay';
    overlay.innerHTML = `<img src="${src}" alt="${alt}" class="fullscreen-image">`;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });

    const imageEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', imageEscape);
        }
    };
    document.addEventListener('keydown', imageEscape);
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

    const imageElements = body.querySelectorAll('.project-image');
    imageElements.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openImgFullScreen(img.src, detailedInfo.title);
        });
    });
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
    loadContent('year2026');

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

