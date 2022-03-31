import { Routes } from "react-router-dom";
import { LandingPage, HomePage, LabelsPage, ArchivePage, TrashPage, ProfilePage } from "../../pages";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/labels" element={ <LabelsPage /> } />
            <Route path="/archive" element={ <ArchivePage /> } />
            <Route path="/trash" element={ <TrashPage /> } />
            <Route path="/profile" element={ <ProfilePage /> } />
        </Routes>
    );
}

export { RoutesComponent };