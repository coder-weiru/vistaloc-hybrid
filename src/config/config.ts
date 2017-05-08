import { configOverridesGenerated } from './config-overrides-generated'
// DO NOT DELETE THIS FILE!!!

//==============================================
// Default configurations
//==============================================

const Config = {

  USER_POOL_ID:               'us-east-1_ctHZuwmwb',
  CLIENT_ID:                  '3p9k5og73vjbfpvt6ht126uc65',
  IDENTITY_POOL_ID:           'us-east-1:627546f0-77c7-4dc1-9866-c44019207c07',
  REGION:                     'us-east-1',  // Your AWS region where you setup your Cognito User Pool and Federated Identities

  PROFILE_IMAGES_S3_BUCKET:   'spacefinder-api-development-stack-userdatabucket-q7a1gxszshy4',

  API_ENDPOINT:               'https://4ilsqk658j.execute-api.us-east-1.amazonaws.com/development',

  DEVELOPER_MODE:             false, // enable to automatically login
  CODE_VERSION:               '1.0.0',
  DEFAULT_USERNAMES:          ['user1', 'admin1'] // default users cannot change their passwords
};

//==============================================



// Merge in the values from the auto-generated config.
// If there are are conflicts, then the values from the
// auto-generated config will override
function mergeConfigurations() {
  for (let attributeName of Object.keys(configOverridesGenerated)) {
    Config[attributeName] = configOverridesGenerated[attributeName];
  }
}

mergeConfigurations();

export { Config }
