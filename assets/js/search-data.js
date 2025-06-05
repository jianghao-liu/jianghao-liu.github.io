// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You can also download the cv by clicking the button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-probing-the-unimaginable-new-data-help-to-understand-the-nature-of-aphantasia-paris-brain-institute",
        
          title: 'Probing the unimaginable: new data help to understand the nature of aphantasia |... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "“Think of a white sandy beach on a paradise island. Can you see it?” The ability to visualize a place, object, or place on request varies",
        section: "Posts",
        handler: () => {
          
            window.open("https://parisbraininstitute.org/news/probing-unimaginable-new-data-help-understand-nature-aphantasia", "_blank");
          
        },
      },{id: "post-the-connectional-anatomy-of-visual-mental-imagery",
        
          title: "The connectional anatomy of visual mental imagery",
        
        description: "the anatomical connection of the FIN",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/anatomy-fin/";
          
        },
      },{id: "post-the-interplay-of-attention-and-conscious-perception",
        
          title: "the interplay of attention and conscious perception",
        
        description: "the anatomical connection of the FIN",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/attention-consciousness/";
          
        },
      },{id: "post-besoin-de-volontaires-pour-une-étude-sur-l-imagination-en-irm",
        
          title: "Besoin de volontaires pour une étude sur l’imagination en IRM",
        
        description: "cherche des volontaires pour nos études sur l&#39;imagination",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/recruitment/";
          
        },
      },{id: "post-hemispheric-asymmetries-in-visual-mental-imagery",
        
          title: "hemispheric asymmetries in visual mental imagery",
        
        description: "review of evidence of neuroimaging, neurological patients and electrical stimulation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/vmi-laterality/";
          
        },
      },{id: "post-a-meta-analysis-of-neuroimaging-evidence-of-visual-mental-imagery",
        
          title: "a meta-analysis of neuroimaging evidence of visual mental imagery",
        
        description: "meta-analysis of visual mental imagery",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/metaanalysis/";
          
        },
      },{id: "post-tests-de-imagerie-perception",
        
          title: "tests de Imagerie-Perception",
        
        description: "Enhanced Battery of Imagery and Perception",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/eBIP-fr/";
          
        },
      },{id: "news-i-won-the-ewcn-prize-2023-on-the-european-workshop-on-cognitive-neuropsychology-in-italy",
          title: 'I won the EWCN prize 2023 on the European Workshop on Cognitive Neuropsychology...',
          description: "",
          section: "News",},{id: "news-i-was-selected-for-next-frontiers-in-consciousness-research-at-national-institutes-of-health-nih-bethesda-us",
          title: 'I was selected for Next frontiers in consciousness research at National Institutes of...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis",
          title: 'I successfully defended my Phd thesis!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-13-ThesisDefense/";
            },},{id: "news-we-started-a-new-journal-club-on-aphantasia-irca-page-sparkles",
          title: 'We started a new journal club on aphantasia: IRCA Page :sparkles:',
          description: "",
          section: "News",},{id: "news-le-monde-reported-us-point-right-vivre-sans-avoir-d-images-mentales-et-ne-pas-le-savoir",
          title: 'Le Monde reported us! :point_right: Vivre sans avoir d’images mentales… et ne pas...',
          description: "",
          section: "News",},{id: "news-rotating-light-aphantasia-as-functional-disconnection-is-out-in-trends-in-cognitive-sciences",
          title: ':rotating_light: Aphantasia as functional disconnection is out in Trends in Cognitive Sciences!',
          description: "",
          section: "News",},{id: "news-upcomming-absence-of-shared-representation-in-the-visual-cortex-challenges-unconscious-imagery-in-aphantasia-will-be-out-in-current-biology",
          title: 'Upcomming!!! Absence of shared representation in the visual cortex challenges unconscious imagery in...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6E%67%68%61%6F%6C%6F%75%69%73%6C%69%75@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yt7plBQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jianghao_liu_", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/jianghaoliu.bsky.social", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jianghao-Liu-2?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jianghao-liu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
