import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const storage = localStorage.getItem("account");

  useEffect(() => {
    if (storage) {
      navigate("/authenticated", { replace: true });
    }
  }, [navigate, storage]);

  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center justify-center bg-background dark"
      }
    >
      <Outlet />
    </div>
  );
};
