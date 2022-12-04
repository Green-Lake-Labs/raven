import { dbPool } from '../client/db';

const loadProfileData = async (req, res) => {
    const symbol = req.query['symbol'];
    await dbPool.collection('profile_data')
        .findOne({ symbol: symbol })
        .then((result) => {
            return result 
                ? res.status(200).json(result)
                : res.status(204).json(`Profile data not found for ${symbol}`)
        });
};

const loadHistoricalPriceData = async (req, res) => {
    const symbol = req.query['symbol'];
    await dbPool.collection('historical_price_data')
        .findOne({ symbol: symbol })
        .then((result) => {
            return result 
                ? res.status(200).json(result)
                : res.status(204).json(`Historical price data not found for ${symbol}`)
        });
};

const loadFinancialData = async (req, res) => {
    const symbol = req.query['symbol'];
    await dbPool.collection('financial_data')
        .findOne({ symbol: symbol })
        .then((result) => {
            return result 
                ? res.status(200).json(result)
                : res.status(204).json(`Financial data not found for ${symbol}`)
        });
};

export default {
    loadProfileData,
    loadHistoricalPriceData,
    loadFinancialData,
};