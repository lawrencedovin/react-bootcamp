const number = (min=1, max=10) => {
   return ((Math.random() * (max - min)) + min)
};

const RandomNumber = (props) => (
    <h1>
        { number(props.min, props.max) }
    </h1>
);

export default RandomNumber;