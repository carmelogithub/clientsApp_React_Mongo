import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";


interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}
export default function ProtectedRoute({
  component: Component,
  ...rest
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    console.log("use Effect");
    const checkAuth = async () => {
      const logged = !!localStorage.getItem('token');
      console.log(logged);
      setIsAuthenticated(logged);
      setLoading(false);
    };
    checkAuth();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <div>Cargando...</div>;
        }
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
