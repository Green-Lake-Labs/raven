import { dbPool } from '../client/db';
import { 
    fetchFinancialData,
    fetchHistoricalPriceData, 
    fetchProfile, 
} from '../client/yahoo-finance';

const symbolNotFoundResponse = (symbol: String) => `Symbol ${symbol} not found on source API`;

const updateProfileData = async (req, res) => {
    const symbol = req.query['symbol'];
    const clientResponse = await fetchProfile(symbol);
    if (!clientResponse) {
        res.status(302).json(symbolNotFoundResponse(symbol));
    } else {
        const dbCollection = dbPool.collection('profile_data');
        await dbCollection.findOneAndReplace(
            { symbol: symbol },
            clientResponse,
        ).then((result) => {
            if (!result.value) {
                dbCollection.insertOne(clientResponse);
            };
        });
        res.status(201).json(`Company profile updated in DB for ${symbol}`);
    };
};

const updateHistoricalPriceData = async (req, res) => {
    const symbol = req.query['symbol'];
    const clientResponse = await fetchHistoricalPriceData(symbol);
    if (!clientResponse) {
        res.status(302).json(symbolNotFoundResponse(symbol));
    } else {
        const dto = { symbol: symbol, ...clientResponse };
        const dbCollection = dbPool.collection('historical_price_data');
        await dbCollection.findOneAndReplace(
            { symbol: symbol },
            dto,
        ).then((result) => {
            if (!result.value) {
                dbCollection.insertOne(dto);
            };
        });
        res.status(201).json(`Historical price data updated in DB for ${symbol}`);
    };
};

const updateFinancialData = async (req, res) => {
    const symbol = req.query['symbol'];
    const clientResponse = await fetchFinancialData(symbol);
    if (!clientResponse) {
        res.status(302).json(symbolNotFoundResponse(symbol));
    } else {
        const dbCollection = dbPool.collection('financial_data');
        await dbCollection.findOneAndReplace(
            { symbol: symbol },
            clientResponse,
        ).then((result) => {
            if (!result.value) {
                dbCollection.insertOne(clientResponse);
            };
        });
        res.status(201).json(`Financial data updated in DB for ${symbol}`);
    };
};

export default {
    updateProfileData,
    updateHistoricalPriceData,
    updateFinancialData,
};