const Ftp = require('jsftp');

function ftpConnection(){
    return new Promise((resolve, reject) => {
        const ftp = new Ftp();
        ftp.on('ready', () => {
            resolve(ftp);
        });
        ftp.on('error', (err: any) => {
            reject(err);
        });
        ftp.connect({
            host: 'ftp.example.com',
            user: 'anonymous',
            password: 'anonymous',
        });
    });
}

export default ftpConnection;