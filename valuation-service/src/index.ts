import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import evaluatorService from './service/evaluator';
import importerService from './service/importer';
import loaderService from './service/loader';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const port = 3002;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ['http://localhost:3000'],
    }),
);

/**
 * Importer
 */
app.get(
    '/importer/profile',
    async (req, res) => await importerService.updateProfileData(req, res),
);
app.get(
    '/importer/historical-price-data',
    async (req, res) => await importerService.updateHistoricalPriceData(req, res),
);
app.get(
    '/importer/financial-data',
    async (req, res) => await importerService.updateFinancialData(req, res),
);

/**
 * Evaluator
 */
app.get(
    '/evaluator/valuation/:symbol',
    async (req, res) => await evaluatorService.evaluateAssetValuation(req, res),
);

/**
 * Loader
 */
app.get(
    '/loader/profile/:symbol',
    async (req, res) => await loaderService.loadProfile(req, res),
);
app.get(
    '/loader/valuation/:symbol',
    async (req, res) => await loaderService.loadAssetValuation(req, res),
);

app.listen(port, () => {
    console.log();
    console.log(`Raven Valuation Service launched.`)
    console.log(`   Listening on port ${port}...`)
});