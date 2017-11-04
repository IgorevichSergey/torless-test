// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  host: 'https://api.tor-less.com/front_api_all_tags',
  companyImage: 'https://api.tor-less.com/addCompanyImageAjax',
  cafeteriaImage: 'https://api.tor-less.com/addCafeteriaImageAjax',
  productImage: 'https://api.tor-less.com/addProductImageAjax'
};
