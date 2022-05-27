import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "../";
import { LandingPage, HomePage, LabelsPage, ArchivePage, TrashPage, ProfilePage, LogInPage, LogOutPage, SignUpPage, PageNotFound } from "../../pages/index";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/home" element={ <RequiresAuth><HomePage /></RequiresAuth> } />
            <Route path="/labels" element={ <RequiresAuth><LabelsPage /></RequiresAuth> } />
            <Route path="/archive" element={ <RequiresAuth><ArchivePage /></RequiresAuth> } />
            <Route path="/trash" element={ <RequiresAuth><TrashPage /></RequiresAuth> } />
            <Route path="/profile" element={ <RequiresAuth><ProfilePage /></RequiresAuth> } />
            <Route path="/logIn" element={ <LogInPage /> } />
            <Route path="/logOut" element={ <LogOutPage /> } />
            <Route path="/signUp" element={ <SignUpPage /> } />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export { RoutesComponent };