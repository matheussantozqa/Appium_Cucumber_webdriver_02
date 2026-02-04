export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ====================
    // BrowserStack config
    // ====================
    hostname: 'hub.browserstack.com',
    port: 443,
    path: '/wd/hub',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './e2e/features/**/*.feature'
    ],

    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Google Pixel 5',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.BROWSERSTACK_APP_ID,

        'bstack:options': {
            projectName: 'Appium Cucumber WDIO',
            buildName: 'GitHub Actions Build',
            sessionName: 'E2E Android'
        }
    }],

    //
    // BrowserStack credentials
    //
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,

    //
    // ❌ NÃO usar Appium local em CI
    //
    services: [],

    //
    // Framework
    //
    framework: 'cucumber',

    reporters: [    
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false        
    }],
],


    cucumberOpts: {
        require: ['./e2e/step-definitions/**/*.js'],
        backtrace: false,
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};

