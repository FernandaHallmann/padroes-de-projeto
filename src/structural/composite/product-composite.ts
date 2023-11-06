export abstract class ProductComponent {
    abstract getPrice(): number;
    add(product: ProductComponent): void {}
    remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product));
    }
    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    }

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

const tShirt = new ProductLeaf('Camiseta', 49.9);
const mug = new ProductLeaf('Caneca', 29.9);
const smartphone = new ProductLeaf('iPhone', 1000);

const productBox = new ProductComposite();
productBox.add(tShirt, mug, smartphone);

const tablet = new ProductLeaf('iPad', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());