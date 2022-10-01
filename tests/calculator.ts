import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Calculator } from "../target/types/calculator";


describe("calculator", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const wallet = provider.wallet;
  const systemProgram = anchor.web3.SystemProgram;
  const program = anchor.workspace.Calculator as Program<Calculator>;

  it("Create Counter!", async () => {
    // Keypair = account
    const [counter, _counterBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [wallet.publicKey.toBytes()],
        program.programId
      );
    console.log("Your counter address", counter.toString());
    const tx = await program.methods
      .createCounter()
      .accounts({
        authority: wallet.publicKey,
        counter: counter,
        systemProgram: systemProgram.programId,
      })
      .rpc();
    
  });

  it("Fetch a counter!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    
    const counter = await program.account.counter.fetch(counterPubkey);
    
  });

  it("Add 10000 to the counter!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    
    const counter = await program.account.counter.fetch(counterPubkey);
    
    const tx = await program.methods
      .updateCounter(new anchor.BN(10000),"add")
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter is", counterUpdated.count.toNumber());
  });
  it("Subtract 5000 to the counter!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    
    const counter = await program.account.counter.fetch(counterPubkey);
    
    const tx = await program.methods
      .updateCounter(new anchor.BN(5000),"subtract")
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter is ", counterUpdated.count.toNumber());
  });
  it("Divide the counter by 2!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    
    const counter = await program.account.counter.fetch(counterPubkey);
    
    const tx = await program.methods
      .updateCounter(new anchor.BN(2),"divide")
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter is ", counterUpdated.count.toNumber());
  });
  it("Multiply the counter by 1000!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
        
    const tx = await program.methods
      .updateCounter(new anchor.BN(1000),"multiply")
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter is", counterUpdated.count.toNumber());
  });

  it("Divide the counter by 500!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    
    const counter = await program.account.counter.fetch(counterPubkey);
    
    const tx = await program.methods
      .updateCounter(new anchor.BN(500),"divide")
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter is ", counterUpdated.count.toNumber());
    console.log("Your counter admin is ", counterUpdated.authority.toString());
  });

});