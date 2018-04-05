import { app } from './dom';

import './styles.scss';
import logo from './logo.svg';

const greeter = {
    message: 'Стартовая страница WebPack',
    logo,
}

const container = `
<div class='container'>
    <img src="${greeter.logo}">
    <h1>${greeter.message}</h1>
</div>
`;

app.insertAdjacentHTML('afterbegin', container);


