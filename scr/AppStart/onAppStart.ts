import { DependenciesContainer } from "../Core/models/DependenciesContainer";
import { EventsService } from "../Core/Services/EventsService/EventsService";
import ReqresService from "../Core/Services/ReqresService/ReqresService"

export default function onAppStart(): DependenciesContainer {
  const deps: DependenciesContainer = {
    reqresService: new ReqresService(),
    eventsSetvice: new EventsService()
  };
  return deps;
};
