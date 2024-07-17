const HeaderData = {
  contactInfo: [
    "Pomoc & kontakt",
    "Rastislavova 68, Košice",
    "+421 919 215 491",
  ],
  quickLinks: [
    { link: "#", title: "Sledovanie zásielky" },
    { link: "#", title: "Vrátenie tovaru" },
    { link: "#", title: "O nás" },
    { link: "#", title: "FAQ" },
    { link: "#", title: "Blog" },
  ],
  promotionalOfferText: "Nové iPhone 14 PRO s 20% zľavou ✨",
  navigationBar: {
    navigationTopbar: {
      links: [
        { icon: "tagIcon", title: "Výpredaj" },
        { icon: "achievementIcon", title: "Novinky" },
        { icon: "settingsIcon", title: "MC Servis" },
      ],
      logos: ["./images/logo.svg", "./images/premium-logo.svg"],
      icons: ["navigationBarIcon1", "navigationBarIcon2", "navigationBarIcon3"],
    },
    mainNavigation: {
      links: [
        { link: "#", title: "iPhone" },
        { link: "#", title: "iPad" },
        { link: "#", title: "MacBook" },
        { link: "#", title: "Apple Airpods" },
        { link: "#", title: "Smarthome" },
        { link: "#", title: "Príslušenstvo" },
      ],
      searchBar: {placeholder:'Zadajte názov produktu', icon:'search'}
    },
  },
  drawer: {
    tab1: {
      links: [
        [
          { link: "#", title: "Všetky kategórie" },
          { link: "#", title: "iPhone" },
          { link: "#", title: "Apple AirPods" },
          { link: "#", title: "Macbook" },
          { link: "#", title: "iPad" },
          { link: "#", title: "Apple Watch" },
          { link: "#", title: "Príslušenstvo" },
        ],
        [
          { link: "#", title: "Najpredávanejšie" },
          { link: "#", title: "Najnovšie", icon:"achievementIcon", tag:"Novinka", tagType:"warning" },
          { link: "#", title: "Zľavy", icon:"tagIcon", tag:"Výpredaj", tagType:"danger" },
        ],
        [
          { link: "#", title: "Kontakt", hideArrow: true},
          { link: "#", title: "Často kladené otázky", hideArrow: true },
          { link: "#", title: "Zľavy", hideArrow: true },
        ],
        [
          { link: "#", title: "Blog", icon: 'navigationBarIcon2' ,hideArrow: true},
        ]
      ],
      icons: ['social-icon-1', 'social-icon-2', 'social-icon-3', 'social-icon-4', 'social-icon-5']
    },
    tab2: {
      heading: "Všetky kategórie",
      links: [
          { link: "#",img:"./images/header-drawer-item-img-1.svg", title: "iPhone" },
          { link: "#",img:"./images/header-drawer-item-img-2.svg", title: "Apple AirPods" },
          { link: "#",img:"./images/header-drawer-item-img-3.svg", title: "Macbook" },
          { link: "#",img:"./images/header-drawer-item-img-4.svg", title: "iPad" },
          { link: "#",img:"./images/header-drawer-item-img-5.svg", title: "Smarthome" },
          { link: "#",img:"./images/header-drawer-item-img-6.svg", title: "Príslušenstvo" },
          { link: "#",img:"./images/header-drawer-item-img-7.svg", title: "Herná zóna" },
          { link: "#",img:"./images/header-drawer-item-img-8.svg", title: "Smarthome" },
          { link: "#",img:"./images/header-drawer-item-img-9.svg", title: "PC" },
          { link: "#",img:"./images/header-drawer-item-img-10.svg", title: "Spotrebiče a elektronika" },
      ],
      bannerImag: './images/header-drawer-banner-img.svg',
    },
    tab3: {
      heading: "MacBook",
      links: [
          { link: "#", title: "Zobraziť všetko", showArrow: true },
          { link: "#", title: "Air" },
          { link: "#", title: "Pro" },
          { link: "#", title: "iMac 24”" },
          { link: "#", title: "Mini" },
          { link: "#", title: "Studio" },
          { link: "#", title: "Mac Pro" },
          { link: "#", title: "Displeje" },
          { link: "#", title: "Doplnky pre Mac" },
      ],
    }
  }
};

const HeroHeaderData = {
  Images: ["Pomoc & kontakt", "Rastislavova 68, Košice", "+421 919 215 491"],
};

export { HeaderData, HeroHeaderData };
