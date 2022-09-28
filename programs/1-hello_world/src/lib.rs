use anchor_lang::prelude::*;

declare_id!("A1zvqBnV7LPeCmSVg15CpFVUz8XEUh7aaGQwSB3WujgY");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {

        msg!("Hello Solana Blockchain!!⚡️⚡️⚡️⚡️");
        msg!("This will be your first program on Solana");
        msg!("Created on ewha bootcamp :) ");
        msg!("let's see if it appears on Solana Blockchain Logs 👀 👀 👀");
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}