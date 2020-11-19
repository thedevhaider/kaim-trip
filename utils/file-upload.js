const AWS = require("aws-sdk");
const keys = require("../config/keys");

class FileUpload {
  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: keys.awsAccessKey,
      secretAccessKey: keys.awsSecretKey,
      region: keys.awsRegion,
    });
  }

  async upload(fileContent, root, name, type) {
    // Setting up S3 upload parameters
    const params = {
      Bucket: keys.s3BucketName,
      Key: `${root}/${this.nameToFolder(name)}/${this.generateFileName(type)}`, // File name you want to save as in S3
      Body: fileContent,
      ContentEncoding: "base64",
      ContentType: "image/jpeg",
    };

    try {
      // Uploading image to S3 Bucket
      const data = await this.s3.upload(params).promise();
      console.log(`File uploaded successfully. ${data.Location}`);
      return data.Location;
    } catch (error) {
      throw error;
    }
  }

  nameToFolder(name) {
    return name.toLowerCase().split(" ").join("_");
  }

  generateFileName(type) {
    return `${Date.now()
      .toString()
      .split("")
      .reverse()
      .join("")}_${type.toLowerCase()}.jpg`;
  }

  base64ToFile(base64Image) {
    return Buffer.from(
      base64Image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
  }
}

module.exports = FileUpload;
