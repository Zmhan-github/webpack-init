import { app } from './dom';

import './styles.scss';

const greeter = {
    message: 'Стартовая страница WebPack',
}

const container = `
<div class='container'>
    <h1>${greeter.message}</h1>
</div>
`;

app.insertAdjacentHTML('afterbegin', container);


