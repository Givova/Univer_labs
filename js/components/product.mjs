export default class Product {
  constructor(imgSrc, title, description, price) {
    this._imgSrc = imgSrc;
    this._title = title;
    this._description = description;
    this._price = price;
  }

  render() {
    return `
    <article class="features__card card">
            <div class="card__image-wrapper">
              <img class="card__image" src="${this._imgSrc}" alt="" />
              <button class="card__button">
                <img width="26" height="24" src="./img/icons/Cart.svg" alt="" />
                Add to cart
              </button>
            </div>
            <div class="card__content">
              <h4 class="card__title">${this._title}</h4>
              <p class="card__description">
                ${this._description}
              </p>
              <p class="card__price text text--pink">${this._price}$</p>
            </div>
    </article>
    `;
  }
}
