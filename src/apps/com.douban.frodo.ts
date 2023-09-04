import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: 1,
      name: '首页推荐广告',
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      rules: ['[id="com.douban.frodo:id/ad_header_new"] > [id="com.douban.frodo:id/menu_item"]','[text="不感兴趣"]']
    }
  ],
});