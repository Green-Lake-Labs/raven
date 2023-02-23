use crate::{raven_cli::ImportDataType, RAVEN_URL};

pub async fn update(data_type: &ImportDataType, symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    println!();
    match data_type {
        ImportDataType::All => update_all_data(&symbol).await?,
        ImportDataType::Financial => update_financial_data(&symbol).await?,
        ImportDataType::Price => update_historical_price_data(&symbol).await?,
        ImportDataType::Profile => update_profile_data(&symbol).await?,
    };
    Ok(format!("Import of {} data for {} finished.", data_type, symbol))
}

pub async fn update_profile_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/update/profile")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn update_historical_price_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/update/historical-price-data")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn update_financial_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/update/financial-data")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn update_all_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    update_profile_data(&symbol).await?;
    update_historical_price_data(&symbol).await?;
    update_financial_data(&symbol).await?;
    Ok("All updates finished.".to_string())
}