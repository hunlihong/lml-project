const nav = document.querySelector(".nav");
const nav_bar = document.querySelector(".nav-bar");
const institute = document.querySelector(".institute");
const information = document.querySelector(".information");
const exit = document.querySelectorAll(".place h3 i");

nav_bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// info
const universities = document.querySelector(".place:first-child");
const centers = document.querySelector(".place:last-child");

const university = [
  {
    title: "សាកលវិទ្យាល័យអាស៊ីអឺរ៉ុប",
    logo: "images/aeu.jpg",
    website: "http://www.aeu.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យអាមេរិកកាំងភ្នំពេញ",
    logo: "images/aupp.webp",
    website: "https://www.aupp.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យបៀលប្រាយដ៍",
    logo: "images/bbu.jpg",
    website: "https://bbu.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យប៊ែលធីអន្ដរជាតិ",
    logo: "images/beltei.jpg",
    website: "https://beltei.edu.kh/biuk/",
  },
  {
    title: "វិទ្យាស្ថានបណ្ឌិតសភាបច្ចេកវិទ្យា ឌីជីថលកម្ពុជា",
    logo: "images/cadt.jpg",
    website: "https://www.cadt.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យខេមតិច",
    logo: "images/camtech.jpg",
    website: "https://camtech.edu.kh/",
  },
  {
    title: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា",
    logo: "images/itc.jpg",
    website: "https://itc.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យភ្នំពេញអន្ដរជាតិ",
    logo: "images/ppiu.jpg",
    website: "https://www.ppiu.edu.kh/public/",
  },
  {
    title: "សាកលវិទ្យាល័យលីមកុកវីង",
    logo: "images/limkokwing.jpg",
    website: "https://www.limkokwing.net/cambodia/academic/courses",
  },
  {
    title: "សាកលវិទ្យាល័យន័រតុន",
    logo: "images/norton.jpg",
    website: "https://www.norton-u.com/",
  },
  {
    title: "វិទ្យាស្ថានពហុបច្ចេកទេសកម្ពុជា",
    logo: "images/npic.jpg",
    website: "https://npic.edu.kh/en/",
  },
  {
    title: "សាកលវិទ្យាល័យបញ្ញាសាស្ត្រកម្ពុជា",
    logo: "images/pannasastra.jpg",
    website: "http://www.puc.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    logo: "images/rupp.jpg",
    website: "http://www.rupp.edu.kh/",
  },
  {
    title: "វិទ្យាស្ថានស៊ីតិច",
    logo: "images/setec.jpg",
    website: "https://www.setecu.com/",
  },
  {
    title: "សាកលវិទ្យាល័យវេសស្ទើន",
    logo: "images/western.jpg",
    website: "http://westernuniversity.edu.kh/",
  },
  {
    title: "វិទ្យាស្ថានបច្ចេកវិទ្យាគិរីរម្យ",
    logo: "images/kit.jpeg",
    website: "https://kit.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យអន្ដរជាតិ Paragon",
    logo: "images/paragon.jpg",
    website: "https://paragoniu.edu.kh/",
  },
  {
    title: "សាកលវិទ្យាល័យកម្ពុជា",
    logo: "images/uc.jpg",
    website: "https://uc.edu.kh/",
  },
];
const center = [
  {
    title: "មជ្ឍមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាកម្រិតខ្ពស់",
    logo: "images/istad.png",
    website: "https://www.istad.co",
  },
  {
    title: "មជ្ឍមណ្ឌលសាន់រ៉ាយស៍",
    logo: "images/sunrise.png",
    website: "https://www.sunriseinstitute.tech",
  },
  {
    title: "រៀនម័រ-Reanmore",
    logo: "images/reanmore.png",
    website: "https://reanmore.com/",
  },
  {
    title: "មជ្ឍមណ្ឌលអ៊ីតិច",
    logo: "images/etec.jpg",
    website: "https://www.facebook.com/etectrainingcenter",
  },
  {
    title: "អាន-ANT",
    logo: "images/ant.jpg",
    website: "http://antkh.com/",
  },
  {
    title: "មជ្ឍមណ្ឌល Master IT",
    logo: "images/masterit.png",
    website: "https://masteritlearnonline.com/",
  },
  {
    title: "Step IT Academy",
    logo: "images/step.jpg",
    website: "https://cambodia.itstep.org/",
  },
  {
    title: "Uddom Pang",
    logo: "images/uddom.png",
    website: "https://www.uddompang.com/",
  },
  {
    title: "Rean Web",
    logo: "images/reanweb.png",
    website: "https://www.reanweb.com/",
  },
  {
    title: "KiloIT",
    logo: "images/kiloit.jpg",
    website: "https://kiloit.com",
  },
  {
    title: "វិទ្យាស្ថាន Instinct",
    logo: "images/instinct.png",
    website: "http://www.instinct.edu.kh/",
  },
  {
    title: "NIT",
    logo: "images/nit.jpg",
    website: "https://nitcambodia.com/",
  },
];

const demo_uni = university.map((uni) => {
  return `
  <article>
  <img src="${uni.logo}" alt="" />
  <p>${uni.title}</p>
  <a href="${uni.website}"><button>ចូលមើល...</button></a>
</article>
  `;
});

universities.innerHTML += demo_uni.join("");

const demo_cen = center.map((cen) => {
  return `
  <article>
  <img src="${cen.logo}" alt="" />
  <p>${cen.title}</p>
  <a href="${cen.website}"><button>ចូលមើល...</button></a>
</article>
  `;
});

centers.innerHTML += demo_cen.join("");

institute.addEventListener("click", () => {
  document.querySelector(".info-nav").style.display = "none";
  document.querySelector(".info-section").style.display = "none";
  document.querySelector(".studying-place").style.display = "grid";
  const exit = document.querySelectorAll(".place h3 i");
  exit.forEach((back) => {
    back.addEventListener("click", () => {
      document.querySelector(".info-nav").style.display = "flex";
      document.querySelector(".info-section").style.display = "flex";
      document.querySelector(".studying-place").style.display = "none";
    });
  });
});
