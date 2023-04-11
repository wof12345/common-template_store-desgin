let slideCont01 = document.querySelector(`.product_slider`);
let productCont = document.querySelector(`.product_display`);
let upcomingProductCont = document.querySelector(`.upcoming_products`);
let slideCont02 = document.querySelector(`.product_slider02`);

let PageNo = document.querySelector(".page_no");
let circles;

let pageLogics = {
  lastFeatureItem: 0,
  dispositionFactor: 100,
  dispositionTrack: 0,
};

let slideTrackers = [];

populateContainer(featured, slideCont01, 100, "absolute", "buy");
populateContainer(products, productCont, 100, "static", "buy");
populateContainer(upcoming, upcomingProductCont, 100, "static", "preorder");
populateContainer(products, slideCont02, 40, "absolute", "buy");
initiateSlides(
  { disposition: 0, track: 0 },
  pageLogics.dispositionFactor,
  7000,
  featured.length,
  slideCont01
);
initiateSlides({ disposition: 0, track: 0 }, 0.2, 100, 1000, slideCont02);

function populateContainer(collection, containerRef, factor, position, type) {
  for (let i = 0; i < collection.length; i++) {
    // console.log(collection[i]);
    containerRef.innerHTML += product_prefab(
      collection[i],
      i * factor,
      position,
      type
    );

    if (containerRef === slideCont01)
      PageNo.innerHTML += `<div class="circle" data-serial="fc${collection[i].id}"></div>`;
  }
  circles = document.querySelectorAll(".circle");
}

function initiateSlides(
  slideData,
  disposition,
  interval,
  collectionRef,
  containerRef
) {
  slideTrackers.push(
    setInterval(() => {
      slideData.track++;

      if (slideData.track >= collectionRef) {
        slideData.track = 0;
        slideData.disposition = -disposition;

        if (containerRef === slideCont02) pageLogics.dispositionTrack = 0;
      }

      if (interval >= 6000) {
        featuredAnimation(slideData.track);
      }

      if (containerRef === slideCont02)
        slideData.disposition = pageLogics.dispositionTrack;

      // console.log(containerRef);

      dispositionProduct(slideData.disposition, disposition, containerRef);
    }, interval)
  );
}

function dispositionProduct(dispositionData, disposition, containerRef) {
  containerRef.style = `transform:translateX(${-(dispositionData +=
    disposition)}%)`;

  if (containerRef === slideCont02)
    pageLogics.dispositionTrack = dispositionData;
}

// console.log(buyBtns);

function featuredAnimation(command) {
  let last;
  let referenceArr = circles;
  let length = referenceArr.length;

  // console.log(last);

  if (command !== undefined) {
    pageLogics.lastFeatureItem = last = command;
  } else {
    pageLogics.lastFeatureItem += 1;
    last = pageLogics.lastFeatureItem;
  }
  // console.log(last);

  if (last > length - 1) {
    last = pageLogics.lastFeatureItem = 0;
  }

  if (last < 0) {
    pageLogics.lastFeatureItem = last = length - 1;
  }

  dispositionProduct(
    pageLogics.dispositionFactor * (last - 1),
    pageLogics.dispositionFactor,
    slideCont01
  );

  referenceArr[last].style = `background-color: rgba(102, 102, 102, 0.897);`;

  for (let i = 0; i < length; i++) {
    if (i !== last) {
      referenceArr[i].style = ``;
    }
  }

  console.log(pageLogics);

  clearInterval(slideTrackers[0]);
  slideTrackers = [];
  initiateSlides(
    {
      disposition: pageLogics.dispositionFactor * pageLogics.lastFeatureItem,
      track: pageLogics.lastFeatureItem,
    },
    pageLogics.dispositionFactor,
    7000,
    featured.length,
    slideCont01
  );
}

function findItem(product) {}

document.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;

  if (targetClass.includes("feature_card") || targetClass.includes("circle")) {
    let id = +target.dataset.serial.match(/(\d+)/)[0];
    console.log(id);

    featuredAnimation(id);
  }

  if (targetClass.includes("buy")) {
    let product = target.closest(".product");

    console.log(product.id);

    findItem(product);
  }
});
