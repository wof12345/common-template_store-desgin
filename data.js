//predefined elements

let product_prefab = function (data, placement, position, type) {
  return `<div class="product_container_slide" style="right:-${placement}%;position:${position}">
  <div class="product" id="${data.id} ">
    <img src="./public/saddoge.png" alt="" />
    <div class="desc d-flex flex-column p-4 justify-content-between">
      <div class="name pdT">
        <p>Name :</p>
        <p class="pDetail">${data.name}</p>
      </div>
      <div class="cost pdT">
        <p>Cost :</p>
        <p class="pDetail">${data.price}</p>
      </div>
      <div class="stock pdT">
        <p>Stock :</p>
        <p class="pDetail">${data.stock}</p>
      </div>
      <button class="buy btn btn-success">${type}</button>
    </div>

    <article class="detailed_desc">
    ${data.desc}
    </article>
  </div>
</div>`;
};

let products = [
  {
    id: "1",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "2",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "3",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "4",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "5",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "6",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
];
let featured = [
  {
    id: "0",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "1",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "2",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "3",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
];
let upcoming = [
  {
    id: "1",
    name: "saddoge",
    price: "20?",
    stock: "None yet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "2",
    name: "saddoge",
    price: "20?",
    stock: "None yet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "3",
    name: "saddoge",
    price: "20?",
    stock: "None yet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "4",
    name: "saddoge",
    price: "20?",
    stock: "None yet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
];
