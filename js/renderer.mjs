import ProductEntity from "./components/product.mjs";

class ProductList {
  constructor() {
    this._products = this.fetchProducts();
  }

  fetchProducts() {
    return [
      {
        imgSrc: "./img/features-desk-1.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-1.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/features-desk-3.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/features-desk-4.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-2.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-3.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-4.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-5.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
      {
        imgSrc: "./img/catalog-img-6.jpg",
        title: "ELLERY X M'O CAPSULE",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 52,
      },
    ];
  }

  render() {
    const listHtml = this._products.map((el) => {
      return new ProductEntity(el.imgSrc, el.title, el.description, el.price).render();
    });
    return listHtml.join("");
  }
}

export const renderer = new ProductList();
