-- Schemas for testing ONLY

CREATE TABLE known_symbols (
    id              SERIAL          NOT NULL,
    symbol          VARCHAR(45)     NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE imported_profile_data (
    id              SERIAL          NOT NULL,
    symbol_id       INT             NOT NULL,
    symbol          VARCHAR(45)     NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE imported_historical_price_data (
    id              SERIAL          NOT NULL,
    symbol_id       INT             NOT NULL,
    symbol          VARCHAR(45)     NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE imported_financial_data (
    id              SERIAL          NOT NULL,
    symbol_id       INT             NOT NULL,
    symbol          VARCHAR(45)     NOT NULL,
    PRIMARY KEY (id)
);