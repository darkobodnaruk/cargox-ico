# Introduction

This repository contains all the contracts required to run the CargoX ICO.

The contracts were taken from these repositories:
- https://github.com/gnosis/MultiSigWallet.git (commit c23be004ad993248281805303278abe14c410c8d)
- https://github.com/OpenZeppelin/zeppelin-solidity.git (commit 99f3e26f83f4628246b48c8b3afa5bb3958f5224)
- https://github.com/TokenMarketNet/ico.git (commit 481b02204f86260090392384d29c6b915c72311c)

All the repositories are included as a tar file for future reference (see cargox-repos.tar.gz).

All the configuration of the contracts is done in the file migrations/2_deploy_contracts.js.

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
