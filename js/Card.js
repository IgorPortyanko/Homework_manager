export class Card {

    constructor(url, title, image, alt) {
        this.url = url;
        this.title = title;
        this.image = image;
        this.alt = alt;
    }

    render(block) {
        let cardHTML = `
            <li class="homeworks__item">
                <a href="${this.url} " class="homeworks__link">
                    <div class="homeworks__card">
                        <h3 class="homeworks__title">${this.title}</h3>
                        <div class="homeworks__image">
                                <img src="${this.image}" alt="${this.alt}">
                        </div>
                    </div>
                </a>
            </li>
        `

        block.insertAdjacentHTML('beforeend', cardHTML)
    }
}

