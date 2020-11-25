# next-srt
> Parse srt subtitle content for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-srt
```

## usage
```js
import '@jswork/next-srt';

const str = `1
00:00:04,066 --> 00:00:12,016
We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.

2
00:00:12,432 --> 00:00:17,601
But there are some parts of the world where even now people cannot write.
`

nx.srt(str);

/*
[
  {
    start: 4066,
    end: 12016,
    duration: 7950,
    times: [ '00:00:04,066', '00:00:12,016' ],
    value: 'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.'
  },
  {
    start: 12432,
    end: 17601,
    duration: 5169,
    times: [ '00:00:12,432', '00:00:17,601' ],
    value: 'But there are some parts of the world where even now people cannot write.'
  },
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-srt/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-srt
[version-url]: https://npmjs.org/package/@jswork/next-srt

[license-image]: https://img.shields.io/npm/l/@jswork/next-srt
[license-url]: https://github.com/afeiship/next-srt/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-srt
[size-url]: https://github.com/afeiship/next-srt/blob/master/dist/next-srt.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-srt
[download-url]: https://www.npmjs.com/package/@jswork/next-srt
