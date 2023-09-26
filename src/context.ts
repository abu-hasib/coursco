import { TrackAPI } from "./datasource/track-api";

export type DataSourceContext = {
  dataSources: {
    trackAPI : TrackAPI;
  };
}