export interface SrcItem {
  start: number;
  end: number;
  duration: number;
  times: [string, string];
  value: string;
}

interface NxStatic {
  srt: (contnet: string) => SrcItem[];
}
