const { expect } = require('@jest/globals');

(function () {
  require('../src');

  const fs = require('fs');

  describe('api.basic test', () => {
    test('nx.srt should create srt items', function () {
      const str = fs.readFileSync('./__tests__/E401.srt').toString();
      const items = nx.srt(str);

      expect(items[0]).toEqual({
        start: 4066,
        end: 12016,
        duration: 7950,
        times: ['00:00:04,066', '00:00:12,016'],
        value:
          'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.'
      });

      expect(items.length).toBe(13);
    });
  });
})();
