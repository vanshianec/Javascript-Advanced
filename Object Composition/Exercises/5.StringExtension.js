(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this + '';
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this + '';
    };
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this + '';
        }
        if (this.length > n) {
            let lastIndex = this.lastIndexOf(' ', n - 2);
            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + '...';
            }
            return this.substring(0, n - 3) + '...';
        }
    };
    String.format = function (string, ...params) {
        for (let param of params) {
            let index = string.indexOf('{');
            if (index !== -1) {
                let oldSub = string.substring(index, index + 3);
                string = string.replace(oldSub, param);
            }
        }
        return string;
    };
}())
