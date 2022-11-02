module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          'no-prettier-block': false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
      },
    },
  },
};
