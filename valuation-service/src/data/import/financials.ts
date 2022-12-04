import { 
    FinancialsTemplateData,
    LongFormNumberDataItem,
    MetaData,
    PageViewsData,
    PriceData,
    QuoteTypeData,
    ShortFormNumberDataItem,
    SummaryDetailData,
} from './shared';

// Cash Flows

export interface CashFlowStatementDataItem {
    investments: LongFormNumberDataItem;
    changeToLiabilities: LongFormNumberDataItem;
    totalCashflowsFromInvestingActivities: LongFormNumberDataItem;
    netBorrowings: LongFormNumberDataItem;
    totalCashFromFinancingActivities: LongFormNumberDataItem;
    changeToOperatingActivities: LongFormNumberDataItem;
    netIncome: LongFormNumberDataItem;
    changeInCash: LongFormNumberDataItem;
    endDate: ShortFormNumberDataItem;
    repurchaseOfStock: LongFormNumberDataItem;
    totalCashFromOperatingActivities: LongFormNumberDataItem;
    depreciation: LongFormNumberDataItem;
    otherCashflowsFromInvestingActivities: LongFormNumberDataItem;
    dividendsPaid: LongFormNumberDataItem;
    changeToInventory: LongFormNumberDataItem;
    changeToAccountReceivables: LongFormNumberDataItem;
    otherCashflowsFromFinancingActivities: LongFormNumberDataItem;
    maxAge: number;
    changeToNetincome: LongFormNumberDataItem;
    capitalExpenditures: LongFormNumberDataItem;
}

export interface CashFlowStatementHistoryQuarterlyData {
    cashflowStatements: CashFlowStatementDataItem[];
    maxAge: number;
}

export interface CashFlowStatementHistoryYearlyData {
    cashflowStatements: CashFlowStatementDataItem[];
    maxAge: number;
}

// Income Statement

export interface IncomeStatementHistoryDataItem {
    researchDevelopment: LongFormNumberDataItem;
    effectOfAccountingCharges: LongFormNumberDataItem;
    incomeBeforeTax: LongFormNumberDataItem;
    minorityInterest: LongFormNumberDataItem;
    netIncome: LongFormNumberDataItem;
    sellingGeneralAdministrative: LongFormNumberDataItem;
    grossProfit: LongFormNumberDataItem;
    ebit: LongFormNumberDataItem;
    endDate: ShortFormNumberDataItem;
    operatingIncome: LongFormNumberDataItem;
    otherOperatingExpenses: LongFormNumberDataItem;
    interestExpense: LongFormNumberDataItem;
    extraordinaryItems: LongFormNumberDataItem;
    nonRecurring: LongFormNumberDataItem;
    otherItems: LongFormNumberDataItem;
    incomeTaxExpense: LongFormNumberDataItem;
    totalRevenue: LongFormNumberDataItem;
    totalOperatingExpenses: LongFormNumberDataItem;
    costOfRevenue: LongFormNumberDataItem;
    totalOtherIncomeExpenseNet: LongFormNumberDataItem;
    maxAge: number;
    discontinuedOperations: LongFormNumberDataItem;
    netIncomeFromContinuingOps: LongFormNumberDataItem;
    netIncomeApplicableToCommonShares: LongFormNumberDataItem;
}

export interface IncomeStatementHistoryQuarterlyData {
    incomeStatementHistory: IncomeStatementHistoryDataItem[];
    maxAge: number;
}

export interface IncomeStatementHistoryYearlyData {
    incomeStatementHistory: IncomeStatementHistoryDataItem[];
    maxAge: number;
}

// Balance Sheet

export interface BalanceSheetHistoryDataItem {
    totalLiab: LongFormNumberDataItem;
    totalStockholderEquity: LongFormNumberDataItem;
    otherCurrentLiab: LongFormNumberDataItem;
    totalAssets: LongFormNumberDataItem;
    endDate: ShortFormNumberDataItem;
    commonStock: LongFormNumberDataItem;
    otherCurrentAssets: LongFormNumberDataItem;
    retainedEarnings: LongFormNumberDataItem;
    otherLiab: LongFormNumberDataItem;
    treasuryStock: LongFormNumberDataItem;
    otherAssets: LongFormNumberDataItem;
    cash: LongFormNumberDataItem;
    totalCurrentLiabilities: LongFormNumberDataItem;
    shortLongTermDebt: LongFormNumberDataItem;
    otherStockholderEquity: LongFormNumberDataItem;
    propertyPlantEquipment: LongFormNumberDataItem;
    totalCurrentAssets: LongFormNumberDataItem;
    longTermInvestments: LongFormNumberDataItem;
    netTangibleAssets: LongFormNumberDataItem;
    shortTermInvestments: LongFormNumberDataItem;
    netReceivables: LongFormNumberDataItem;
    maxAge: number;
    longTermDebt: LongFormNumberDataItem;
    inventory: LongFormNumberDataItem;
    accountsPayable: LongFormNumberDataItem;
}

export interface BalanceSheetHistoryYearlyData {
    balanceSheetStatements: BalanceSheetHistoryDataItem[];
    maxAge: number;
}

export interface BalanceSheetHistoryQuarterlyData {
    balanceSheetStatements: BalanceSheetHistoryDataItem[];
    maxAge: number;
}

// Earnings

export interface EarningsChartDataItemQuarterly {
    date: string;
    actual: ShortFormNumberDataItem;
    estimate: ShortFormNumberDataItem;
}

export interface EarningsChartData {
    quarterly: EarningsChartDataItemQuarterly[];
    currentQuarterEstimate: ShortFormNumberDataItem;
    currentQuarterEstimateDate: string;
    currentQuarterEstimateYear: number;
    earningsDate: ShortFormNumberDataItem[];
}

export interface FinancialsChartDataYearlyDataItem {
    date: number;
    revenue: LongFormNumberDataItem;
    earnings: LongFormNumberDataItem;
}

export interface FinancialsChartDataQuarterlyDataItem {
    date: string;
    revenue: LongFormNumberDataItem;
    earnings: LongFormNumberDataItem;
}

export interface FinancialsChartData {
    yearly: FinancialsChartDataYearlyDataItem[];
    quarterly: FinancialsChartDataQuarterlyDataItem[];
}

export interface EarningsData {
    maxAge: number;
    earningsChart: EarningsChartData;
    financialsChart: FinancialsChartData;
    financialCurrency: string;
}

// Time Series Financial Data

export interface TimeSeriesFinancialDataItem {
    dataId: number;
    asOfDate: string;
    periodType: string;
    currencyCode: string;
    reportedValue: ShortFormNumberDataItem;
}

export interface TimeSeriesFinancialData {
    annualOtherCurrentAssets: TimeSeriesFinancialDataItem[];
    annualCapitalStock: TimeSeriesFinancialDataItem[];
    annualCashAndCashEquivalents: TimeSeriesFinancialDataItem[];
    annualAccountsReceivable: TimeSeriesFinancialDataItem[];
    annualAccountsPayable: TimeSeriesFinancialDataItem[];
    annualStockholdersEquity: TimeSeriesFinancialDataItem[];
    annualLongTermDebt: TimeSeriesFinancialDataItem[];
    annualOtherNonCurrentLiabilities: TimeSeriesFinancialDataItem[];
    annualTotalNonCurrentLiabilitiesNetMinorityInterest: TimeSeriesFinancialDataItem[];
    annualOtherCurrentLiabilities: TimeSeriesFinancialDataItem[];
    annualCurrentDebt: TimeSeriesFinancialDataItem[];
    annualInvestmentsAndAdvances: TimeSeriesFinancialDataItem[];
    annualTotalLiabilitiesNetMinorityInterest: TimeSeriesFinancialDataItem[];
    annualNonCurrentDeferredTaxesLiabilities: TimeSeriesFinancialDataItem[];
    annualIncomeTaxPayable: TimeSeriesFinancialDataItem[];
    annualOtherShortTermInvestments: TimeSeriesFinancialDataItem[];
    annualCashCashEquivalentsAndShortTermInvestments: TimeSeriesFinancialDataItem[];
    annualTotalAssets: TimeSeriesFinancialDataItem[];
    annualGoodwill: TimeSeriesFinancialDataItem[];
    annualOtherIntangibleAssets: TimeSeriesFinancialDataItem[];
    annualRetainedEarnings: TimeSeriesFinancialDataItem[];
    annualCurrentAccruedExpenses: TimeSeriesFinancialDataItem[];
    annualInventory: TimeSeriesFinancialDataItem[];
    annualNonCurrentDeferredRevenue: TimeSeriesFinancialDataItem[];
    annualAccumulatedDepreciation: TimeSeriesFinancialDataItem[];
    annualCurrentLiabilities: TimeSeriesFinancialDataItem[];
    annualNetPPE: TimeSeriesFinancialDataItem[];
    annualGrossPPE: TimeSeriesFinancialDataItem[];
    annualTotalNonCurrentAssets: TimeSeriesFinancialDataItem[];
    annualCurrentAssets: TimeSeriesFinancialDataItem[];
    annualOtherNonCurrentAssets: TimeSeriesFinancialDataItem[];
    annualCurrentDeferredRevenue: TimeSeriesFinancialDataItem[];
    annualGainsLossesNotAffectingRetainedEarnings: TimeSeriesFinancialDataItem[];
    timestamp: number[];
}

// -------------------------------------------------------------------------

export interface ImportFinancialData {
    symbol: string;
    financialsTemplate: FinancialsTemplateData;
    cashflowStatementHistory: CashFlowStatementHistoryYearlyData;
    cashflowStatementHistoryQuarterly: CashFlowStatementHistoryQuarterlyData;
    incomeStatementHistory: IncomeStatementHistoryYearlyData;
    incomeStatementHistoryQuarterly: IncomeStatementHistoryQuarterlyData;
    balanceSheetHistory: BalanceSheetHistoryYearlyData;
    balanceSheetHistoryQuarterly: BalanceSheetHistoryQuarterlyData;
    earnings: EarningsData;
    price: PriceData;
    quoteType: QuoteTypeData;
    summaryDetail: SummaryDetailData;
    pageViews: PageViewsData;
    timeSeries: TimeSeriesFinancialData;
    meta: MetaData;
    loading: boolean;
    errorList: any[];
}