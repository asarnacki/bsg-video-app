export default interface IMovieList {
  CacheDataValidTo: string;
  Entities: {
    AvailableFrom: string;
    Description: string;
    Duration: number;
    Guid: string;
    Id: number;
    Images: IImages;
    IsTrialContentAvailable: boolean;
    MediaAgeRestrictionImageUrl: string;
    MediaAgeRestrictionValueMin: number;
    MediaTypeCode: string;
    MediaTypeDisplayName: string;
    Products: IProducts;
    Title: string;
    Year: number;
  };
  PageNumber: number;
  PageSize?: number;
  SourceType: string;
  TotalCount: number;
}

interface IImages {
  Height: number;
  Id: number;
  ImageTypeCode: string;
  MediaId: number;
  PlatformCode: string;
  Url: string;
  Width: number;
}
interface IProducts {
  Id: number;
}
