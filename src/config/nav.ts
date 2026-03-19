import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import {
  CalendarRange,
  Clock3,
  LayoutDashboard,
  Mic,
  Settings,
  Timer,
  Users,
  FolderKanban,
  LucideProps
} from 'lucide-react'

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>

export type NavLink = {
  href: string
  label: string
  description?: string
  badge?: string
  icon: IconType
}

export const primaryNav: NavLink[] = [
  {
    href: '/app/dashboard',
    label: 'داشبورد',
    description: 'نمای کلی امروز',
    icon: LayoutDashboard
  },
  {
    href: '/app/dashboard/projects',
    label: 'پروژه‌ها',
    description: 'تیم‌ها و پروژه‌ها',
    icon: FolderKanban
  },
  {
    href: '/app/dashboard/planner',
    label: 'برنامه‌ریز',
    description: 'کارهای روزانه و هفتگی',
    icon: CalendarRange
  },
  {
    href: '/app/dashboard/pomodoro',
    label: 'پومودورو',
    description: 'جلسات تمرکز',
    icon: Timer
  },
  {
    href: '/app/dashboard/timers',
    label: 'تایمرها',
    description: 'ثبت لپ و زمان',
    icon: Clock3
  },
  {
    href: '/app/dashboard/team',
    label: 'تیم',
    description: 'چت و همکاری',
    icon: Users
  },
  {
    href: '/app/dashboard/voice',
    label: 'صوت',
    description: 'اتاق‌ها و سیگنالینگ',
    icon: Mic
  }
]

export const secondaryNav: NavLink[] = [
  { href: '/app/dashboard/settings', label: 'تنظیمات', icon: Settings }
]
