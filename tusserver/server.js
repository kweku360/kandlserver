const {Server,FileKvStore} = require('@tus/server');
const {FileStore} = require('@tus/file-store');

const tusServer = new Server({
  path: '/files',
  async namingFunction(req,{filename}){
    const id = makeid(16);//crypto.randomBytes(16).toString('hex')
    return `${id}.${filename}`;
  },
  datastore: new FileStore({ directory: './files' })
})

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

module.exports = tusServer;