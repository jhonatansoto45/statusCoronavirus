export interface Noticias {
  news_id:             string;
  title:               string;
  link:                string;
  urlToImage:          string;
  imageInLocalStorage: string;
  imageFileName:       string;
  pubDate:             Date;
  content:             string;
  reference:           string;
}

export enum HeaderItem{
  home,
  world,
  countries,
  continent
}
