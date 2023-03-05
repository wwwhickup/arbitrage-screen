import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import LiveChart from './components/LiveChart';
const socket = io('http://localhost:8080');

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  // push notification once profit is great than 3%
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('updated_arbitrage_window_data', (data) => {
      data.forEach((item: any) => {
        if(item.profit > 3) {
          addNotification({
            title: `New Profit ${item.token0} / ${item.token1}`,
            message: `${item.profit} %`,
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
          });
        }
      });
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('updated_arbitrage_window_data');
    };
  }, []);
  return (
    <div>
      <Notifications />
      <LiveChart />
      <div>
        <p>Connected: { isConnected }</p>
      </div>
    </div>
  )
}

export default App