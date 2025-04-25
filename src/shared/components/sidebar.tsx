import { Button } from '@heroui/react'
import {
  BoxIcon,
  FileBoxIcon,
  LayoutGridIcon,
  LogOutIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'
import { ComponentProps } from 'react'
import { useLocation } from 'react-router'

type ItemNavigationProps = ComponentProps<'a'> & {
  icon?: React.ReactNode
  title: string
  current: boolean
}

const ItemNavigation = ({
  icon,
  title,
  current,
  ...props
}: ItemNavigationProps) => {
  return (
    <a
      data-current={current}
      className="group flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-white hover:bg-zinc-800 data-[current=true]:bg-zinc-800"
      {...props}
    >
      {icon}
      <span className="font-normal group-hover:font-semibold group-data-[current=true]:font-semibold">
        {title}
      </span>
    </a>
  )
}

type NavigationProps = {
  id: number
  title: string
  href: string
  icon?: React.ReactNode
}

const navigations: NavigationProps[] = [
  {
    id: 1,
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutGridIcon className="size-5 text-white" />,
  },
  {
    id: 2,
    title: 'Clientes',
    href: '/clients',
    icon: <UsersIcon className="size-5 text-white" />,
  },
  {
    id: 3,
    title: 'Pedidos',
    href: '/orders',
    icon: <FileBoxIcon className="size-5 text-white" />,
  },
  {
    id: 3,
    title: 'Produtos',
    href: '/products',
    icon: <BoxIcon className="size-5 text-white" />,
  },
  {
    id: 4,
    title: 'Configurações',
    href: '/settings',
    icon: <SettingsIcon className="size-5 text-white" />,
  },
]

const Sidebar = () => {
  const path = useLocation()
  console.log(path.pathname)
  return (
    <div className="flex w-full max-w-[366px] flex-col gap-10 border-r border-r-zinc-800 bg-zinc-900 px-6 py-5">
      <h1 className="text-xl font-bold">VOLK MANAGER</h1>
      <nav className="flex-1">
        {navigations.map((item) => (
          <ItemNavigation
            key={item.id}
            href={item.href}
            icon={item.icon}
            title={item.title}
            current={item.href === path.pathname}
          />
        ))}
      </nav>
      <Button color="danger" variant="flat">
        Sair
        <LogOutIcon className="size-5" />
      </Button>
    </div>
  )
}

export { Sidebar }
