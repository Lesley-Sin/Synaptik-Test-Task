export class ItemPair {
    public pair: [JSX.Element, JSX.Element]

    constructor(f: JSX.Element, l: JSX.Element) {
        this.pair = [f, l]
    };
};