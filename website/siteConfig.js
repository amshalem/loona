/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Loona', // Title for your website.
  tagline: 'Application State Management done with GraphQL',
  url: 'http://loona.app/', // Your website URL
  baseUrl: '/', // Base URL for your project

  // Used for publishing and more
  projectName: 'loona',
  organizationName: 'kamilkisiela',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{page: 'help', label: 'Help'}],

  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00A388',
    secondaryColor: '#182F3D',
  },

  copyright: `Copyright © ${new Date().getFullYear()} The Guild`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  usePrism: true,

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  headerLinks: [
    { doc: 'angular/index', label: 'Angular' },
    { doc: 'react/index', label: 'React' },
  ],

  editUrl: 'https://github.com/kamilkisiela/loona/edit/master/docs/',

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/kamilkisiela/loona',
};

module.exports = siteConfig;
