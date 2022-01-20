import path from 'path';
import crypto from 'crypto';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3'

export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    storage: multerS3({
        s3: new aws.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_DEFAULT_REGION
        }),
        bucket: process.env.BUCKET_NAME || 'informai',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${Date.now()}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),
}