
const File = require('fs');


// adapted from an implementation by Thaddée Tyl (https://espadrine.github.io/).
// original source avaiable at https://gist.github.com/espadrine/172658142820a356e1e0

const stdin = '';


class STDIN {

  static get BUFSIZE() {
    return this._bufSize || 256;
  }

  static set BUFSIZE(val) {
    return this._bufSize = val;
  }

  static get() {
    let fd;
    let contents = '';
    let buf = new Buffer(this.BUFSIZE);

    try {
      // we'll try to use /dev/stdin in *nix environments..
      fd = File.openSync('/dev/stdin', 'rs');
    } catch(error) {
      // ..and fallback to Node's process.stdin otherwise.
      fd = process.stdin.fd;
    }

    while (true) {

      try {
        buf = File.readSync(fd, buf, 0, this.BUFSIZE, null);
        contents += buf.toString();

      } catch(err) {

        if (err.code === 'EOF') {
          break;
        } else {
          throw err;
        }

      }

    }

    if (fd !== process.stdin) {
      console.log('closing device');
      fs.closeSync(fd);
    } else {
    }

    return contents;
  }

}
