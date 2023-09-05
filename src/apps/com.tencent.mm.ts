import {defineAppConfig} from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '关闭朋友圈广告',
      desc: '朋友圈信息流广告,点击关闭按钮,确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      rules: [
        'TextView[text="关闭该广告"]',
        'TextView[text="直接关闭"]',
        'ImageView - TextView[text="广告"][id!=null][index=0]',
      ],
    },
  ],
});
