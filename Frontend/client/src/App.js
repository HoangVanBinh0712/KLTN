import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./admin_scenes/global/Topbar";
import Sidebar from "./admin_scenes/global/Sidebar";
import Dashboard from "./admin_scenes/Dashboard";
import Account from "./admin_scenes/Account";
import Post from "./admin_scenes/Post";
import Bar from "./admin_scenes/Bar";
import Category from "./admin_scenes/Category";
import Form from "./admin_scenes/Form";
import Line from "./admin_scenes/Line";
import Pie from "./admin_scenes/Pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/post" element={<Post />} />
              <Route path="/category" element={<Category />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
