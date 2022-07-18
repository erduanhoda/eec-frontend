import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { QueryClient, QueryClientProvider } from "react-query";
import { TotalConsumption } from "./pages/TotalConsumption";
import { TotalEnerySold } from "./pages/TotalEnergySold";
import { BatterySoC } from "./pages/BatterySoC";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" element={<Overview />} />
        <Route path="/total-consumption-today" element={<TotalConsumption />} />
        <Route path="/total-energy-sold" element={<TotalEnerySold />} />
        <Route path="/battery-soc" element={<BatterySoC />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
