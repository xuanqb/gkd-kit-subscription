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
          {
            matches: '[id="com.hpbr.bosszhipin:id/tv_improper"]'
          },
          {
            matches: '[text="BOSS活跃度低"]'
          },
          {
            matches: '[text="面试过/入职过"]'
          }
        ],
      },
    ],
  }
);