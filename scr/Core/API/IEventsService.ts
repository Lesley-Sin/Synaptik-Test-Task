
/**
* @IEventsService
* Provides API signatures for specific implementations of event emitter module
*/
export interface IEventsService {

    /**
    * @addListener
    * Add listener funcion for specified event key
    */
    addListener(eventKey: string | symbol, listener: (...args: any[]) => void): void;

    /**
    * @removeListener
    * Remove specified listener for specified event key
    */
    removeListener(eventKey: string | symbol, listener: (...args: any[]) => void): void;

    /**
    * @removeAllListeners
    * Remove all listeners for specified event key
    */
    removeAllListeners(eventKey: string | symbol): void;

    /**
    * @emit
    * Method for calling  event by specified event key
    */
    emit(eventKey: string | symbol, ...args: any[]): void;

};