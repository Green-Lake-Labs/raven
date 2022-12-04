import { dbPool } from '../client/db';
import { 
    fetchFinancialData,
    fetchHistoricalPriceData, 
    fetchProfile, 
} from '../client/yahoo-finance';

function err(err) { if (err) throw err; }

const updateProfileData = async (req, res) => {
    const processResponse = (error, result) => {
        err(error);
        res.status(201).json(`Company profile updated in DB for ${result.rows[0].symbol}`);
    };
    const symbol = req.query['symbol'];
    // const clientResponse = await fetchProfile(symbol);
    dbPool.query(
        'SELECT id, symbol FROM known_symbols WHERE symbol=$1',
        [symbol],
        (lookupError, lookupResult) => {
            err(lookupError);
            if (lookupResult.rows.length != 0) {
                dbPool.query(
                    'SELECT id, symbol_id, symbol FROM imported_profile_data WHERE symbol_id=$1',
                    [lookupResult.rows[0].id],
                    (sublookupError, sublookupResult) => {
                        err(sublookupError);
                        if (sublookupResult.rows.length != 0) {
                            dbPool.query(
                                'UPDATE imported_profile_data SET symbol=$1 WHERE id=$2 AND symbol_id=$3 RETURNING *',
                                [symbol, sublookupResult.rows[0].id, sublookupResult.rows[0].symbol_id],
                                processResponse
                            );
                        } else {
                            dbPool.query(
                                'INSERT INTO imported_profile_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                                [lookupResult.rows[0].id, symbol],
                                processResponse
                            )
                        }
                    }
                );
            } else {
                dbPool.query(
                    'INSERT INTO known_symbols (symbol) VALUES ($1) RETURNING *',
                    [symbol],
                    (writeError, writeResult) => {
                        err(writeError);
                        dbPool.query(
                            'INSERT INTO imported_profile_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                            [writeResult.rows[0].id, symbol],
                            processResponse
                        )
                    }
                );
            }
        }
    );
};

const updateHistoricalPriceData = async (req, res) => {
    const processResponse = (error, result) => {
        err(error);
        res.status(201).json(`Historical price data updated in DB for ${result.rows[0].symbol}`);
    };
    const symbol = req.query['symbol'];
    // const clientResponse = await fetchHistoricalPriceData(symbol);
    dbPool.query(
        'SELECT id, symbol FROM known_symbols WHERE symbol=$1',
        [symbol],
        (lookupError, lookupResult) => {
            err(lookupError);
            if (lookupResult.rows.length != 0) {
                dbPool.query(
                    'SELECT id, symbol_id, symbol FROM imported_historical_price_data WHERE symbol_id=$1',
                    [lookupResult.rows[0].id],
                    (sublookupError, sublookupResult) => {
                        err(sublookupError);
                        if (sublookupResult.rows.length != 0) {
                            dbPool.query(
                                'UPDATE imported_historical_price_data SET symbol=$1 WHERE id=$2 AND symbol_id=$3 RETURNING *',
                                [symbol, sublookupResult.rows[0].id, sublookupResult.rows[0].symbol_id],
                                processResponse
                            );
                        } else {
                            dbPool.query(
                                'INSERT INTO imported_historical_price_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                                [lookupResult.rows[0].id, symbol],
                                processResponse
                            )
                        }
                    }
                );
            } else {
                dbPool.query(
                    'INSERT INTO known_symbols (symbol) VALUES ($1) RETURNING *',
                    [symbol],
                    (writeError, writeResult) => {
                        err(writeError);
                        dbPool.query(
                            'INSERT INTO imported_historical_price_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                            [writeResult.rows[0].id, symbol],
                            processResponse
                        )
                    }
                );
            }
        }
    );
};

const updateFinancialData = async (req, res) => {
    const processResponse = (error, result) => {
        err(error);
        res.status(201).json(`Financial data updated in DB for ${result.rows[0].symbol}`);
    };
    const symbol = req.query['symbol'];
    // const clientResponse = await fetchFinancialData(symbol);
    dbPool.query(
        'SELECT id, symbol FROM known_symbols WHERE symbol=$1',
        [symbol],
        (lookupError, lookupResult) => {
            err(lookupError);
            if (lookupResult.rows.length != 0) {
                dbPool.query(
                    'SELECT id, symbol_id, symbol FROM imported_financial_data WHERE symbol_id=$1',
                    [lookupResult.rows[0].id],
                    (sublookupError, sublookupResult) => {
                        err(sublookupError);
                        if (sublookupResult.rows.length != 0) {
                            dbPool.query(
                                'UPDATE imported_financial_data SET symbol=$1 WHERE id=$2 AND symbol_id=$3 RETURNING *',
                                [symbol, sublookupResult.rows[0].id, sublookupResult.rows[0].symbol_id],
                                processResponse
                            );
                        } else {
                            dbPool.query(
                                'INSERT INTO imported_financial_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                                [lookupResult.rows[0].id, symbol],
                                processResponse
                            )
                        }
                    }
                );
            } else {
                dbPool.query(
                    'INSERT INTO known_symbols (symbol) VALUES ($1) RETURNING *',
                    [symbol],
                    (writeError, writeResult) => {
                        err(writeError);
                        dbPool.query(
                            'INSERT INTO imported_financial_data (symbol_id, symbol) VALUES ($1, $2) RETURNING *',
                            [writeResult.rows[0].id, symbol],
                            processResponse
                        )
                    }
                );
            }
        }
    );
};

export default {
    updateProfileData,
    updateHistoricalPriceData,
    updateFinancialData,
};