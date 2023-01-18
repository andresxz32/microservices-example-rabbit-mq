const common = [
    '--require-module ts-node/register' // Load TypeScript module
  ];
  
  const app_backend = [
    ...common,
    'tests/app/backend/features/**/*.feature',
    '--require tests/app/backend/features/step_definitions/*.steps.ts'
  ].join(' ');
  
  module.exports = {
    default: '--publish-quiet',
    app_backend,
  };
  