"use strict";
const React = require("react");
const { Text } = require("ink");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const moment = require("moment");

const App = ({ count }) => {

    const timeHandler = (count) => {
        if(!count) return moment(new Date()).format('HH:mm:ss');
    }

	const [counter, setCounter] = React.useState("go");

	React.useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prevCounter) => {
				return timeHandler(count)
			});
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Gradient name="rainbow">
			<BigText text={counter.toString()} />
		</Gradient>
	);
};

module.exports = App;
