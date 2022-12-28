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

export interface ListDataWorld {
  id:                   string;
  rank:                 number;
  Country:              string;
  Continent:            string;
  TwoLetterSymbol:      null;
  ThreeLetterSymbol:    null;
  Infection_Risk:       number;
  Case_Fatality_Rate:   number;
  Test_Percentage:      number;
  Recovery_Proporation: number;
  TotalCases:           number;
  NewCases:             number;
  TotalDeaths:          number;
  NewDeaths:            number;
  TotalRecovered:       string;
  NewRecovered:         number;
  ActiveCases:          number;
  TotalTests:           string;
  Population:           string;
  one_Caseevery_X_ppl:  number;
  one_Deathevery_X_ppl: number;
  one_Testevery_X_ppl:  number;
  Deaths_1M_pop:        number;
  Serious_Critical:     number;
  Tests_1M_Pop:         number;
  TotCases_1M_Pop:      number;
}

export interface Countries {
  Country:              string;
  TwoLetterSymbol:      string;
  ThreeLetterSymbol:    string;
  Infection_Risk:       number;
  Case_Fatality_Rate:   number;
  Test_Percentage:      number;
  Recovery_Proporation: number;
  TotalCases:           number;
  NewCases:             number;
  TotalDeaths:          number;
  NewDeaths:            number;
  TotalRecovered:       number;
  NewRecovered:         number;
  ActiveCases:          number;
  TotalTests:           number;
  Population:           number;
  Serious_Critical:     number;
}


export enum HeaderItem{
  home,
  world,
  countries,
  continent
}
