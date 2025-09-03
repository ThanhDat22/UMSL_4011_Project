interface GreetingProps {
  name: string;
  title?: string;
}

const Greeting = ({name, title}: GreetingProps)  => {
  return (
    <div>Hello {title?.toLowerCase()} {name}!</div>
  );
};

export const App = () => {
  const name = 'Mike';
  const title = 'Professor';
  return (
    <Greeting name={name} title={title}/>
  );
};

//const App2 = createElement('div', {}, 'Hello world!')