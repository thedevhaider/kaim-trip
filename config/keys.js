module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.secretOrKey,
  adminName: process.env.ADMIN_NAME,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  awsAccessKey: process.env.AWS_ACCESS_KEY,
  awsSecretKey: process.env.AWS_SECRET_KEY,
  s3BucketName: process.env.S3_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
  s3RootDestinationFolder: process.env.S3_ROOT_DESTINATION_FOLDER,
  s3RootPlaceFolder: process.env.S3_ROOT_PLACE_FOLDER,
};
