# 💻 Automated Testing Project with Appium + Cucumber + WebdriverIO

This repository contains a comprehensive suite of **mobile E2E tests** using **Appium**, **Cucumber (Gherkin)** syntax, and **WebdriverIO (WDIO)**. The project is designed to test mobile applications, leveraging a robust **Page Object Model (POM)** and integrated with **Allure Report** for detailed test reporting. The entire test suite is orchestrated through a **GitHub Actions pipeline**, ensuring continuous integration and delivery.

---

## 🧱 Project Structure

```
.github/
├── workflows/                 # GitHub Actions CI/CD workflows
│   └── appium-tests.yml       # Pipeline for running Appium tests
app/                           # Mobile application under test (e.g., .apk or .ipa)
e2e/
├── features/                  # Gherkin feature files defining test scenarios
│   ├── example.feature
│   └── ...
└── step-definitions/          # Step definitions implementing Gherkin steps
    ├── exampleSteps.js
    └── ...
fixtures/                      # Page Object Model (POM) using JSON for selectors
├── pomDetailsCart.json
├── pomSearchFilters.json
├── pomUserAuth.json
├── pomshoppingCart.json
└── ...
```

---

## 🎯 Key Practices and Patterns

### 📌 POM - Page Object Model

-   The `fixtures/` folder centralizes all selectors and page elements in JSON files. This approach separates the UI element definitions from the test logic, enhancing maintainability and reusability across different test scenarios.
-   **Goal:** To create a robust, maintainable, and scalable test automation framework by abstracting page elements and interactions.

> Example: `pomUserAuth.json` might contain locators for username, password fields, and login buttons.

---

### 🚀 CI/CD Integration with GitHub Actions

-   The project includes a GitHub Actions workflow (`.github/workflows/appium-tests.yml`) that automates the execution of the Appium test suite.
-   Tests are configured to run on `ubuntu-latest` and utilize Node.js version 18.
-   Integration with **BrowserStack** is enabled, allowing tests to be executed on a wide range of real mobile devices and emulators/simulators. BrowserStack credentials are securely managed via GitHub Secrets (`BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, `BROWSERSTACK_APP_ID`).
-   **Allure Report** is generated automatically after test execution and uploaded as an artifact, providing comprehensive and interactive test results.

---

### 💡 Best Practices Applied

| Practice                  | Description                                                                                                                                |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **DRY** (Don't Repeat Yourself) | Page selectors are defined once in JSON fixtures and reused across step definitions.                                                         |
| **KISS** (Keep It Simple, Stupid) | Step definitions are concise and focused on a single action or verification, improving readability and maintainability.                      |
| **Single Responsibility** | Each feature file defines a specific set of user stories, and each step definition file implements the corresponding Gherkin steps. |
| **Clear Reporting**       | Allure Report provides detailed, human-readable test results, including steps, screenshots, and environmental information.                   |

---

## 🏃 Running the Tests

To set up and run the tests locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/matheussantozqa/Appium_Cucumber_webdriver_02.git
    cd Appium_Cucumber_webdriver_02
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Local Execution Prerequisites:**
    -   **Android Studio:** Ensure Android Studio is installed and configured.
    -   **Android Virtual Device (AVD):** Create and run an AVD with **Pixel 5, API 30**.
    -   **Appium Inspector:** Install Appium Inspector for session management and element inspection.
    -   **App Path:** Verify that the `appium:app` capability in your Appium configuration (e.g., `wdio.conf.js` or Appium Inspector capabilities) correctly points to the `.apk` file within your project, similar to the example below:

    ```json
    {
      "platformName": "Android",
      "appium:platformVersion": "11",
      "appium:deviceName": "Pixel 5 API 30",
      "appium:app": "C:\\Users\\Matheus\\Desktop\\TI\\QA\\DEVELOPMENT\\Appium-Cucumber_Webdriver_02\\app\\Android-MyDemoAppRN.1.3.0.build-244.apk",
      "appium:automationName": "UiAutomator2"
    }
    ```

4.  **Start Appium Server:**
    -   First, ensure your Android Virtual Device (Pixel 5 API 30) is running.
    -   In your project's root directory, start the Appium server:
    ```bash
    appium -p 4724
    ```

5.  **Start Appium Inspector Session:**
    -   Open Appium Inspector and start a new session using the configured capabilities.

6.  **Run all tests:**
    ```bash
    npx wdio run wdio.conf.js
    ```

7.  **Run specific tests (by feature file):**
    ```bash
    npx wdio wdio.conf.js --spec ./e2e/features/"your_feature_name".feature
    ```
    Replace `"your_feature_name".feature` with the actual name of your feature file.

8.  **Generate and open Allure Report:**
    ```bash
    npx allure generate allure-results --clean -o allure-report
    npx allure open allure-report
    ```

---

## 🔧 Tools and Technologies Used

-   **Appium**: Open-source test automation framework for mobile applications.
-   **Cucumber (Gherkin)**: Behavior-Driven Development (BDD) framework for writing human-readable test scenarios.
-   **WebdriverIO (WDIO)**: Next-gen browser and mobile automation test framework for Node.js.
-   **Allure Report**: Flexible lightweight test report tool that helps to create a clear and interactive representation of the test execution.
-   **JavaScript**: Programming language used for writing test scripts and step definitions.
-   **Page Object Model (POM)**: Design pattern used to enhance test maintenance and reduce code duplication.
-   **GitHub Actions**: CI/CD platform for automating workflows.
-   **BrowserStack**: Cloud-based platform for testing on real mobile devices and browsers.

---

## 📌 Notes

-   The project utilizes `.json` files within the `fixtures` directory for managing Page Object Model selectors, promoting modularity and ease of updates.
-   The CI/CD pipeline automatically triggers on `push` and `pull_request` events to the `main` branch, ensuring that all changes are thoroughly tested.
-   Environment variables for BrowserStack integration are expected to be configured as GitHub Secrets for security.
