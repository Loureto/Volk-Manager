import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const menuItems = ["Clientes", "Pedidos", "Produtos", "Sair"];

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const storage = localStorage.getItem("account");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!storage) {
      navigate("/", { replace: true });
    }
  }, [navigate, storage]);

  return (
    <div className="flex h-screen w-full flex-col bg-background dark">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        maxWidth="2xl"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit text-white">VOLK MANAGER</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Clientes
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              Pedidos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Produtos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contas a receber
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sair
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="dark">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <main className="mx-auto flex size-full max-w-[1536px] flex-col px-6">
        <Outlet />
      </main>
    </div>
  );
};
