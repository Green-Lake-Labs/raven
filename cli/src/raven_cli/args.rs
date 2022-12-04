use clap::{ 
    Parser, 
    Subcommand,
    ValueEnum,
};

#[derive(Subcommand)]
pub enum RavenCommand {
    Hydrate(HydrateArgs),
    Import(ImportArgs),
}

#[derive(ValueEnum, Clone)]
pub enum DataType {
    All,
    Financial,
    Price,
    Profile,
}

impl std::fmt::Display for DataType {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
       match *self {
            DataType::All => write!(f, "all"),
            DataType::Financial => write!(f, "financial"),
            DataType::Price => write!(f, "historical price"),
            DataType::Profile => write!(f, "profile"),
       }
    }
}

#[derive(Parser)]
pub struct HydrateArgs {
    #[arg(value_enum)]
    pub data: DataType,
}

#[derive(Parser)]
pub struct ImportArgs {
    #[arg(value_enum)]
    pub data: DataType,
    pub symbol: String,
}