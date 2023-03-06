module.exports = {
  extends: ['@voiceflow/eslint-config', '@voiceflow/eslint-config/typescript'],
  overrides: [
    {
      files: ['*.story.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
