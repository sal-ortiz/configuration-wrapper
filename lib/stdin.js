
const File = require('fs');


class STDIN {

  static get BUFSIZE() {
    return this._bufSize || 256;
  }

  static set BUFSIZE(val) {
    return this._bufSize = val;
  }

  static get() {
    let len = 0;
    let contents = '';
    let file = process.stdin.fd;

    let bufSize = this.BUFSIZE;
    let buf = new Buffer(bufSize);

    do {
      len = File.readSync(file, buf, 0, bufSize, null);

      let str = buf.toString();
      contents += str.slice(0, len);

    } while (len > 0);

    return contents;
  }

}


module.exports = STDIN;
