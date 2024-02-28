const {Server,FileKvStore} = require('@tus/server');
const {FileStore} = require('@tus/file-store');

const tusServer = new Server({
  path: '/files',
  async namingFunction(req,{filename}){
    const id = crypto.randomBytes(16).toString('hex')
    return `${id}.${filename}`;
  },
  datastore: new FileStore({ directory: './files' })
})

module.exports = tusServer;