import './Animal.css';

const Animal = ({emoji, name, sound}) => (
    <h1>Hi {emoji}. I am a {name} and I {sound}!</h1>
);

export default Animal;