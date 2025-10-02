module.exports = {
  ci: {
    collect: {
      url: [
        "https://kuzanatoliy.github.io/cssbattle-notebook/",
        "https://kuzanatoliy.github.io/cssbattle-notebook/1_pilot_battle/",
        "https://kuzanatoliy.github.io/cssbattle-notebook/1_pilot_battle/1_simply_square.html",
      ],
      // startServerCommand: "node server.js",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
