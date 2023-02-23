use crate::{raven_cli::GetDataType, RAVEN_URL};

pub async fn get(data_type: &GetDataType, symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    println!();
    match data_type {
        GetDataType::All => get_all_data(&symbol).await?,
        GetDataType::Financial => get_financial_data(&symbol).await?,
        GetDataType::Price => get_historical_price_data(&symbol).await?,
        GetDataType::Profile => get_profile_data(&symbol).await?,
    };
    Ok(format!("Import of {} data for {} finished.", data_type, symbol))
}

pub async fn get_profile_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/render/profile")
        .query(&query)
        .send()
        .await?
        .json()
        .await?;

    Ok(body)
}

pub async fn get_historical_price_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/render/historical-price-data")
        .query(&query)
        .send()
        .await?
        .json()
        .await?;

    Ok(body)
}

pub async fn get_financial_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/render/financial-data")
        .query(&query)
        .send()
        .await?
        .json()
        .await?;

    Ok(body)
}

pub async fn get_all_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    get_profile_data(&symbol).await?;
    get_historical_price_data(&symbol).await?;
    get_financial_data(&symbol).await?;
    Ok("All imports finished.".to_string())
}