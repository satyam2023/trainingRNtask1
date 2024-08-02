export interface BookMockData {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}

export interface IBookListFlatlist {
  item: BookMockData;
  index: number;
}
