import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'
import * as Ably from 'ably';
import { AblyProvider, useChannel, usePresence } from 'ably/react';

const client2 = {
  key: 'Pns68A.YZZ_rg:7kRIzyMgEs_ZtiQL',
  clientId: 'your-ably-client-id'
}

const client = new Ably.Realtime('Pns68A.YZZ_rg:7kRIzyMgEs_ZtiQL');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AblyProvider client={client}>
      <App />
    </AblyProvider>
  </React.StrictMode>,
)
