const RAVEN_URL: &str = "http://localhost:3002";

pub async fn import_profile_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/importer/profile")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn import_historical_price_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/importer/historical-price-data")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn import_financial_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    let query = [("symbol", symbol)];
    let client = reqwest::Client::new();
    let body = client.get(RAVEN_URL.to_owned() + "/importer/financial-data")
        .query(&query)
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}

pub async fn import_all_data(symbol: &str) -> Result<String, Box<dyn std::error::Error>> {
    import_profile_data(&symbol).await?;
    import_historical_price_data(&symbol).await?;
    import_financial_data(&symbol).await?;
    Ok("All imports finished.".to_string())
}