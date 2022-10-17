let slideCont01 = document.querySelector(`.product_slider`);
let productCont = document.querySelector(`.product_display`);
let upcomingProductCont = document.querySelector(`.upcoming_products`);
let slideCont02 = document.querySelector(`.product_slider02`);

let slideTrackers = [];

populateContainer(featured, slideCont01, 100, "absolute", "buy");
populateContainer(products, productCont, 100, "static", "buy");
populateContainer(upcoming, upcomingProductCont, 100, "static", "preorder");
populateContainer(products, slideCont02, 40, "absolute", "buy");
initiateSlides(
  { disposition: 0, track: 0 },
  100,
  7000,
  featured.length,
  slideCont01
);
initiateSlides({ disposition: 0, track: 0 }, 0.2, 30, 1000, slideCont02);

function populateContainer(collection, containerRef, factor, position, type) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    containerRef.innerHTML += product_prefab(
      collection[i],
      i * factor,
      position,
      type
    );
  }
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
      }
      containerRef.style = `transform:translateX(${-(slideData.disposition +=
        disposition)}%)`;
    }, interval)
  );
}
