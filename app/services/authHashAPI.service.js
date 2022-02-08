angular.module("testActSafra").service("authHashAPI", function (global, md5) {
    this.getHash = function () {
        let _publicKEY = global.publicKEY
        let _privateKEY = global.privateKEY
        let _ts = Math.floor(new Date) / 1000

        return {
            hash: md5.createHash(_ts + _privateKEY + _publicKEY),
            ts: _ts
        }
    }
})