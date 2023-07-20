const fetch = require('node-fetch');
const fs = require('fs');
require('../src');

const srtURL =
  'https://njfhoddiowm4yjdj.saybot.net/generate/pieces/4de/4deff0bf7e32edc9f8adbabe960db3e318fb940b31f9e6b62667bf738260ff63.srt';



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

  test.only('remote srt file:', async ()=>{
    const content = await fetch(srtURL).then(r=>r.text())
    const res = nx.srt(content);
    console.log(res);
  })

});
