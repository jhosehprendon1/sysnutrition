import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MenuUnDia from './views/MenuUnDia';
import MenuUnDiaGracias from './views/MenuUnDiaGracias';
import MenuUnDiaDescarga from './views/MenuUnDiaDescarga';
import RetoCincoDias from './views/RetoCincoDias';
import RetoCincoDiasGracias from './views/RetoCincoDiasGracias';
import ProgramaPersonalizado from './views/ProgramaPersonalizado';
import ProgramaPersonalizadoGracias from './views/ProgramaPersonalizadoGracias';
import Login from './views/Login';
import WelcomeProgram from './views/WelcomeProgram';
import Quiz from './views/Quiz';
import QuizResults from './views/QuizResults';
import Symptoms from './views/Symptoms';
import Welcome from './views/Welcome';
import Profile from './views/Profile';
import Toolbox from "./views/Toolbox";
import Brain from "./views/systems/Brain";
import Digest from "./views/systems/Digest";
import Detox from "./views/systems/Detox";
import Blood from "./views/systems/Blood";
import Hormone from "./views/systems/Hormone";
import Muscle from "./views/systems/Muscle";
import Immune from "./views/systems/Immune";
import Week1 from './views/program/Week1';
import Week2 from './views/program/Week2';
import Week3 from './views/program/Week3';
import Week4 from './views/program/Week4';
import Week5 from './views/program/Week5';
import Week6 from './views/program/Week6';
import Week7 from './views/program/Week7';
import Week8 from './views/program/Week8';
import RetoBienvenida from './views/reto/RetoBienvenida';
import RetoPreparativos from './views/reto/RetoPreparativos';
import RetoDia1 from './views/reto/RetoDia1';
import RetoDia2 from './views/reto/RetoDia2';
import RetoDia3 from './views/reto/RetoDia3';
import RetoDia4 from './views/reto/RetoDia4';
import RetoDia5 from './views/reto/RetoDia5';
import RoutesLiterals from "./RoutesLiterals";
import PrivateRoute from "./PrivateRoute";
import './App.css';

const App = () => {
  const [systemsScore, setSystemsScore] = useState({})
  const [loggedUser, setLoggedUser] = useState(null)

  const sendScore = (score) => {
    setSystemsScore(score)
  }

  const setUser = (token) => {
    // console.log(token.refreshToken)
    setLoggedUser(token.refreshToken)
  }

  return (
    <Router>
      <Switch>
        <Route exact path={RoutesLiterals.login} component={() => <Login setUser={setUser}/>} />
        <Route exact path={RoutesLiterals.menuUnDia} component={MenuUnDia} />
        <Route exact path={RoutesLiterals.menuUnDiaGracias} component={MenuUnDiaGracias} />
        <Route exact path={RoutesLiterals.menuUnDiaDescarga} component={MenuUnDiaDescarga} />
        <Route exact path={RoutesLiterals.retoCincoDias} component={RetoCincoDias} />
        <Route exact path={RoutesLiterals.retoCincoDiasGracias} component={RetoCincoDiasGracias} />
        <Route exact path={RoutesLiterals.programaPersonalizado}component={ProgramaPersonalizado} />
        <Route exact path={RoutesLiterals.programaPersonalizadoGracias} component={ProgramaPersonalizadoGracias} />
        <PrivateRoute exact path={RoutesLiterals.welcomeProgram} component={WelcomeProgram} />
        <PrivateRoute exact path={RoutesLiterals.quiz} component={() => <Quiz sendScore={sendScore} />} />
        <PrivateRoute exact path={RoutesLiterals.quizResults} component={() => <QuizResults systemsScore={systemsScore} />} />
        <PrivateRoute exact path={RoutesLiterals.symptoms} component={Symptoms} />
        <PrivateRoute exact path={RoutesLiterals.welcome} component={Welcome} />
        <PrivateRoute exact path={RoutesLiterals.profile} component={() => <Profile systemsScore={systemsScore} loggedUser={loggedUser} />} />
        <PrivateRoute exact path={RoutesLiterals.toolbox} component={() => <Toolbox systemsScore={systemsScore} />} />
        <PrivateRoute exact path={RoutesLiterals.brain} component={Brain} />
        <PrivateRoute exact path={RoutesLiterals.digest} component={Digest} />
        <PrivateRoute exact path={RoutesLiterals.detox} component={Detox} />
        <PrivateRoute exact path={RoutesLiterals.blood} component={Blood}/>
        <PrivateRoute exact path={RoutesLiterals.hormone} component={Hormone} />
        <PrivateRoute exact path={RoutesLiterals.muscle} component={Muscle} />
        <PrivateRoute exact path={RoutesLiterals.immune} component={Immune} />
        <PrivateRoute exact path={RoutesLiterals.week1} component={Week1} />
        <PrivateRoute exact path={RoutesLiterals.week2} component={Week2} />
        <PrivateRoute exact path={RoutesLiterals.week3} component={Week3} />
        <PrivateRoute exact path={RoutesLiterals.week4} component={Week4} />
        <PrivateRoute exact path={RoutesLiterals.week5} component={Week5} />
        <PrivateRoute exact path={RoutesLiterals.week6} component={Week6} />
        <PrivateRoute exact path={RoutesLiterals.week7} component={Week7} />
        <PrivateRoute exact path={RoutesLiterals.week8} component={Week8} />
        <Route exact path={RoutesLiterals.retoBienvenida} component={RetoBienvenida} />
        <Route exact path={RoutesLiterals.retoPreparativos} component={RetoPreparativos} />
        <Route exact path={RoutesLiterals.retoDia1} component={RetoDia1} />
        <Route exact path={RoutesLiterals.retoDia2} component={RetoDia2} />
        <Route exact path={RoutesLiterals.retoDia3} component={RetoDia3} />
        <Route exact path={RoutesLiterals.retoDia4} component={RetoDia4} />
        <Route exact path={RoutesLiterals.retoDia5} component={RetoDia5} />
        <Route path='*' exact={true} component={MenuUnDia} />
      </Switch>
    </Router>
  );
}

export default App;
