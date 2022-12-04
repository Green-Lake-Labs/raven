use spinners::{Spinner, Spinners};

use crate::Cli;
use crate::raven_cli::{ 
    DataType,
    RavenCommand, 
};
use crate::client::{
    hydrate::{
        hydrate_all_data,
        hydrate_historical_price_data,
        hydrate_financial_data,
        hydrate_profile_data,
    },
    import::{
        import_all_data,
        import_historical_price_data,
        import_financial_data,
        import_profile_data,
    }
};

fn create_spinner(msg: String) -> Spinner {
    Spinner::new(Spinners::Dots9, msg.into())
}

pub async fn processor(cli: Cli) -> Result<(), Box<dyn std::error::Error>> {
    match &cli.command {
        RavenCommand::Import(args) => {
            let symbol = &args.symbol;
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Importing {} data for {}...", 
                    &data_type, 
                    &symbol
                )
            );
            match &data_type {
                DataType::All => import_all_data(&symbol).await?,
                DataType::Financial => import_financial_data(&symbol).await?,
                DataType::Profile => import_profile_data(&symbol).await?,
                DataType::Price => import_historical_price_data(&symbol).await?,
            };
            sp.stop();
        },
        RavenCommand::Hydrate(args) => {
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Hydrating database with {} data for all cached firms...", 
                    &data_type,
                )
            );
            match &data_type {
                DataType::All => hydrate_all_data().await?,
                DataType::Financial => hydrate_financial_data().await?,
                DataType::Profile => hydrate_profile_data().await?,
                DataType::Price => hydrate_historical_price_data().await?,
            };
            sp.stop();
        }
    };
    println!("\n\nProcess completed successfully.");
    Ok(())
}