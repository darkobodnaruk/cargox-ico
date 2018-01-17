# Introduction

This repository contains all the contracts required to run the CargoX ICO.

The contracts were taken from these repositories:
- https://github.com/OpenZeppelin/zeppelin-solidity.git (commit 287b873add003494828c143f74f631224aa219f4)
- https://github.com/TokenMarketNet/ico.git (commit c0d9f11e76d0f34ff4c5bc0772be85ade20d2ac0)

All the repositories are included as a tar file for future reference (see cargox-repos.tar.gz).

All the configuration of the contracts is done in the file migrations/2_deploy_contracts.js.

# Bug bounty program

CargoX has reserved a good portion of it's funds for our bug bounty program.

Please disclose any security holes to security@cargox.io. This is our promise to you:

* We will financially reward disclosures (up to 50 ETH per disclosure).
* We will keep you updated on the status of your submission.
* We will not take legal action against you.     

# Installing the required software

In order to develop locally you need to have the following installed:

* Git
* NodeJS (for compiling contracts)
* truffle
* truffle-flattener

## Install git

Go to the [Git download page](https://git-scm.com/downloads) and download the
latest version.

## Installing NodeJS

### Mac users

Install NodeJS with Brew:

    $ brew install nodejs

and update it:

    $ sudo npm update -g npm

### Linux users

Follow [these instructions](https://nodejs.org/en/download/package-manager/)
for your distribution, then update:

    $ sudo npm update -g npm

# Setting up a local development environment

When setting up your local development version for the first time you need to
do the following things:

* Clone the repository
* Install the requirements

## Cloning the repository

To clone the repository execute the following command:

    $ git clone git@github.com:gapeslape/cargox-ico.git

## Installing the requirements

Execute the install command:

    $ npm install -g truffle
    $ npm install truffle-flattener -g
    $ npm install

## Testing environment

Testing is done on ropsten network. Use the following command to deploy to ropsten:

    $ truffle migrate --network ropsten
