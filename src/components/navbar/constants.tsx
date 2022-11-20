import ScheduleIcon from '@icons/classSchedule'
import OverviewIcon from '@icons/overview'
import ProfileIcon from '@icons/profile'

const NAV_ITEMS = [
  {
    href: '/app/overview',
    name: 'Overview',
    icon: <OverviewIcon />
  },
  {
    href: '/app/classes',
    name: 'Classes',
    icon: <ScheduleIcon />
  },
  {
    href: '/app/profile',
    name: 'Profile',
    icon: <ProfileIcon />
  }
]

export default NAV_ITEMS
