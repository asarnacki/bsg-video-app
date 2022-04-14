export default interface IMovieDetails {
  ContentUrl: string;
  Description: string;
  MediaId: number;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  Provider: string;
  StreamId: number;
  Timestamp: ITimestamp;
  Title: string;
}

interface ITimestamp {
  Hour: number;
  Minute: number;
  Second: number;
}
