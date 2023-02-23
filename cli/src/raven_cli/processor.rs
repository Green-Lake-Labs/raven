use serde_json::to_string_pretty;
use spinners::{Spinner, Spinners};

use crate::Cli;
use crate::client::{
    get::get,
    hydrate::hydrate,
    update::update,
};
use crate::raven_cli::RavenCommand;

fn create_spinner(msg: String) -> Spinner {
    Spinner::new(Spinners::Dots9, msg.into())
}

pub async fn processor(cli: Cli) -> Result<(), Box<dyn std::error::Error>> {
    match &cli.command {
        RavenCommand::Get(args) => {
            let symbol = &args.symbol;
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Fetching {} data for {}...", 
                    data_type, 
                    symbol
                )
            );
            let res = get(data_type, symbol).await?;
            sp.stop();
            println!("{:?}", to_string_pretty(&res));
        },
        RavenCommand::Import(args) => {
            let symbol = &args.symbol;
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Importing new {} data for {}...", 
                    data_type, 
                    symbol
                )
            );
            update(data_type, symbol).await?;
            sp.stop();
        },
        RavenCommand::Hydrate(args) => {
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Hydrating database with {} data for all cached firms...", 
                    data_type,
                )
            );
            hydrate(
                data_type,
                args.revive_last,
            ).await?;
            sp.stop();
        }
    };
    println!("\n\nProcess completed successfully.");
    Ok(())
}