import info from './baseInfo.json';
import collector from './assets/collector.png';
import './App.css';
import moment, {months} from 'moment';
import React from 'react';

function App() {
    const content = React.useMemo(() => {
        const d = [];
        const months = info.date.months;
        if (months) {
            for (let i = 0; i < months; i++) {
                const dateFrom = info.date.from;
                const dateFormat = 'DD.MM.YYYY';
                const date = moment(dateFrom, dateFormat);
                const curDate = date.add(i, 'months');

                d.push(
                    <div className="content">
                        <h4 className="title-wrap">
                            <span className="title">{info.title}</span>
                            <span>Date: {curDate.format(dateFormat)}</span>
                        </h4>
                        <div className="text">
                            <p>Received From: <span>{info.receivedFrom}</span></p>
                            <p>The Sum of Ringgit: <span>{info.ringgit}</span></p>
                            <p>Address: <span>{info.address}</span></p>
                        </div>
                        <div className="collector">
                            COLLECTOR: <img src={collector} alt="collector" />
                        </div>
                    </div>
                );
            }
        }
        return d;
    }, []);

  return (
    <div className="App">
        {content}
    </div>
  )
}

export default App
