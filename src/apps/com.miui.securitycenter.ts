import {defineAppConfig} from '../types';

export default defineAppConfig({
  id: 'com.miui.securitycenter',
  name: 'miui手机管家',
  groups: [
    {
      key: 0,
      name: '自动无障碍授权',
      activityIds: 'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
      rules: [
        '[id="com.miui.securitycenter:id/check_box"][checked=false]',
        'Button[text="确定"]',
      ],
    },
  ],
});
