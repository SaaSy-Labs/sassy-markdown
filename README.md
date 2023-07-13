# SAASY-MARKDOWN

SAASY Markdown npm lib

### Step 4: Install package inside your project using npm

## Installing packages

These packages are published to GitHub's private npm registry. As long as you have access to this
repository, you should be able to install them like a normal npm package.

### Step 1: Add `.npmrc` to project

At the root of your project, add an `.npmrc` file if it doesn't exist, and paste the snippet below:

```sh
@saasy-labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

This will tell `npm` to resolve packages scoped to `@saasy-labs` to `npm.pkg.github.com`.

### Step 2: Create a Personal Access Token on GitHub

Next, you will need to [create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) on GitHub with at least the `read:packages` scope. If you are contributing to a package in this repo, you can also grant `write:packages` as well.

### Step 3: Add `GITHUB_TOKEN` to local environment

Copy the token created in step 2. You will need to add this as an environment variable in your shell.

In your `.zshenv` or `.bashrc` (or whatever equivalent if you don't use `zsh` or `bash`, respectively) located in your `$HOME` directory (`~`), export a variable called `GITHUB_TOKEN` with the value being the token created during step 2.

```sh
export GITHUB_TOKEN=ghp_1a2b3c4d5e6f7g8h9i0j9k8l7m6n5o4p3q2r
```

:warning：**DO NOT commit this token to any repository or share it.**

### Step 4: Install packages

Now you should be able to install packages as a dependency in your project:

```sh
npm install @saasy-labs/saasy-markdown
```

## Install package using yarn v1

### Step 1: Add `.npmrc` to project

At the root of your project, add an `.npmrc` file if it doesn't exist, and paste the snippet below:

```sh
SaaSy-Labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

### Step 2: Create a Personal Access Token on GitHub

Next, you will need to [create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) on GitHub with at least the `read:packages` scope. If you are contributing to a package in this repo, you can also grant `write:packages` as well.

### Step 3: Add `GITHUB_TOKEN` to local environment

Copy the token created in step 2. You will need to add this as an environment variable in your shell.

In your `.zshenv` or `.bashrc` (or whatever equivalent if you don't use `zsh` or `bash`, respectively) located in your `$HOME` directory (`~`), export a variable called `GITHUB_TOKEN` with the value being the token created during step 2.

```sh
export GITHUB_TOKEN=ghp_1a2b3c4d5e6f7g8h9i0j9k8l7m6n5o4p3q2r
```

:warning：**DO NOT commit this token to any repository or share it.**

### Step 4: Install packages

Now you should be able to install packages as a dependency in your project:

```sh
yarn add SaaSy-Labs/sassy-markdown
```

## Publishing a new version for lib maintener

```sh
npm run rollup
```

Change version number inside package.json then commit and push changes

````

After that you can manually run the publish command.

```sh
npm publish --registry=https://npm.pkg.github.com
````
