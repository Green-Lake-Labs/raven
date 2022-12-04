export interface TimeZoneObject {
    gmtOffset: number
}

export interface HistoricalPriceDataItem {
    date: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjclose: number;
}

export interface HistoricalEventsDataItem {
    date: number;
    numerator: number;
    denominator: number;
    splitRatio: string;
    type: string;
    data: string;
}

// -------------------------------------------------------------------------

export interface ImportHistoricalPriceData {
    prices: HistoricalPriceDataItem[];
    isPending: boolean;
    firstTradeDate: number;
    id: string;
    timeZone: TimeZoneObject;
    eventsData: HistoricalEventsDataItem[];
}

export interface ImportHistoricalPriceDataDto extends ImportHistoricalPriceData {
    symbol: string;
}