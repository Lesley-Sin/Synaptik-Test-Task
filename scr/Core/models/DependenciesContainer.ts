import type { IEventsService } from "../API/IEventsService";
import type { IReqresService } from "../API/IReqresService";

/**
* @DependenciesContainer
* Provides a dependency container type that contains references to module APIs
*/
export type DependenciesContainer = {
    reqresService: IReqresService;
    eventsSetvice: IEventsService;
};