export * from './financials';
export * from './historical-price-data';
export * from './profile';

export interface FinancialsTemplateData {
    code: string;
    maxAge: number;
}

export interface ShortFormNumberDataItem {
    raw: number;
    fmt: string;
}

export interface LongFormNumberDataItem {
    raw: number;
    fmt: string;
    longFmt: string;
}

export interface PriceData {
    quoteSourceName: string;
    regularMarketOpen: ShortFormNumberDataItem;
    averageDailyVolume3Month: LongFormNumberDataItem;
    exchange: string;
    regularMarketTime: number;
    volume24Hr: LongFormNumberDataItem;
    regularMarketDayHigh: ShortFormNumberDataItem;
    shortName: string;
    averageDailyVolume10Day: LongFormNumberDataItem;
    longName: string;
    regularMarketChange: ShortFormNumberDataItem;
    currencySymbol: string;
    regularMarketPreviousClose: ShortFormNumberDataItem;
    postMarketTime: number;
    preMarketPrice: ShortFormNumberDataItem;
    exchangeDataDelayedBy: number;
    toCurrency: string;
    postMarketChange: ShortFormNumberDataItem;
    postMarketPrice: ShortFormNumberDataItem;
    exchangeName: string;
    preMarketChange: LongFormNumberDataItem;
    circulatingSupply: LongFormNumberDataItem;
    regularMarketDayLow: ShortFormNumberDataItem;
    priceHint: LongFormNumberDataItem;
    currency: string;
    regularMarketPrice: ShortFormNumberDataItem;
    regularMarketVolume: LongFormNumberDataItem;
    lastMarket: string;
    regularMarketSource: string;
    openInterest: LongFormNumberDataItem;
    marketState: string;
    underlyingSymbol: string;
    marketCap: LongFormNumberDataItem;
    quoteType: string;
    volumeAllCurrencies: LongFormNumberDataItem;
    postMarketSource: string;
    strikePrice: ShortFormNumberDataItem;
    symbol: string;
    postMarketChangePercent: ShortFormNumberDataItem;
    preMarketSource: string;
    maxAge: number;
    fromCurrency: string;
    regularMarketChangePercent: ShortFormNumberDataItem;
}

export interface QuoteTypeData {
    exchange: string;
    shortName: string;
    longName: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    isEsgPopulated: boolean;
    gmtOffSetMilliseconds: string;
    quoteType: string;
    symbol: string;
    messageBoardId: string;
    market: string;
}

export interface SummaryDetailData {
    previousClose: ShortFormNumberDataItem;
    regularMarketOpen: ShortFormNumberDataItem;
    twoHundredDayAverage: ShortFormNumberDataItem;
    trailingAnnualDividendYield: ShortFormNumberDataItem;
    payoutRatio: ShortFormNumberDataItem;
    volume24Hr: LongFormNumberDataItem;
    regularMarketDayHigh: ShortFormNumberDataItem;
    navPrice: ShortFormNumberDataItem;
    averageDailyVolume10Day: LongFormNumberDataItem;
    totalAssets: LongFormNumberDataItem;
    regularMarketPreviousClose: ShortFormNumberDataItem;
    fiftyDayAverage: ShortFormNumberDataItem;
    trailingAnnualDividendRate: ShortFormNumberDataItem;
    open: ShortFormNumberDataItem;
    toCurrency: string;
    averageVolume10days: LongFormNumberDataItem;
    expireDate: ShortFormNumberDataItem;
    yield: ShortFormNumberDataItem;
    algorithm: string;
    dividendRate: ShortFormNumberDataItem;
    exDividendDate: ShortFormNumberDataItem;
    beta: ShortFormNumberDataItem;
    circulatingSupply: LongFormNumberDataItem;
    startDate: ShortFormNumberDataItem;
    regularMarketDayLow: ShortFormNumberDataItem;
    priceHint: LongFormNumberDataItem;
    currency: string;
    trailingPE: ShortFormNumberDataItem;
    regularMarketVolume: LongFormNumberDataItem;
    lastMarket: string;
    maxSupply: LongFormNumberDataItem;
    openInterest: LongFormNumberDataItem;
    marketCap: LongFormNumberDataItem;
    volumeAllCurrencies: LongFormNumberDataItem;
    strikePrice: ShortFormNumberDataItem;
    averageVolume: LongFormNumberDataItem;
    priceToSalesTrailing12Months: ShortFormNumberDataItem;
    dayLow: ShortFormNumberDataItem;
    ask: ShortFormNumberDataItem;
    ytdReturn: ShortFormNumberDataItem;
    askSize: LongFormNumberDataItem;
    volume: LongFormNumberDataItem;
    fiftyTwoWeekHigh: ShortFormNumberDataItem;
    forwardPE: ShortFormNumberDataItem;
    maxAge: number;
    fromCurrency: string;
    fiveYearAvgDividendYield: ShortFormNumberDataItem;
    fiftyTwoWeekLow: ShortFormNumberDataItem;
    bid: ShortFormNumberDataItem;
    tradeable: boolean;
    dividendYield: ShortFormNumberDataItem;
    bidSize: LongFormNumberDataItem;
    dayHigh: ShortFormNumberDataItem;
    coinMarketCapLink: string;
}

export interface PageViewsData {
    shortTermTrend: string;
    midTermTrend: string;
    longTermTrend: string;
    maxAge: number;
}

export interface MetaData {
    symbol: string;
    start: number;
    end: number;
    timeUnit: string;
}