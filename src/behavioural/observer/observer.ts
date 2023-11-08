interface Observable {
    subscribe(...observers: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

interface Observer {
    update(...args: unknown[]): void;
}

class InputObservable implements Observable {
    private observers: Observer[] = [];

    // @ts-ignore
    constructor(public element: HTMLInputElement) {}

    subscribe(...observers: Observer[]): void {
        observers.forEach(observer => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }
    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }
    notify(): void {
        this.observers.forEach(observer => observer.update(this));
    }
}

class ParagraphObserver implements Observer {
    // @ts-ignore
    constructor(public element: HTMLParagraphElement) {}

    update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

class DivObserver implements Observer {
    // @ts-ignore
    constructor(public element: HTMLDivElement) {}

    update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

// @ts-ignore
function makeInput(): HTMLInputElement {
    // @ts-ignore
    const input = document.createElement('input');
    // @ts-ignore
    document.body.appendChild(input);
    return input;
}

// @ts-ignore
function makeParagraph(): HTMLParagraphElement {
    // @ts-ignore
    const p = document.createElement('p');
    // @ts-ignore
    document.body.appendChild(p);
    p.innerText = 'Hello World';
    return p;
}

// @ts-ignore
function makeDiv(): HTMLDivElement {
    // @ts-ignore
    const div = document.createElement('div');
    // @ts-ignore
    document.body.appendChild(div);
    div.innerText = 'Hello World';
    return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div = new DivObserver(makeDiv());
input.subscribe(p1, p2, div);

input.element.addEventListener('keyup', function() {
    input.notify();
});

input.unsubscribe(p2);
