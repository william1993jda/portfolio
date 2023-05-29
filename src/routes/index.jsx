import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home/index.jsx";

import GitHubRepos from "../components/GitHubRepos";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/repositorios" element={<GitHubRepos />} />
            </Switch>
        </BrowserRouter>
    )
}