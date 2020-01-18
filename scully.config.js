exports.config = {
  projectRoot: './src/app',
  puppeteerLaunchOptions: { args: ['--no-sandbox'] },
  outFolder: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      }
    }
  }
};
