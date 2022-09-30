<div align="center">
  <h1>
    <code>Deploy your first Solana Program!</code>
  </h1>

  
   <sub>
    Built in Solana using 🦀 and Anchor 
     
  </sub>
  
</div>

## Table of Contents

- 1 [Presentation](#1-presentation) 
- 2 [Introduction](#2-introduction) 
- 3 [Requirements/Installation](#3-requirementsinstallation) 
  -  [Prerequirements if you are using Windows](#prerequirements-if-you-are-using-windows) 
- 4 [Command Line Interface(CLI)](#4-command-line-interfacecli) 
  - 4.1 [Getting Started with your Anchor project!](#41-getting-started-with-your-anchor-project) 
  - 4.2 [Working on localhost](#42-working-on-localhost)
  - 4.3 [Fungible Tokens](#43-fungible-tokens)
  - 4.4 [Non Fungible Tokens(NFT)](#44-non-fungible-tokensnft)
- 5 [Deploy your first Solana Program!](#5-deploy-your-first-solana-program)
  - 5.1 [Structure of an Anchor Project](#51-structure-of-an-anchor-project)
  - 5.2 [Hello Solana World!](#52-hello-solana-world-%EF%B8%8F)
  - 5.3 [Basic Counter 📝](#53-basic-counter-)
  - 5.4 [Advanced Counter](#54-advanced-counter)
  - 5.5 [Extra:Lottery](#55-extra-lottery-)

## **1. Presentation**

In this workshop you will be hands-on building and deploying Solana Programs! 
https://docs.google.com/presentation/d/1VigV00PPIHhIcho0MaThDdaWgQjlZyq2mqL2JqV_JxI/edit?usp=sharing

## **2. Introduction**

This workshop will be conducted by cleon in the ewhachain Bootcamp at the Dreamplus Gangnam building. Will be an introductory workshop to start playing with CLI commands, and also to start creating Solana Programs, understanding the logic behind them.   

## **3. Requirements/Installation**

The requirements to get started will depend on your OS.

### **Prerequirements if you are using Windows**

First, you will need to install wsl(Windows Subsystem for Linux) on your computer because Anchor is not windows friendly. 
When you have completed that, you will have to integrate the wsl on Visual Studio Code to be able to work with the terminal. 
Now you are ready to install everything :)
### **Installation**

You will have to install Rust Programming language, Solana, Yarn and Anchor. There is a brief tutorial in: https://book.anchor-lang.com/getting_started/installation.html


## **4. Command Line Interface(CLI)**

### **4.1 Getting Started with your Anchor project!**

The CLI is a very important tool for Blockchain Devs and will be useful to check multiple data on-chain and manage different instructions. To get started correctly, let's begin in the Visual Studio Code environment!

We will have to open an empty folder that will be used for our Solana Project. After that, we will open a new Terminal.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/62452212/193342404-d9945fb0-d496-4d88-a2af-932748719fcd.png">

Nice, now let's Initialize our Anchor Environment! For our CLI commands will not be necessary at all, but will be useful in order to know where is your Solana Wallet inside your computer. And in the Anchor.toml file we will see where is our wallet located.

```bash
anchor init hello-world
```

<img width="1427" alt="image" src="https://user-images.githubusercontent.com/62452212/193345945-0c7d7329-21aa-4374-9845-eedccf80d04a.png">

Good! Now we are ready to play with CLI commands :) 

### **4.2 Working on localhost**

In this workshop we will be working on Localhost, this means that we will be running a Solana Blockchain inside our computer. For that we will also need to create a validator.
First, let's set our network to Localhost.

```bash
solana config set --url localhost
```

After that, let's create a Validator on our Localhost to initialize our own Solana Blockchain

```bash
solana-test-validator
```

It should appear something like this:

<img width="512" alt="image" src="https://user-images.githubusercontent.com/62452212/193347096-767232be-98af-4e4c-8a55-19a9cc34c121.png">

Now, let's try to send some SOL to our wallet address with the airdrop command.

```bash
solana airdrop 200 ~/.config/solana/id.json
```
```bash
solana account ~/.config/solana/id.json
```

And also, will be important to set our keypair to create the Tokens from next steps!

```bash
solana config set --keypair ~/.config/solana/id.json
```
<img width="552" alt="image" src="https://user-images.githubusercontent.com/62452212/193349615-dcc083e0-9669-405c-a6a3-765f9f1c1176.png">


### **4.3 Fungible Tokens**

We will be using SPL token libraries to create Fungible and Non Fungible Tokens.
Let's create a token:
```bash
spl-token create-token
```
You should see something like:

<img width="473" alt="image" src="https://user-images.githubusercontent.com/62452212/193350609-3257f678-612f-4ffe-9b1b-12bf85a669c1.png">

Note that this doesn't have a supply yet
You can test this with

```bash
spl-token supply <Token ID>
```
Now create an account to hold the token

```bash
spl-token create-account <Token ID>
```
<img width="450" alt="image" src="https://user-images.githubusercontent.com/62452212/193351691-579c18dc-9781-44cd-baee-466ee7e0866a.png">

Mint some tokens into that account

```bash
spl-token mint <Token ID> 21000000
```

<img width="450" alt="image" src="https://user-images.githubusercontent.com/62452212/193351994-8650ed0f-6e2d-48af-9b76-f017c9f20618.png">

You can check the token balance for an account with
```bash
spl-token balance <Token ID>
```
and the supply with
```bash
spl-token supply <Token ID>
```
If you want a summary of the tokens that you own use:
```bash
spl-token accounts
```
### **4.4 Non Fungible Tokens(NFT)**

## **5. Deploy your first Solana Program**

### **5.1 Structure of an Anchor Project**

### **5.2 Hello Solana World! ☀️**

### **5.3 Basic Counter 📝**

### **5.4 Advanced Counter**

### **5.5 Extra: Lottery 🎰**

