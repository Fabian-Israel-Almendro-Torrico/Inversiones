// vite.config.ts
import legacy from "file:///E:/Visual%20Studio%20Code/Simulacion%20de%20Sistemas/Oficina%2011/Caso%202/Git%20Hub/Inversiones/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///E:/Visual%20Studio%20Code/Simulacion%20de%20Sistemas/Oficina%2011/Caso%202/Git%20Hub/Inversiones/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///E:/Visual%20Studio%20Code/Simulacion%20de%20Sistemas/Oficina%2011/Caso%202/Git%20Hub/Inversiones/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxWaXN1YWwgU3R1ZGlvIENvZGVcXFxcU2ltdWxhY2lvbiBkZSBTaXN0ZW1hc1xcXFxPZmljaW5hIDExXFxcXENhc28gMlxcXFxHaXQgSHViXFxcXEludmVyc2lvbmVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxWaXN1YWwgU3R1ZGlvIENvZGVcXFxcU2ltdWxhY2lvbiBkZSBTaXN0ZW1hc1xcXFxPZmljaW5hIDExXFxcXENhc28gMlxcXFxHaXQgSHViXFxcXEludmVyc2lvbmVzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9WaXN1YWwlMjBTdHVkaW8lMjBDb2RlL1NpbXVsYWNpb24lMjBkZSUyMFNpc3RlbWFzL09maWNpbmElMjAxMS9DYXNvJTIwMi9HaXQlMjBIdWIvSW52ZXJzaW9uZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbGVnYWN5KClcclxuICBdLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9zZXR1cFRlc3RzLnRzJyxcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb2MsT0FBTyxZQUFZO0FBQ3ZkLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
