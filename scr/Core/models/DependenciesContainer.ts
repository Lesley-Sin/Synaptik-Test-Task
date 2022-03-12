import { EventsService } from "../Services/EventsService/EventsService";
import ReqresService from "../Services/ReqresService/ReqresService";

export type DependenciesContainer = {
    reqresService: ReqresService;
    eventsSetvice: EventsService;
};