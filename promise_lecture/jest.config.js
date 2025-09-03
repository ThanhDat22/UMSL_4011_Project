module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "testMatch": [
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "coverageThreshold": {
        "global": {
            "lines": 100,
            "statements": 100,
            "branches": 100,
            "functions": 100
        }
    }
};

// Bias towards pure functions
