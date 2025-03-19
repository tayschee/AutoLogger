# Autologger

**Autologger** is a project designed to automatically collect daily rewards from various games. Currently, it supports only the game **Amour Sucré New Gen**, with the possibility of adding other games in the future.

## Features

- Automatically collects daily rewards for the **Amour Sucré New Gen** game.
- Support for adding additional games in the future.
- Better UI/UX design

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** - [Yarn Installation Guide](https://yarnpkg.com/getting-started/install)
- **React Native CLI** - [React Native CLI Installation](https://reactnative.dev/docs/environment-setup)
- **Android Studio** (for Android development) or **Xcode** (for iOS development).

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/autologger.git
    ```

2. Navigate into the project directory:

    ```bash
    cd autologger
    ```

3. Install the required dependencies using **npm** or **yarn**:

    Using npm:

    ```bash
    npm install
    ```

    Or using Yarn:

    ```bash
    yarn install
    ```

4. If you're using Android, make sure you have **Android Studio** set up. For iOS, ensure **Xcode** is installed.

## Running the App

To start the app, use one of the following commands depending on the platform you're working with.

- For **Android**:

    ```bash
    npm run android
    ```

- For **iOS** (macOS only):

    ```bash
    npm run ios
    ```

## Usage

Once the app is open, iyou can add an account of **Amour Sucré New Gen** and press play button everyday to collect your rewards. you can collect mutiple account in one time.

### Adding a New Game

If you wish to add support for a new game, you can follow these steps:

1. Create a new file for the game in the `utils/games/` directory.
2. Implement the logic for collecting daily rewards for that game within this file.
3. Ensure your code handles authentication and reward collection mechanisms for the new game.
4. Update the main script to include the new game.

## Contributing

Contributions are welcome! If you'd like to add a feature, fix a bug, or improve the documentation, feel free to open an issue or submit a pull request.
