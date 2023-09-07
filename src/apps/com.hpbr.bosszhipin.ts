import {defineAppConfig} from '../types';

export default defineAppConfig(
  {
    id: 'com.hpbr.bosszhipin',
    name: 'boss直聘',
    groups: [
      {
        key: 1,
        name: '跳过不感兴趣',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        rules: [
          '[id="com.hpbr.bosszhipin:id/tv_improper"]',
          '[text="BOSS活跃度低"]',
          '[text="面试过/入职过"]',
          '[id="com.hpbr.bosszhipin:id/boss_label_tv"][text="本周活跃"||text="本月活跃"||text="近半年活跃"||text$="周内活跃"||text$="月内活跃"] <n ViewGroup <n RecyclerView < FrameLayout <n ViewPager < RelativeLayout > FrameLayout[id="com.hpbr.bosszhipin:id/title_action_view"] >n [id="com.hpbr.bosszhipin:id/iv_another"]'
        ],
      },
    ],
  }
);