import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Conventional_Services from "../pages/Conventional_Services";
import Diving_Services from "../pages/Diving_Services.jsx";
import Industrial_Services from "../pages/Industrial_Services";
import Marine_Craft from "../pages/Marine_Craft";
import Marine_Fenders from "../pages/Marine_Fenders";
import Marine_Salvage from "../pages/Marine_Salvage";
import Rope_Access from "../pages/Rope_Access";
import ROV_Inspections from "../pages/ROV_Inspections";
import Survey_Services from "../pages/Survey_Services";
import Hse from "../pages/Hse";
import Contact from "../pages/Contact";
import Clients from "../pages/Clients";
import Expertise from "../pages/Expertise.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/conventional_Services",
                element: <Conventional_Services/>
            },
            {
                path: "/diving_Services",
                element: <Diving_Services/>
            },
            {
                path: "/industrial_Services",
                element: <Industrial_Services/>
            },
            {
                path: "/marine_Craft",
                element: <Marine_Craft/>
            },
            {
                path: "/marine_Fenders",
                element: <Marine_Fenders/>
            },
            {
                path: "/marine_Salvage",
                element: <Marine_Salvage/>
            },
            {
                path: "/rope_Access",
                element: <Rope_Access/>
            },
            {
                path: "/rov_Inspections",
                element: <ROV_Inspections/>
            },
            {
                path: "/survey_Services",
                element: <Survey_Services/>
            },
            {
                path: "/hse",
                element: <Hse/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/clients",
                element: <Clients/>
            },
            {
                path: "/expertise",
                element: <Expertise/>
            },

            
        ]
    }
])
export default router