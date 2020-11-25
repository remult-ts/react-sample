import express from 'express';
import { initExpress } from '@remult/server';
import * as fs from 'fs';
import { SqlDatabase } from '@remult/core';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { PostgresDataProvider, PostgresSchemaBuilder } from '@remult/server-postgres';
import { authorization } from '../common';

import '../users/users';

config(); //loads the configuration from the .env file
initDatabase().then(database => { 
    let app = express();
    let s = initExpress(app, database, process.env.DISABLE_HTTPS == "true");
    let signKey = process.env.TOKEN_SIGN_KEY;
    if (!signKey)
        throw "Please set the TOKEN_SIGN_KEY with a secret sign key";
    authorization.init(s, signKey);
    app.use(express.static('dist'));
    app.use('/*', async (req, res) => {

        const index = 'dist/index.html';
        if (fs.existsSync(index)) {
            res.send(fs.readFileSync(index).toString());
        }
        else {
            res.send('No Result: ' + index);
        }
    });
    let port = process.env.PORT || 3002;
    app.listen(port);
    
});

async function initDatabase() {
    let dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        throw "No DATABASE_URL environment variable found, if you are developing locally, please add a '.env' with DATABASE_URL='postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT*/*DATABASE*'";
    }
    const pool = new Pool({
        connectionString: dbUrl,
        ssl: process.env.DISABLE_POSTGRES_SSL ? false : { rejectUnauthorized: false }
    });
    let database = new SqlDatabase(new PostgresDataProvider(pool));
    await new PostgresSchemaBuilder(database).verifyStructureOfAllEntities();
    return database;
}