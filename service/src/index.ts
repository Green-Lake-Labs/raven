import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
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
 * Loader
 */
app.get(
    '/loader/profile',
    async (req, res) => await loaderService.loadProfileData(req, res),
);
app.get(
    '/loader/historical-price-data',
    async (req, res) => await loaderService.loadHistoricalPriceData(req, res),
);
app.get(
    '/loader/financial-data',
    async (req, res) => await loaderService.loadFinancialData(req, res),
);

app.listen(port, () => {
    console.log();
    console.log(`Raven Service launched.`)
    console.log(`   Listening on port ${port}...`)
});