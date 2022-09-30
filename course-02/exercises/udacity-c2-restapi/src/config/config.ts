export const config = {
  "dev": {
    // "username": "postgres",
    // "password": "postgres",
    // "database": "postgres",
    // "host": "postgres-db.cqspefw7uivu.us-east-1.rds.amazonaws.com",
    // "dialect": "postgres",
    // "aws_region": "us-east-1",
    // "aws_profile": "Udacity",
    // "aws_media_bucket": "udagram-zeinab-dev"
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres"
  }
}
