use anchor_lang::prelude::*;

declare_id!("GhmjxBpwS2J9EbiBW7PxJHrJwsHJSYkQvb3L9GM15su3");

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