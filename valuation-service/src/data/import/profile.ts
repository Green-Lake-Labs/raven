import { 
    FinancialsTemplateData,
    LongFormNumberDataItem,
    PageViewsData,
    PriceData,
    QuoteTypeData,
    ShortFormNumberDataItem,
    SummaryDetailData,
} from './shared';

export interface SecFilingDataItem {
    date: string;
    epochDate: number;
    type: string;
    title: string;
    edgarUrl: string;
    maxAge: number;
}

export interface SecFilingsData {
    filings: SecFilingDataItem[];
    maxAge: number;
}

export interface EarningsPreviewData {
    earningsDate: ShortFormNumberDataItem[];
    earningsAverage: ShortFormNumberDataItem;
    earningsLow: ShortFormNumberDataItem;
    earningsHigh: ShortFormNumberDataItem;
    revenueAverage: LongFormNumberDataItem;
    revenueLow: LongFormNumberDataItem;
    revenueHigh: LongFormNumberDataItem;
}

export interface CalendarEventsData {
    maxAge: number;
    earnings: EarningsPreviewData;
    exDividendDate: ShortFormNumberDataItem;
    dividendDate: ShortFormNumberDataItem;
}

export interface CompanyOfficerDataItem {
    maxAge: number;
    name: string;
    title: string;
    exercisedValue: LongFormNumberDataItem;
    unexercisedValue: LongFormNumberDataItem;
}

export interface AssetProfileData {
    zip: string;
    sector: string;
    fullTimeEmployees: number;
    compensationRisk: number;
    auditRisk: number;
    longBusinessSummary: string;
    city: string;
    phone: string;
    state: string;
    shareHolderRightsRisk: number;
    compensationAsOfEpochDate: number;
    governanceEpochDate: number;
    boardRisk: number;
    country: string;
    companyOfficers: CompanyOfficerDataItem[];
    website: string;
    maxAge: number;
    overallRisk: number;
    address1: string;
    industry: string;
}

// -------------------------------------------------------------------------

export interface ImportProfileData {
    symbol: string;
    financialsTemplate: FinancialsTemplateData;
    secFilings: SecFilingsData;
    calendarEvents: CalendarEventsData;
    assetProfile: AssetProfileData;
    price: PriceData;
    quoteType: QuoteTypeData;
    summaryDetail: SummaryDetailData;
    pageViews: PageViewsData;
}