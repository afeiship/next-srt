(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var parseSync = require('subtitle').parseSync;
  var time2clock = nx.time2clock || require('@jswork/next-time2clock');

  nx.srt = function (inContent) {
    var items = parseSync(inContent);
    return items.map(function (item, index) {
      var start = nx.get(item, 'data.start');
      var end = nx.get(item, 'data.end');
      return {
        start: start,
        end: end,
        duration: end - start,
        times: [time2clock(start).srt, time2clock(end).srt],
        value: nx.get(item, 'data.text')
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.srt;
  }
})();
