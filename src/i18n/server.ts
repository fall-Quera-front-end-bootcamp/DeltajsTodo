import { apiUrl } from '@/utilities/http'
import type { Lang, Messages } from './types'

const BUNDLES: Record<Lang, Messages> = {
  en: {
    'brand.name': 'Time',
    'header.focus': 'Focus',

    'nav.stopwatch.label': 'Stopwatch',
    'nav.stopwatch.description': 'Precision laps',
    'nav.timer.label': 'Timer',
    'nav.timer.description': 'Countdown blocks',
    'nav.world-time.label': 'World Time',
    'nav.world-time.description': 'Cities grid',
    'nav.daily-planner.label': 'Daily Planner',
    'nav.daily-planner.description': 'Time blocks',
    'nav.pomodoro.label': 'Pomodoro',
    'nav.pomodoro.description': 'Focus sprints',
    'nav.timezone.label': 'Timezone',
    'nav.timezone.description': 'Offsets map',

    'status.live': 'Live',
    'status.soon': 'Soon',

    'sidebar.tag': 'Time',
    'sidebar.title': 'All your clocks',
    'sidebar.copy':
      'Switch between stopwatch, timers, and planners without breaking flow.',
    'sidebar.tip':
      'Focus mode ships next. Meanwhile, stopwatch stays live here.',

    'coming.title': 'Coming soon',
    'coming.note':
      'We’re crafting this view. Want early access? Drop feedback using the button up top.',

    'focus.title': 'Focus mode is cooking',
    'focus.body':
      'Full-screen countdowns, keyboard control, and ambient dims. We’ll ping you when it lands.',
    'focus.close': 'Close',
    'focus.feedback': 'Send feedback',

    'footer.tagline': 'Built for focus & rhythm',

    'page.stopwatch.title': 'Stopwatch',
    'page.stopwatch.blurb': 'Track precise intervals.',
    'page.timer.title': 'Timer',
    'page.timer.blurb': 'Stack countdowns for routines.',
    'page.world-time.title': 'World Time',
    'page.world-time.blurb': 'Glance cities side by side.',
    'page.daily-planner.title': 'Daily Planner',
    'page.daily-planner.blurb': 'Drag blocks and reclaim your hours.',
    'page.pomodoro.title': 'Pomodoro',
    'page.pomodoro.blurb': '25/5 cycles with intent.',
    'page.timezone.title': 'Timezone',
    'page.timezone.blurb': 'Offsets made readable.',

    'stopwatch.session': 'Current session',
    'stopwatch.live': 'Live',
    'stopwatch.description':
      'Smooth intervals with 10ms precision. Perfect for sprints or habit reps.',
    'stopwatch.start': 'Start',
    'stopwatch.pause': 'Pause',
    'stopwatch.resume': 'Resume',
    'stopwatch.lap': 'Lap',
    'stopwatch.reset': 'Reset',
    'stopwatch.laps': 'Laps',
    'stopwatch.saved': '{count} saved',
    'stopwatch.noLaps':
      'No laps yet. Capture split times while the clock runs.',
    'stopwatch.lapLabel': 'Lap {id}',

    'language.choose': 'Choose your language',
    'language.subtitle': 'We’ll load the exact content for your locale.',
    'language.english': 'English',
    'language.persian': 'Persian (فارسی)',
    'language.loading': 'Loading language…',
    'user.guest': 'Guest',
    'user.signin': 'Sign in to sync'
  },
  fa: {
    'brand.name': 'زمان',
    'header.focus': 'تمرکز',

    'nav.stopwatch.label': 'کرنومتر',
    'nav.stopwatch.description': 'دقت میلی‌ثانیه‌ای',
    'nav.timer.label': 'تایمر',
    'nav.timer.description': 'شمارش معکوس',
    'nav.world-time.label': 'زمان جهان',
    'nav.world-time.description': 'شهرها کنار هم',
    'nav.daily-planner.label': 'برنامه‌ریز روزانه',
    'nav.daily-planner.description': 'بلوک‌بندی زمان',
    'nav.pomodoro.label': 'پومودورو',
    'nav.pomodoro.description': 'دوره‌های تمرکز',
    'nav.timezone.label': 'منطقه زمانی',
    'nav.timezone.description': 'اختلاف ساعت‌ها',

    'status.live': 'فعال',
    'status.soon': 'به‌زودی',

    'sidebar.tag': 'زمان',
    'sidebar.title': 'همه ساعت‌های شما',
    'sidebar.copy':
      'بین کرنومتر، تایمر و برنامه‌ریز جابه‌جا شوید بدون خروج از ریتم.',
    'sidebar.tip': 'حالت تمرکز به‌زودی می‌آید؛ فعلاً کرنومتر اینجاست.',

    'coming.title': 'به‌زودی',
    'coming.note':
      'در حال ساخت این بخش هستیم. می‌خواهید زودتر امتحان کنید؟ بازخورد بدهید.',

    'focus.title': 'حالت تمرکز در راه است',
    'focus.body':
      'نمای تمام‌صفحه، کنترل با کیبورد و تاریک‌کننده محیط. آماده که شد خبر می‌دهیم.',
    'focus.close': 'بستن',
    'focus.feedback': 'ارسال بازخورد',

    'footer.tagline': 'ساخته‌شده برای تمرکز و ریتم',

    'page.stopwatch.title': 'کرنومتر',
    'page.stopwatch.blurb': 'ثبت دقیق بازه‌ها.',
    'page.timer.title': 'تایمر',
    'page.timer.blurb': 'شمارش معکوس برای روتین‌ها.',
    'page.world-time.title': 'زمان جهان',
    'page.world-time.blurb': 'شهرها را کنار هم ببینید.',
    'page.daily-planner.title': 'برنامه‌ریز روزانه',
    'page.daily-planner.blurb': 'بلوک‌های زمانی را بکشید و جابه‌جا کنید.',
    'page.pomodoro.title': 'پومودورو',
    'page.pomodoro.blurb': 'دوره‌های ۲۵/۵ با هدف.',
    'page.timezone.title': 'منطقه زمانی',
    'page.timezone.blurb': 'اختلاف ساعت‌ها خوانا می‌شود.',

    'stopwatch.session': 'جلسه جاری',
    'stopwatch.live': 'فعال',
    'stopwatch.description':
      'فواصل نرم با دقت ۱۰ میلی‌ثانیه. مناسب اسپرینت یا عادت.',
    'stopwatch.start': 'شروع',
    'stopwatch.pause': 'توقف',
    'stopwatch.resume': 'ادامه',
    'stopwatch.lap': 'دور',
    'stopwatch.reset': 'ریست',
    'stopwatch.laps': 'دورها',
    'stopwatch.saved': '{count} ذخیره',
    'stopwatch.noLaps': 'هنوز دوری ثبت نشده. هنگام اجرا دور بگیرید.',
    'stopwatch.lapLabel': 'دور {id}',

    'language.choose': 'زبان را انتخاب کنید',
    'language.subtitle': 'محتوا را بر اساس زبان شما بارگذاری می‌کنیم.',
    'language.english': 'انگلیسی',
    'language.persian': 'فارسی',
    'language.loading': 'در حال بارگذاری زبان…',
    'user.guest': 'میهمان',
    'user.signin': 'برای همگام‌سازی وارد شوید'
  }
}

const postSelection = async (lang: Lang) => {
  if (import.meta.NEXT_PUBLIC_USE_MOCKS === 'true') return
  if (typeof fetch !== 'function') return
  try {
    await fetch(apiUrl('/api/user/locale'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ lang }),
      keepalive: true
    })
  } catch {
    // ignore network errors in dev / static mode
  }
}

export const fetchTranslations = async (lang: Lang): Promise<Messages> => {
  await postSelection(lang)
  await new Promise((resolve) => setTimeout(resolve, 200))
  return BUNDLES[lang] ?? BUNDLES.en
}

export const FALLBACK_MESSAGES = BUNDLES.en
