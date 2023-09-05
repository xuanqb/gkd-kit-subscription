import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.baidu.netdisk.ui.Navigate',
      rules: [
        'TextView[text^="跳过"][clickable=true]',
        "[id='com.byted.pangle:id/tt_splash_skip_btn']", // 1687136781353
      ],
    },
  ],
});
