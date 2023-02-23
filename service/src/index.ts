import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import renderService from './service/render';
import updateService from './service/update';

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
 * Render
 */
app.get(
    '/render/profile',
    async (req, res) => await renderService.loadProfileData(req, res),
);
app.get(
    '/render/historical-price-data',
    async (req, res) => await renderService.loadHistoricalPriceData(req, res),
);
app.get(
    '/render/financial-data',
    async (req, res) => await renderService.loadFinancialData(req, res),
);

/**
 * Update
 */
app.get(
    '/update/profile',
    async (req, res) => await updateService.updateProfileData(req, res),
);
app.get(
    '/update/historical-price-data',
    async (req, res) => await updateService.updateHistoricalPriceData(req, res),
);
app.get(
    '/update/financial-data',
    async (req, res) => await updateService.updateFinancialData(req, res),
);

app.listen(port, () => {
    console.log();
    console.log(`Raven Service launched.`)
    console.log(`   Listening on port ${port}...`)
});