use clap::Parser;

mod client;
mod raven_cli;

use crate::raven_cli::{ 
    processor, 
    RavenCommand, 
};


#[derive(Parser)]
#[command(author, version, about, long_about = None)]
#[command(propagate_version = true)]
pub struct Cli {
    #[command(subcommand)]
    pub command: RavenCommand,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
   processor(Cli::parse()).await
}