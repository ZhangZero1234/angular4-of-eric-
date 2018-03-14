// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'qa',
  pmoServiceBasePath: 'https://appbe-ibmagri-test.mybluemix.net/br-pt/marketplace/ibmagri/',
  pmoServiceGetAllDocuments: 'v1/Users/PMO/getAll',
  pmoServiceGetDocumentsByIbmId: 'v1/Users?ibmId=',
  pmoServiceUpdatePMOById: 'v1/Users/PMO/Update',
  pmoServiceMailService: 'v1/PMO/sendEmail',
  pmoServiceRejectService: 'v1/Users/reject/'
};
