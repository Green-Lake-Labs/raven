import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { 
    ImportProfileData,
    ImportHistoricalPriceData,
    ImportFinancialData,
} from '../data/raw';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const yahooFinanceEndpoint = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";

const rapidApiConfig = {
    headers: {
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
    }
}

export async function fetchProfile(
    symbol: string,
): Promise<ImportProfileData | null> {
    try {
        return await axios
            .get(
                yahooFinanceEndpoint + '/stock/v2/get-profile',
                {
                    params: {
                        'symbol': symbol,
                    },
                    ...rapidApiConfig,
                },
            )
            .then(res => res.data);
    } catch (err) {
        return null;
    }
}

export async function fetchHistoricalPriceData(
    symbol: string,
): Promise<ImportHistoricalPriceData | null> {
    try {
        return await axios
            .get(
                yahooFinanceEndpoint + '/stock/v3/get-historical-data',
                {
                    params: {
                        'symbol': symbol,
                    },
                    ...rapidApiConfig,
                },
            )
            .then(res => res.data);
    } catch (err) {
        return null;
    }
}

export async function fetchFinancialData(
    symbol: string,
): Promise<ImportFinancialData | null> {
    try {
        return await axios
            .get(
                yahooFinanceEndpoint + '/stock/v2/get-balance-sheet',
                {
                    params: {
                        'symbol': symbol,
                    },
                    ...rapidApiConfig,
                },
            )
            .then(res => res.data);
    } catch (err) {
        return null;
    }
}
