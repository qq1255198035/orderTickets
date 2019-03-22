import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';
import zhHK from 'vant/lib/locale/lang/zh-HK';
export function Locals(a) {
      if (a == 'en') {
            Locale.use('en', enUS);
      } else if (a == 'zhCN') {
            Locale.use('zh-CN', zhCN);
      } else if (a == 'zh-HK') {
            Locale.use('zh-HK', zhHK);
      }
}
