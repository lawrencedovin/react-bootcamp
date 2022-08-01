const number = (min=1, max=10) => {
   return Math.floor((Math.random() * max) + min);
};

const RandomNumber = (props) => (
    <h1>
        { number(props.min, props.max) }
    </h1>
);

export default RandomNumber;