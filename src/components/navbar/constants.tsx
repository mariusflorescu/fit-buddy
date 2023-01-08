import ScheduleIcon from '@icons/classSchedule'
import OverviewIcon from '@icons/overview'
import ProfileIcon from '@icons/profile'
import { User } from '@prisma/client'

type NavItemsType = {
  userRole?: User['role'][]
  href: string
  name: string
  icon: JSX.Element
}

const NAV_ITEMS: NavItemsType[] = [
  {
    href: '/app/overview',
    name: 'Overview',
    icon: <OverviewIcon />
  },
  {
    userRole: ['USER'],
    href: '/app/classes',
    name: 'Classes',
    icon: <ScheduleIcon />
  },
  {
    userRole: ['TRAINER'],
    href: '/app/trainer/my-classes',
    name: 'My Classes',
    icon: <ScheduleIcon />
  },
  {
    userRole: ['USER', 'TRAINER'],
    href: '/app/profile',
    name: 'Profile',
    icon: <ProfileIcon />
  }
]

export default NAV_ITEMS
