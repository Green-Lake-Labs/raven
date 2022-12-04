use spinners::{Spinner, Spinners};

use crate::Cli;
use crate::client::{
    hydrate::hydrate,
    import::import,
};
use crate::raven_cli::RavenCommand;

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
                    data_type, 
                    symbol
                )
            );
            import(data_type, symbol).await?;
            sp.stop();
        },
        RavenCommand::Hydrate(args) => {
            let data_type = &args.data;
            let mut sp = create_spinner(
                format!("Hydrating database with {} data for all cached firms...", 
                    data_type,
                )
            );
            hydrate(data_type).await?;
            sp.stop();
        }
    };
    println!("\n\nProcess completed successfully.");
    Ok(())
}