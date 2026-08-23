import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './containers/Auth/Login.tsx';
import Register from './containers/Auth/Register.tsx';
import Home from './containers/Home.tsx';
import Default from './containers/layouts/Default.tsx';
import TripDetails from './containers/Driver/Trips/TripDetails.tsx';
import Error404 from './containers/Errors/Error404.tsx';
import Driver from './containers/layouts/Driver.tsx';
import Driverboard from './containers/Driver/Driverboard.tsx';
import NewTrip from './containers/Driver/Trips/NewTrip.tsx';
import Trips from './containers/Driver/Trips/Trips.tsx';
import HelpDriver from './containers/Driver/HelpDriver.tsx';
import NewVehicle from './containers/Driver/Vehicle/NewVehicle.tsx';
import EditVehicle from './containers/Driver/Vehicle/EditVehicle.tsx';
import EditTrip from './containers/Driver/Trips/EditTrip.tsx';
import DriverProfile from './containers/Driver/DriverProfile.tsx';
import About from './containers/About.tsx';

function Roteamento() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Driver />}>
                    <Route path='/painel-motorista' element={<Driverboard />} />
                    <Route path='/meu-perfil' element={<Driverboard />} />
                    <Route path='/ajuda' element={<Driverboard />} />

                    <Route path='/minhas-viagens' element={<Trips />} />
                    <Route path='/nova-viagem' element={<NewTrip />} />
                    <Route path='/viagem/:id' element={<EditTrip />} />

                    <Route path='/meus-veiculos' element={<Driverboard />} />
                    <Route path='/novo-veiculo' element={<NewVehicle />} />
                    <Route path='/veiculo/:id' element={<EditVehicle />} />

                    <Route path='/ajuda-motorista' element={<HelpDriver />} />
                    <Route path='/perfil-motorista' element={<DriverProfile />} />

                </Route>


                <Route element={<Default />}>
                    <Route path='/sair' element={<Home />} />
                    <Route path='*' element={<Error404 />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/viagem-detalhes/:id' element={<TripDetails />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Roteamento;