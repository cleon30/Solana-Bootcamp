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
    console.log("Your transaction signature", tx);
  });

  it("Fetch a counter!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    console.log("Your counter address", counterPubkey.toString());
    const counter = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter", counter);
  });

  it("Update a counter!", async () => {
    // Keypair = account
    const [counterPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [wallet.publicKey.toBytes()],
      program.programId
    );
    console.log("Your counter address", counterPubkey.toString());
    const counter = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter", counter);
    const tx = await program.methods
      .updateCounter()
      .accounts({
        counter: counterPubkey,
      })
      .rpc();
    console.log("Your transaction signature", tx);
    const counterUpdated = await program.account.counter.fetch(counterPubkey);
    console.log("Your counter", counterUpdated);
  });
});