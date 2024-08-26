import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Screens/Navigation";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
 return (
  <QueryClientProvider client={queryClient}>
   <Router>
    <Navigation />
   </Router>
  </QueryClientProvider>
 );
}

export default App;
