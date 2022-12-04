use crate::client::import::{
    import_all_data,
    import_historical_price_data,
    import_financial_data,
    import_profile_data,
};

pub async fn hydrate_profile_data() -> Result<String, Box<dyn std::error::Error>> {
    let all_tickers = get_all_tickers();
    let total_tickers = all_tickers.len();
    let mut x = 1;
    println!();
    for symbol in all_tickers {
        import_profile_data(&symbol).await?;
        println!("  {}  ({}/{})", &symbol, x, total_tickers);
        x+=1;
    };
    Ok("Hydration of profile data finished.".to_string())
}

pub async fn hydrate_historical_price_data() -> Result<String, Box<dyn std::error::Error>> {
    let all_tickers = get_all_tickers();
    let total_tickers = all_tickers.len();
    let mut x = 1;
    println!();
    for symbol in all_tickers {
        import_historical_price_data(&symbol).await?;
        println!("  {}  ({}/{})", &symbol, x, total_tickers);
        x+=1;
    };
    Ok("Hydration of historical price data finished.".to_string())
}

pub async fn hydrate_financial_data() -> Result<String, Box<dyn std::error::Error>> {
    let all_tickers = get_all_tickers();
    let total_tickers = all_tickers.len();
    let mut x = 1;
    println!();
    for symbol in all_tickers {
        import_financial_data(&symbol).await?;
        println!("  {}  ({}/{})", &symbol, x, total_tickers);
        x+=1;
    };
    Ok("Hydration of financial data finished.".to_string())
}

pub async fn hydrate_all_data() -> Result<String, Box<dyn std::error::Error>> {
    let all_tickers = get_all_tickers();
    let total_tickers = all_tickers.len();
    let mut x = 1;
    println!();
    for symbol in all_tickers {
        import_all_data(&symbol).await?;
        println!("  {}  ({}/{})", &symbol, x, total_tickers);
        x+=1;
    };
    Ok("Hydration of all data finished.".to_string())
}

pub fn get_all_tickers() -> Vec<&'static str> {
    vec![
        "HYD",
    ]
}