export const LazyPage1 = () => {
  return <h1>LazyPage1</h1>;
};

// Necesario para que no falle el lazy loading del componente en el fuente src/01-layload/router/routes.ts
export default LazyPage1;
