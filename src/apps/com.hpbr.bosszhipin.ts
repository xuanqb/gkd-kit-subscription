import {defineAppConfig} from '../types';

export default defineAppConfig(
  {
    id: 'com.hpbr.bosszhipin',
    name: 'boss直聘',
    groups: [
      {
        key: 2,
        name: '识别boss活跃度低',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        rules: [
          '[id="com.hpbr.bosszhipin:id/boss_label_tv"][text="本周活跃"||text="本月活跃"||text="近半年活跃"||text="半年前活跃"||text$="周内活跃"||text$="月内活跃"||text$="日内活跃"] <n ViewGroup <n RecyclerView < FrameLayout <n ViewPager < RelativeLayout > FrameLayout[id="com.hpbr.bosszhipin:id/title_action_view"] >n [id="com.hpbr.bosszhipin:id/iv_another"]'
        ],
      },
      {
        key: 3,
        name: '自动点击不合适',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        rules: [
          '[id="com.hpbr.bosszhipin:id/tv_improper"]',
        ],
      },
      {
        key: 4,
        name: '跳过BOSS活跃度低',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="BOSS活跃度低"]',
        ],
      },
      {
        key: 5,
        name: '跳过职位停招',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="职位停招/招满"]',
        ],
      },
      {
        key: 6,
        name: '跳过面试过',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="面试过/入职过"]'
        ],
      },
      {
        key: 7,
        name: '跳过前端开发工程师',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="“前端开发工程师”职位"]',
        ],
      },
      {
        key: 8,
        name: '跳过实施工程师',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="“实施工程师”职位"]'
        ],
      },
      {
        key: 9,
        name: '跳过兼职',
        activityIds: [
          'com.hpbr.bosszhipin.module.position.BossJobPagerActivity',
          'com.hpbr.bosszhipin.module.map.activity.GeekRoute1004NewActivity',
          'com.monch.lbase.dialog.ProgressDialog',
          'com.hpbr.bosszhipin.module.main.activity.MainActivity'
        ],
        actionDelay: 600,
        rules: [
          '[text="兼职"]'
        ],
      },
    ],
  }
);