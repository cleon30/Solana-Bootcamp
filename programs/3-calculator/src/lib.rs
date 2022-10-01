use anchor_lang::prelude::*;

declare_id!("GaPG5CMtycjVuhWV7GezNc2W7BfDRhomH5Yq2hpLJYcz");
const DISCRIMINATOR_LENGTH: usize = 8;
const PUBKEY_LENGTH: usize = 32;
const UNSIGNED64_LENGTH: usize = 8;
#[program]

pub mod calculator {
    use super::*;

    pub fn create_counter(ctx: Context<CreateCounter>) -> Result<()> {

        msg!("Creating a Counter!!");

        let counter = &mut ctx.accounts.counter;
        counter.authority = ctx.accounts.authority.key();
        counter.count = 0;

        msg!("Current count is {}", counter.count);
        msg!("The Admin PubKey is: {} ", counter.authority);

        Ok(())
    }

    pub fn update_counter(ctx: Context<UpdateCounter>, input_number: u64, operation: String) -> Result<()> {

        let counter = &mut ctx.accounts.counter;
        
        match operation.as_str(){
            
            "add" =>{
                        counter.count = counter.count.checked_add(input_number).unwrap();
                    },
            "subtract"=>{
                        counter.count= counter.count.checked_sub(input_number).unwrap();
                    },   
            "multiply"=>{
                        counter.count= counter.count.checked_mul(input_number).unwrap();
                    },
            "divide"=>{
                        counter.count= counter.count.checked_div(input_number).unwrap();
                    },
            _=>msg!("operation not valid"),
        }

        Ok(())
    }

}

// Data validators

#[derive(Accounts)]
pub struct CreateCounter<'info> {
    #[account(mut)]
    authority: Signer<'info>,
    #[account(init, seeds=[authority.key().as_ref()], bump, payer=authority, space=Counter::LEN)]
    counter: Account<'info, Counter>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateCounter<'info> {
    authority: Signer<'info>,
    #[account(mut, has_one = authority)]
    counter: Account<'info, Counter>,
}

// Data structures
#[account]
pub struct Counter {
    authority: Pubkey,
    count: u64,
}

impl Counter {
    const LEN: usize = DISCRIMINATOR_LENGTH + PUBKEY_LENGTH + UNSIGNED64_LENGTH;
}