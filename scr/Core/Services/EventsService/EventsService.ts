import EventEmitter from "events";

export class EventsService {
    private emitter: EventEmitter;

    constructor() {
        this.emitter = new EventEmitter;
    };

    public addListener(eventKey: string | symbol, listener: (...args: any[]) => void): void {
        this.emitter.addListener(eventKey, listener);
    };

    public removeListener(eventKey: string | symbol, listener: (...args: any[]) => void): void {
        this.emitter.removeListener(eventKey, listener);
    };

    public removeAllListeners(eventKey: string | symbol): void {
        this.emitter.removeAllListeners(eventKey);
    };

    public emit(eventKey: string | symbol, ...args: any[]) {
        this.emitter.emit(eventKey, ...args);
    };

};