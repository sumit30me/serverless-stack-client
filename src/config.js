const config = {
    s3: {
      REGION: "ap-south-1",
      BUCKET: "sam-test-proj",
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://ixlodumt5j.execute-api.ap-south-1.amazonaws.com/dev",
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_oUFwyg1Xh",
      APP_CLIENT_ID: "1peu6n59vebirfibp28otdge46",
      IDENTITY_POOL_ID: "ap-south-1:81891b38-5676-44f0-b789-e71514c72b85",
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IEAdoLw3QKkIrdMtoxbaWAfF87bY4F5ix34Lg9A7JRFI9JFQOZ0Ms0SAJCwoVrjQXOhzODLbuHZiPYuJYeZMRmf005w2yeEE7"
  };
  
  export default config;