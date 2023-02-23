use clap::{ 
    Parser, 
    Subcommand,
    ValueEnum,
};

#[derive(Subcommand)]
pub enum RavenCommand {
    Get(GetArgs),
    Hydrate(HydrateArgs),
    Import(ImportArgs),
}

#[derive(ValueEnum, Clone)]
pub enum GetDataType {
    All,
    Financial,
    Price,
    Profile,
}

impl std::fmt::Display for GetDataType {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
       match *self {
            GetDataType::All => write!(f, "all"),
            GetDataType::Financial => write!(f, "financial"),
            GetDataType::Price => write!(f, "historical price"),
            GetDataType::Profile => write!(f, "profile"),
       }
    }
}

#[derive(ValueEnum, Clone)]
pub enum ImportDataType {
    All,
    Financial,
    Price,
    Profile,
}

impl std::fmt::Display for ImportDataType {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
       match *self {
            ImportDataType::All => write!(f, "all"),
            ImportDataType::Financial => write!(f, "financial"),
            ImportDataType::Price => write!(f, "historical price"),
            ImportDataType::Profile => write!(f, "profile"),
       }
    }
}

#[derive(Parser)]
pub struct GetArgs {
    #[arg(value_enum)]
    pub data: GetDataType,
    pub symbol: String,
}

#[derive(Parser)]
pub struct HydrateArgs {
    #[arg(value_enum)]
    pub data: ImportDataType,
    #[arg(short, long, default_value_t = false)]
    pub revive_last: bool,
}

#[derive(Parser)]
pub struct ImportArgs {
    #[arg(value_enum)]
    pub data: ImportDataType,
    pub symbol: String,
}