import nx from '@jswork/next';
import { parseSync } from 'subtitle';
import '@jswork/next-time2clock';

nx.srt = function (inContent) {
  const items = parseSync(inContent);
  return items.map(function (item) {
    const start = nx.get(item, 'data.start');
    const end = nx.get(item, 'data.end');
    return {
      start: start,
      end: end,
      duration: end - start,
      times: [nx.time2clock(start).srt, nx.time2clock(end).srt],
      value: nx.get(item, 'data.text')
    };
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.srt;
}

export default nx.srt;
