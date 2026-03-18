import type { ComponentType } from 'react'
import {
  CalendarRange,
  Clock3,
  LayoutDashboard,
  Mic,
  Settings,
  Timer,
  Users,
  FolderKanban
} from 'lucide-react'

type IconType = ComponentType<{ className?: string; size?: number }>

export type NavLink = {
  href: string
  label: string
  description?: string
  badge?: string
  icon: IconType
}

export const primaryNav: NavLink[] = [
  {
    href: '/dashboard',
    label: 'داشبورد',
    description: 'نمای کلی امروز',
    icon: LayoutDashboard
  },
  {
    href: '/projects',
    label: 'پروژه‌ها',
    description: 'تیم‌ها و پروژه‌ها',
    icon: FolderKanban
  },
  {
    href: '/planner',
    label: 'برنامه‌ریز',
    description: 'کارهای روزانه و هفتگی',
    icon: CalendarRange
  },
  {
    href: '/pomodoro',
    label: 'پومودورو',
    description: 'جلسات تمرکز',
    icon: Timer
  },
  {
    href: '/timers',
    label: 'تایمرها',
    description: 'ثبت لپ و زمان',
    icon: Clock3
  },
  { href: '/team', label: 'تیم', description: 'چت و همکاری', icon: Users },
  {
    href: '/voice',
    label: 'صوت',
    description: 'اتاق‌ها و سیگنالینگ',
    icon: Mic
  }
]

export const secondaryNav: NavLink[] = [
  { href: '/settings', label: 'تنظیمات', icon: Settings }
]
