/**
 * Google Analytics query configurations
 *
 * ! If you are deploying this with your own account
 * ! , then you will need to change this config file.
 * ! Don't put your privateKey inside this file directly!
 */
export default {
  viewId: '229822278',
  auth: {
    projectId: 'cyfs-api',
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: 'blog-ga@cyfs-api.iam.gserviceaccount.com',
  },
  allFilter: ['/'],
  startDate: '2010-01-01',
}
